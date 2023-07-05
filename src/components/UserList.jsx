import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useFetchAllUsersQuery } from "../redux/UserService";
import AlbumModal from "./AlbumModal";
import { SortLink } from "./SortLink";
import PostList from "./PostList";
import { getSearchWith } from "../helpers/searchHelper";

const UserList = () => {
  const [modalActive, setModalActive] = useState(false);
  const [userId, setUserId] = useState(0);
  const { data: users } = useFetchAllUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const sortField = searchParams.get("sort");
  const isReversed = searchParams.get("order") === "desc";

  const handleQuery = useCallback(
    (event) =>
      setSearchParams(
        getSearchWith(searchParams, { query: event.target.value || null })
      ),
    [setSearchParams, searchParams]
  );

  const visibleUsers = useMemo(() => {
    if (!users) return [];

    let filteredUsers = [...users];

    if (query) {
      const lowerQuery = query.toLowerCase();

      filteredUsers = filteredUsers.filter(({ name }) =>
        name.toLowerCase().includes(lowerQuery)
      );
    }

    if (sortField) {
      filteredUsers.sort((a, b) => a[sortField].localeCompare(b[sortField]));
    }

    if (isReversed) {
      filteredUsers.reverse();
    }

    return filteredUsers;
  }, [users, query, sortField, isReversed]);

  return (
    <div className="user__list">
      <h1 className="title">Users:</h1>
      <p>
        Sort by name{" "}
        <span>
          <SortLink field="name" />
        </span>
      </p>
      <div className="search">
        <p className="control has-icons-left">
          <input
            type="text"
            className="input"
            id="search"
            placeholder="Search by name"
            value={query}
            onChange={handleQuery}
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
      {users && (
        <ul>
          {visibleUsers.map((user) => (
            <li key={user.id}>
              <div className="userName">
                {`${user.name}`}
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
