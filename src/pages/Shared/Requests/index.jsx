import React, { useEffect } from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";
import Select from "../../../components/Form/Select";
import { StyledInput } from "../../../components/Form/Input";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useAuth } from "../../../context/AuthProvider";
import { getDate, getTime } from "../../../utils/dateFormat";
import Spinner from "../../../components/Spinner";
import RefreshIcon from "@material-ui/icons/RefreshRounded";
import { Button } from "@material-ui/core";

const filter = {
  radiologist: "imaged",
  radiographer: "requested",
};

const Requests = () => {
  const [allRecords, setAllRecords] = React.useState([]);
  const [records, setRecords] = React.useState([]);
  const [priority, setPriority] = React.useState("all");
  const [state, setState] = React.useState("loading");
  const auth = useAuth();

  const handleFilter = (e) => {
    const searchTerm = e.target.value;

    const filtered = allRecords.filter((item) => {
      if (
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.lastName.toLowerCase().includes(searchTerm)
      ) {
        return true;
      } else return false;
    });
    setRecords(filtered);
  };

  const fetchPatients = async () => {
    const querySnapshot = await getDocs(collection(db, "patients"));
    let data = [];
    querySnapshot.forEach((item) => {
      const dignosises = item.data().diagnosis.map((rec) => {
        const date = getDate(rec.createdAt.seconds);
        const time = getTime(rec.createdAt.seconds);

        return {
          ...rec,
          doctor: rec.doctor.name,
          ...item.data(),
          date,
          visitTime: time,
        };
      });
      data = [...data, ...dignosises];
    });
    const filteredData = data.filter(
      (item) => item.status === filter[auth.user.role]
    );
    setAllRecords(filteredData);
    setRecords(filteredData);
    setState("success");
  };
  useEffect(() => {
    fetchPatients();
    // eslint-disable-next-line
  }, [auth.user.role]);

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
        <div>
          <div className="row d_header">
            <div className="flex items-center">
              <h1 className="text-2xl">Requests</h1>
              <Button
                onClick={() => {
                  fetchPatients();
                }}
                className="ml-4"
                style={{ marginLeft: 8 }}
              >
                <RefreshIcon
                  onClick={() => {
                    fetchPatients();
                  }}
                />
              </Button>
            </div>
            <div className="row">
              <div className="mr-5">
                <StyledInput
                  onChange={handleFilter}
                  placeholder="Search"
                  variant="outlined"
                />
              </div>
              <div className="select">
                <Select
                  options={[
                    { label: "All", value: "all" },
                    { label: "Emergency", value: "emergency" },
                    { label: "High", value: "high" },
                    { label: "Medium", value: "medium" },
                    { label: "Low", value: "low" },
                  ]}
                  onChange={(item) => {
                    setPriority(item.value);
                  }}
                />
              </div>
            </div>
          </div>
          <RecordList
            records={records.filter((item) => {
              if (priority === "all" || priority === "") return true;
              if (item.priority.toLowerCase() === priority.toLowerCase())
                return true;
              else return false;
            })}
          />
        </div>
      </div>
    </Container>
  );
};

export default Requests;
