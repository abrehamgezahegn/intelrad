import React from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";
import Select from "../../../components/Form/Select";
// import { useHistory } from "react-router-dom";
import { StyledInput } from "../../../components/Form/Input";
import { records as data } from "../../../utils/dummyData";

const Requests = () => {
  // const history = useHistory();
  const [allRecords] = React.useState(data);
  const [records, setRecords] = React.useState(data);
  const [priority, setPriority] = React.useState("all");

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
