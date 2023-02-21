import { NavLink } from "react-router-dom";
import { useFetchAllUsersQuery } from "../redux/UserService";
import AlbumModal from "./AlbumModal";
import PostList from "./PostList";
import { useState } from "react";

const UserList = () => {
  const [modalActive, setModalActive] = useState(false);
  const [userId, setUserId] = useState(0);
  const { data: users } = useFetchAllUsersQuery();

  return (
    <div className="user__list">
      <h1 className="title">Users:</h1>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="userName">
                {`${user.id}. ${user.name}`}
                <div className="btns">
                  <NavLink target="_blank" to={user.id.toString()}>
                    <button
                      type="button"
                      className="posts_btn"
                      onClick={() => <PostList />}
                    >
                      Posts
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="albums_btn"
                    onClick={() => {
                      setUserId(user.id);
                      setModalActive(true);
                    }}
                  >
                    Albums
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AlbumModal
        userId={userId}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
};

export default UserList;
