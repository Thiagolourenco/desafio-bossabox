import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;

  header {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 22%;
    align-self: flex-start;

    .title {
      font-size: 40px;
    }

    p {
      font-size: 26px;
      margin-top: 15px;
    }
  }
`;

export const Search = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .check {
    width: 25px;
    margin-left: 8px;
    height: 21px;
    background: #c4c4c4;
  }
`;

export const Inputs = styled.div``;

export const ButtonAdd = styled.button`
  height: 40px;
  width: 174px;
  background: #365df0;
  border-radius: 5px;
  border: 0;
  margin-left: 120px;
  color: #fff;
  font-size: 20px;
`;

export const InputSearch = styled.div`
  height: 40px;
  width: 325px;
  padding: 10px;
  background: rgba(245, 244, 256, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: row;

  button {
    background: transparent;
    border: 0;
  }

  input {
    background: none;
    width: 100%;
    border: 0;
    margin-left: 5px;
  }
`;
