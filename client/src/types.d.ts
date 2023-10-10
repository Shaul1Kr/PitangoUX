type Notes = {
  title: string;
  content: string;
  _id: string;
  notes: Array<Notes>;
};

type Commets = {
  text: string;
  note_id: string;
  _id: string;
  comments: Array<Commets>;
};
