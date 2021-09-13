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
import { ButtonOutlined } from "../../../../components/Button";
import AlertDialog from "../../../../components/AlertDialog";

import { useHistory } from "react-router";

const columns = [
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "lastName", label: "Last Name", minWidth: 170 },
  { id: "age", label: "Age", minWidth: 80 },
  { id: "sex", label: "Sex", minWidth: 100 },
  // { id: "phoneNumber", label: "Phone Number", minWidth: 170 },
  { id: "priority", label: "Priority", minWidth: 120 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "visitTime", label: "Visit Time", minWidth: 170 },
  { id: "radiologist", label: "Radiologist", minWidth: 170 },
  { id: "radiographer", label: "Radiographer", minWidth: 170 },
  { id: "condition", label: "Condition", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ records = [] }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();
  const [isAlertOPen, toggleAlert] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getButtonColor = (value) => {
    if (value === "requested") return "yellow";
    else if (value === "diagnosed") return "green";
  };

  const openAlert = (record) => {
    toggleAlert(true);
  };

  const onDelete = () => {
    console.log("deleting record");
    // fetch fresh records
    toggleAlert(false);
  };

  return (
    <Paper className={classes.root}>
      <AlertDialog
        open={isAlertOPen}
        onCancel={() => {
          toggleAlert(false);
        }}
        onConfirm={onDelete}
        title="Are you sure you want to delete this record?"
        description="Warning: The diagnosis data will be lost!"
      />
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
            {records.length === 0 && (
              <div className="w-full ml-4 mb-12">
                <h1 className="whitespace-nowrap	text-lg text-center mt-8">
                  No data found matching your search term
                  {/* <span className="font-bold">"{searchTerm}"</span> */}
                </h1>
              </div>
            )}

            {records
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((item) => (item.status !== "diagnosed" ? 1 : -1))
              .map((row) => {
                return (
                  <StyledTableRow
                    className="tr"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    opened={row.status !== "diagnosed"}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id];

                      if (column.id === "status") {
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
                              <DeleteIcon
                                onClick={() => {
                                  console.log("delete click");
                                  openAlert(row);
                                }}
                                className="icon"
                                color={"#fff"}
                                style={{
                                  color: "#D64545",
                                  marginLeft: 48,
                                }}
                              />
                            </div>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          onClick={() => {
                            if (row.status === "diagnosed")
                              history.push("/diagnose");
                          }}
                          style={{
                            color: !row.opened && "#000",
                            textTransform: "capitalize",
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
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
