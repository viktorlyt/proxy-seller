import { useParams } from "react-router-dom";
import { useFetchAllPostsQuery } from "../redux/UserService";

const PostList = () => {
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
        <h2>Posts of User # {userId}</h2>
        {userPosts &&
          userPosts.map((post) => (
            <p key={post.id} className="post__item">
              {post.id}. {post.title}
            </p>
          ))}
      </div>
    </div>
  );
};

export default PostList;
