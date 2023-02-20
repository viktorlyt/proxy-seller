import { NavLink } from "react-router-dom";
import { useFetchAllUsersQuery } from "../redux/UserService";
import AlbumModal from "./AlbumModal";
import PostList from "./PostList";

const UserList = () => {
  const { data: users } = useFetchAllUsersQuery();
  console.log(users);

  return (
    <div className="user__list">
      <h1 className="title">Users:</h1>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                {user.id}.{user.name}
                {"    "}
              </p>
              <p>
                <NavLink target="_blank" to={user.id.toString()}>
                  <button
                    type="button"
                    className="posts_btn"
                    onClick={() => <PostList />}
                  >
                    Posts
                  </button>
                </NavLink>
                <NavLink to={`/albums/${user.id.toString()}`}>
                  <button
                    type="button"
                    className="albums_btn"
                    onClick={() => <AlbumModal />}
                  >
                    Albums
                  </button>
                </NavLink>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
