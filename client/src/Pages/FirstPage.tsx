import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export async function loader() {
  const response = await axios.get("http://localhost:3000/api/notes");
  return response.data;
}

export default function FirstPage() {
  const navigate = useNavigate();
  const [comments, setComments] = useState<Commets[]>([]);
  const { notes } = useLoaderData() as Notes;

  const onClickNote = async (_id: string) => {
    const response = await axios.get(
      `http://localhost:3000/api/notes/${_id}/comments`
    );
    setComments(response.data);
  };

  return (
    <PageContainer>
      <NotesContainer>
        <NotesDiv>
          <NoteDetailDiv>
            <Title>Notes</Title>
            {notes.map((note) => (
              <NoteDisplayDiv
                onClick={() => {
                  onClickNote(note._id);
                }}
              >
                <NoteTitle>{note.title}</NoteTitle>
              </NoteDisplayDiv>
            ))}
          </NoteDetailDiv>
          <StyledButton
            onClick={() => {
              navigate("/Create");
            }}
          >
            Create New Note{" "}
          </StyledButton>
        </NotesDiv>
        <CommentsDiv>
          {comments.comments &&
            comments.comments.map((comment) => <div>{comment.text}</div>)}
        </CommentsDiv>
      </NotesContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100dvh;
  width: 100vw;
  justify-content: center;
`;

const NotesContainer = styled.div`
  width: 80%;
  display: flex;
  min-height: 80dvh;
`;

const NoteDetailDiv = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  cursor: pointer;
`;

const NotesDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 30%;
  border: 1px solid #07d1ad;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
  justify-content: space-between;
`;

const CommentsDiv = styled.div`
  background-color: #dcf5e6;
  width: 70%;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 25px;
  color: #2ac5a8;
  margin: 0;
`;

const NoteTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0%;
  padding: 0 0.5rem;
`;

const NoteDisplayDiv = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #47c6af;
  padding: 0 1rem;
`;

const StyledButton = styled.button`
  background-color: #0bc08a;
  width: 60%;
  color: #fff7ed;
`;
