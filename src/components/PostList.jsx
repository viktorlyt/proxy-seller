import React from "react";
import { useParams } from "react-router-dom";
import { useFetchAllPostsQuery } from "../redux/UserService";

const PostList = React.memo(() => {
  const { data: posts } = useFetchAllPostsQuery();
  const { userId } = useParams();

  const userPosts = posts?.filter((post) => {
    if (!userId) {
      return null;
    }

    return post.userId === +userId;
  });

  return (
    <div>
      <div className="posts__list">
        <h2>Posts of User #{userId}</h2>
        {userPosts &&
          userPosts.map((post) => (
            <div key={post.id} className="post__item">
              <p className="postTitle">{post.title}</p>
              <p className="postBody">{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
});

export default PostList;
