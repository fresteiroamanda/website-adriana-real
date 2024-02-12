import styled from "styled-components";

export const FormContainer = styled.div`
  width 100%;
  margin: auto;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 20px;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Roboto',sans-serif;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #ccc;
  width: 250px;
  font-family: 'Roboto',sans-serif;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: #000;
  color: #99761c;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto',sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: #99761c;
    color: #ccc;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background: black;
`
