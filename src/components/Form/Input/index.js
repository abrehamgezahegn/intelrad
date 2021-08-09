import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const StyledInput = styled(TextField)`
  background-color: ${(props) => props.theme.white};
  border-radius: 16px;

  fieldset {
    border-radius: 12px;
    border-color: ${(props) => props.theme.grey4};
  }

  fieldset:hover {
    border-color: red;
  }
`;
