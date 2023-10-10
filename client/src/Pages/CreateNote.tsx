import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (data.title.length < 2) return alert("Minimum two character ");
    axios
      .post("http://localhost:3000/api/notes", data)
      .then(() => navigate("/"));
  };

  return (
    <Contanier>
      <CreateDiv onSubmit={handleSubmit}>
        <Title>Create New Note</Title>
        <InputDiv>
          <InputContainer>
            <Input type="text" name="title" />
            <CreateButton type="submit" value="Submit">
              Create
            </CreateButton>
          </InputContainer>
          <CancelButton>Cancel</CancelButton>
        </InputDiv>
      </CreateDiv>
    </Contanier>
  );
}

const Contanier = styled.div`
  display: flex;
  align-items: center;
  min-height: 100dvh;
  width: 100vw;
  justify-content: center;
`;

const CreateDiv = styled.form`
  display: grid;
  background-color: #ffffff;
  border-radius: 10px;
  width: 40%;
  min-height: 40dvh;
  justify-items: center;
`;

const Title = styled.p`
  margin-bottom: 0px;
  color: #07c7a4;
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid #07c7a4;
  border-radius: 7px;
`;

const Input = styled.input`
  border: none;
  border-radius: 7px 0px 0px 7px;
  background-color: #f2f2f2;
`;

const CreateButton = styled.button`
  background-color: #07c7a4;
  color: #ffffff;
  border-radius: 0px 7px 7px 0px;
`;

const CancelButton = styled.button`
  color: #07c7a4;
  background-color: #ffffff;
`;
