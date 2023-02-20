import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useFetchAllAlbumsQuery } from '../redux/UserService';

const AlbumModal = () => {
  const { data: albums } = useFetchAllAlbumsQuery();
  const { userID } = useParams();
  const [isUserLoaded, setIsUserLoaded] = useState(true);

  const userAlbums = albums?.filter(album => {
    if (!userID) {
      return null;
    }

    return album.userId === +userID;
  });

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />
      {isUserLoaded
        && (
          <>
            <div className="modal-card">
              <h2>Albums of User #{userID}</h2>
              <NavLink to="/">
                <button
                  type="button"
                  className="delete"
                  data-cy="modal-close"
                  onClick={() => {
                    setIsUserLoaded(false);
                  }}
                />
              </NavLink>

              {userAlbums?.map(album => (
                <React.Fragment key={album.id}>
                  <header className="modal-card-head">
                    <div
                      className="modal-card-title has-text-weight-medium"
                      data-cy="modal-header"
                    >
                      {album.id}. {album.title}
                    </div>
                  </header>
                </React.Fragment>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default AlbumModal;
