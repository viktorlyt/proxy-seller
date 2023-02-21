import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import UserList from "./components/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path=":userId" element={<PostList />} />
    </Routes>
  );
}

export default App;
