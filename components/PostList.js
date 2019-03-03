import PostCard from './PostCard'
const PostList = ({ posts }) => (
    <ul className="post-list">
        {
            posts.map((post) => (
                <li key={post.article_id}>
                    <PostCard post={post} />
                </li>
            ))
        }
    </ul>
)

export default PostList