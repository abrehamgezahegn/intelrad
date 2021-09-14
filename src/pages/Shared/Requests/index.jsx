import React, { useEffect } from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";
import Select from "../../../components/Form/Select";
import { StyledInput } from "../../../components/Form/Input";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useAuth } from "../../../context/AuthProvider";

const filter = {
  radiologist: "imaged",
  radiographer: "requested",
};

const Requests = () => {
  const [allRecords, setAllRecords] = React.useState([]);
  const [records, setRecords] = React.useState([]);
  const [priority, setPriority] = React.useState("all");
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

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      let data = [];
      querySnapshot.forEach((item) => {
        const dignosises = item.data().diagnosis.map((rec) => {
          console.log("rec", rec);
          const t = new Date(rec.createdAt.seconds);
          // const t = new Date
          console.log("t", t);
          // const date = getDate(t);
          // console.log("date", date);
          return { ...rec, doctor: rec.doctor.name, ...item.data() };
        });
        data = [...data, ...dignosises];
      });
      console.log("data", data);
      const filteredData = data.filter(
        (item) => item.status === filter[auth.user.role]
      );
      console.log("data", filteredData);
      setAllRecords(filteredData);
      setRecords(filteredData);
    };
    fetchPatients();
  }, []);

  return (
    <Container>
      <div className="inner">
        <div>
          <div className="row d_header">
            <h1 className="text-2xl">Requests</h1>
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
                  onChange={(value) => {
                    setPriority(value);
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
