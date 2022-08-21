import "./app.css";
import { useState } from "react";

import { Container } from "@mui/material";

import RegistrationForm from "./components/RegistrationForm";
import RegisteredUsers from "./components/RegisteredUsers";

function App() {

  const [users, setUsers] = useState([]);

  return (
    <Container>
      <RegistrationForm setUsers={setUsers} />
      <RegisteredUsers users={users} />
    </Container>
  );
}

export default App;
