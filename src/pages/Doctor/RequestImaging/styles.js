import styled from "styled-components";
import { BasicContainer } from "../../../components/StyledComponents";

export const Container = styled(BasicContainer)`
  .content {
    display: flex;
    justify-content: center;
    ${(props) => props.theme.card}
    border-bottom: 14px solid ${(props) => props.theme.primary1};
  }

  .left_content {
    margin-right: 200px;
  }

  .text_area {
    width: 560px;
    height: 200px;
    margin-bottom: 24px;
  }
`;
