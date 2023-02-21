import React from "react";
import { useFetchAllAlbumsQuery } from "../redux/UserService";

const AlbumModal = ({ userId, modalActive, setModalActive }) => {
  const { data: albums } = useFetchAllAlbumsQuery();
  const userAlbums = albums?.filter((album) => album.userId === userId);

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Albums of User #{userId}</h2>

        {userAlbums?.map((album) => (
          <div key={album.id} className="album">
            {album.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumModal;
