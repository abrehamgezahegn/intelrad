import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 24px;
  .inner {
    width: 100%;
    max-width: ${(props) => props.theme.breakPoint.XXXL};
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .diagnosis_area {
    width: 70%;
  }

  .diagnosis-title {
    margin-bottom: 44px;
  }

  .images {
    display: flex;
    position: relative;
  }

  .img-zoom-lens {
    position: absolute;
    border: 1px solid #d4d4d4;
    width: 160px;
    height: 160px;
  }

  .img-zoom-result {
    border: 1px solid #d4d4d4;
    width: 600px;
    height: 600px;
  }

  .image_label {
    margin-bottom: 18px;
  }

  .image {
    width: 600px;
    height: 600px;
    margin-right: 44px;
  }
  .text_area_container {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  .textarea fieldset {
    border-width: 2px;
  }

  .textarea {
    width: 95%;
    background-color: ${(props) => props.theme.white};
  }

  .textarea textarea {
    font-size: 24px;
  }

  .right-content {
    margin-left: 80px;
  }

  .risk_card {
    margin-bottom: 60px;
  }
  .submit {
    ${(props) => props.theme.button}
  }

  .submit:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
