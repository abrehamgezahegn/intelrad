import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import { StyledTableRow } from "./styles";
import { ButtonOutlined } from "../../../../components/Button";

import { useHistory } from "react-router";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "age", label: "Age", minWidth: 80 },
  { id: "sex", label: "Sex", minWidth: 100 },
  // { id: "phoneNumber", label: "Phone Number", minWidth: 170 },
  { id: "priority", label: "Priority", minWidth: 120 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "visitTime", label: "Visit Time", minWidth: 170 },
  { id: "doctor", label: "Doctor", minWidth: 170 },
  // { id: "status", label: "Status", minWidth: 170 },
];

const rows = [
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "low",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "diagnosed",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "high",
    age: 33,
    sex: "male",
  },

  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "diagnosed",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "emergency",
    age: 33,
    sex: "male",
  },

  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "medium",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "low",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "low",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "diagnosed",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "high",
    age: 33,
    sex: "male",
  },

  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "diagnosed",
    priority: "emergency",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "requested",
    priority: "emergency",
    age: 33,
    sex: "male",
  },

  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "medium",
    age: 33,
    sex: "male",
  },
  {
    name: "Abebech Bersabeh",
    // phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    doctor: "Dr.Someone",
    condition: "Bacterial Puemonia",
    status: "Imaged",
    priority: "low",
    age: 33,
    sex: "male",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getButtonColor = (value) => {
    if (value === "high" || value === "emergency") return "red";
    else if (value === "medium") return "yellow";
    else if (value === "low") return "green";
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((item) => (item.status !== "diagnosed" ? 1 : -1))
              .map((row) => {
                return (
                  <StyledTableRow
                    className="tr"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id];

                      if (column.id === "priority") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div className="row">
                              <div className="status_button">
                                <ButtonOutlined
                                  style={{ borderRadius: 22, width: "100%" }}
                                  color={getButtonColor(value)}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </ButtonOutlined>
                              </div>
                            </div>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          onClick={() => {
                            console.log("to upload");
                            history.push("/upload-x-ray/1111qad");
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
