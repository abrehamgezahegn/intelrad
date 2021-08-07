import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import DeleteIcon from "@material-ui/icons/Delete";
import { StyledTableRow } from "./styles";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "phoneNumber", label: "Phone Number", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "visitTime", label: "Visit Time", minWidth: 170 },
  { id: "radiologist", label: "Radiologist", minWidth: 170 },
  { id: "radiographer", label: "Radiographer", minWidth: 170 },
  { id: "condition", label: "Condition", minWidth: 170 },
];

const rows = [
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: false,
  },
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: true,
  },
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: false,
  },
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: true,
  },

  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: true,
  },
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: false,
  },

  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: true,
  },
  {
    name: "Abebech Bersabeh",
    phoneNumber: "09124115125",
    date: "10-10-2021",
    visitTime: "12:40PM",
    radiologist: "Dr.Someone",
    radiographer: "Dr.Radiographer",
    condition: "Bacterial Puemonia",
    opened: true,
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
              .sort((item) => (item.opened ? 1 : -1))
              .map((row) => {
                return (
                  <StyledTableRow
                    className="tr"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    opened={row.opened}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id];

                      if (index === columns.length - 1) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div className="row">
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                              <DeleteIcon
                                className="icon"
                                color={"#fff"}
                                style={{ color: "#D64545", marginLeft: 48 }}
                              />
                            </div>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          style={{
                            color: !row.opened && "#000",
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
