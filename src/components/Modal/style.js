import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 881px;

  p {
    padding: 0 30px;
    margin-top: 25px;
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: row;

    h1 {
      font-size: 18px;
      margin-left: 15px;
    }
  }

  label {
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 5px;
      border: 0;
      border-radius: 5px;
      font-size: 18px;
      height: 45px;
      background: #c4c4c4;
      padding-left: 10px;
    }

    textarea {
      height: 133px;
      margin-top: 5px;
      border: 0;
      border-radius: 5px;
      padding: 10px;
      font-size: 18px;
      background: #c4c4c4;
    }
  }

  .groupbutton {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      background: #365df0;
      border-radius: 5px;
      width: 174px;
      height: 45px;
      border: 0px;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      margin-top: 20px;
    }

    .cancel {
      background: #f95e5a;
      border-radius: 5px;
      width: 174px;
      height: 45px;
      border: 0px;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      /* margin-left: 625px; */
      margin-top: 20px;
    }
  }
`;
