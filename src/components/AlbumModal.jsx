import React, { useCallback } from "react";
import { useFetchAllAlbumsQuery } from "../redux/UserService";

const AlbumModal = React.memo(({ userId, modalActive, setModalActive }) => {
  const { data: albums } = useFetchAllAlbumsQuery();
  const userAlbums = albums?.filter((album) => album.userId === userId);

  const closeModal = useCallback(() => setModalActive(false), [setModalActive]);

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      onClick={closeModal}
    >
      <div
        className={modalActive ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="icon cross">
          <i className="fa-solid fa-xmark" onClick={closeModal} />
        </span>
        <h2>Albums of User #{userId}</h2>

        {userAlbums?.map((album) => (
          <div key={album.id} className="album">
            {album.title}
          </div>
        ))}
      </div>
    </div>
  );
});

export default AlbumModal;
