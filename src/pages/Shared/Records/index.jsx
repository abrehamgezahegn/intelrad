import React, { useEffect } from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";

import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DataCard from "./DataCard";
import { Button } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Select from "../../../components/Form/Select";
import { useHistory } from "react-router-dom";
import { StyledInput } from "../../../components/Form/Input";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { getDate, getTime } from "../../../utils/dateFormat";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../context/AuthProvider";

const Records = () => {
  const [allRecords, setAllRecords] = React.useState([]);
  const [records, setRecords] = React.useState([]);
  const [patients, setPatients] = React.useState([]);
  const [practitioners, setPractitioners] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const [state, setState] = React.useState("loading");
  const [searchTerm, setSearchTerm] = React.useState("");

  const auth = useAuth();

  const history = useHistory();

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = allRecords.filter((item) => {
      if (
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.lastName.toLowerCase().includes(searchTerm)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setRecords(filtered);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      let data = [];
      let patients = [];
      let practitioners = [];
      querySnapshot.forEach((item) => {
        patients = [...patients, item.data()];
        const dignosises = item.data().diagnosis.map((rec) => {
          const date = getDate(rec.createdAt.seconds);
          const time = getTime(rec.createdAt.seconds);
          return {
            ...item.data(),
            ...rec,
            radiographer: rec.radiographer?.name,
            radiologist: rec.radiologist?.name,
            date,
            visitTime: time,
          };
        });
        data = [...data, ...dignosises];
      });

      const usersQuerySnapshot = await getDocs(collection(db, "users"));
      usersQuerySnapshot.forEach((item) => {
        practitioners = [...practitioners, item.data()];
      });

      data = data.sort((a, b) => b.updatedAt.seconds - a.updatedAt.seconds);

      if (auth.user.role === "radiologist") {
        data = data.filter((item) => item.status === "diagnosed");
      } else if (auth.user.role === "radiographer") {
        data = data.filter(
          (item) => item.status === "imaged" || item.status === "diagnosed"
        );
      }

      setAllRecords(data);
      setRecords(data);
      setPatients(patients);
      setPractitioners(practitioners);

      setState("success");
    };
    fetchPatients();

    // eslint-disable-next-line
  }, []);

  const onDiagnosisDelete = async (diagnosis) => {
    try {
      const docRef = doc(db, "patients", diagnosis.id);
      const docSnap = await getDoc(docRef);
      const patient = docSnap.data();

      const updatedDiagnosis = patient.diagnosis.filter(
        (item) => item.diagnosisId !== diagnosis.diagnosisId
      );
      await setDoc(doc(db, "patients", patient.id), {
        ...patient,
        diagnosis: updatedDiagnosis,
      });
      let filteredData = allRecords.filter(
        (item) => item.diagnosisId !== diagnosis.diagnosisId
      );

      setAllRecords(filteredData);
      setRecords(filteredData);
    } catch (error) {
      console.log("on diagnosis delete", error);
    }
  };

  const noData = () => {
    if (searchTerm.length === 0 && status === "all" && allRecords.length === 0)
      return true;
  };

  const isDoctor = () => {
    if (auth.user.role === "doctor") return true;
  };

  if (state === "loading") {
    return (
      <div
        className="flex justify-center items-center"
        style={{ height: "70vh" }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <Container>
      <div className="inner">
        {isDoctor() && (
          <div className="card_container">
            <div className="card_item">
              <DataCard
                icon={
                  <NoteOutlinedIcon
                    style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                  />
                }
                value={allRecords.length}
                title="Records"
              />
            </div>
            <div className="card_item">
              <DataCard
                icon={
                  <WcOutlinedIcon
                    style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                  />
                }
                value={patients.length}
                title="Patients"
              />{" "}
            </div>

            <div className="card_item">
              <DataCard
                icon={
                  <PersonPinCircleOutlinedIcon
                    style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                  />
                }
                value={practitioners.length}
                title="Practitioners"
              />
            </div>
          </div>
        )}
        <div>
          <div className="row d_header">
            <h1>Diagnosis</h1>
            <div className="row">
              <div className="mr-5">
                <StyledInput
                  onChange={handleFilter}
                  placeholder="Search"
                  variant="outlined"
                />
              </div>
              {isDoctor() && (
                <div className="select">
                  <Select
                    options={[
                      { label: "All", value: "all" },
                      { label: "Diagnosed", value: "diagnosed" },
                      { label: "Requested", value: "requested" },
                      { label: "Imaged", value: "imaged" },
                    ]}
                    onChange={(item) => {
                      setStatus(item.value);
                    }}
                  />
                </div>
              )}
              {isDoctor() && (
                <Button
                  onClick={() => {
                    history.push("/request");
                  }}
                  color="primary"
                  className="button"
                >
                  <AddOutlinedIcon /> New request
                </Button>
              )}
            </div>
          </div>
          <RecordList
            records={records.filter((item) => {
              if (status === "all" || status === "") return true;
              if (item.status.toLowerCase() === status.toLowerCase())
                return true;
              return false;
            })}
            onDiagnosisDelete={onDiagnosisDelete}
            noData={noData()}
          />
        </div>
      </div>
    </Container>
  );
};

export default Records;
