import styled from "styled-components";


export const FormContainer = styled.form `
  width: 50%;
  margin: 50px auto;
  border: 1px groove gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  input {
    width: 100px;
    border: none;
    padding: 10px;
  }
`

export const BoxInput = styled.div `
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    width: 100px;
    border: none;
    padding: 10px;
  }

  span {
    color: red;
  }
`