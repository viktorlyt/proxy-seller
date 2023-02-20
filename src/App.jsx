import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import AlbumModal from "./components/AlbumModal";
import UserList from "./components/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path=":userId" element={<PostList />} />
      <Route path="albums/:userID" element={<AlbumModal />} />
    </Routes>
  );
}

export default App;
