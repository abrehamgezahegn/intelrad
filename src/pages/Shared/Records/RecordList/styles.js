import styled from "styled-components";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRow = styled(TableRow)`
  td {
    color: ${(props) => {
      if (!props.opened) return props.theme.grey1;
      return props.theme.grey2;
    }} !important;
    font-weight: ${(props) => {
      if (!props.opened) return 900;
      return 400;
    }} !important;
  }
`;

export const Container = styled.div`
  width: 100%;

  .table_container {
    margin-top: 44px;
  }

  .tr {
    border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
    height: 64px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
  }

  .tr:hover {
    box-shadow: -1px 5px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;
