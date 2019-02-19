import PostCard from './PostCard'
const PostList = ({ posts }) => (
    <ul className="post-list">
        {
            posts.map((post) => (
                <PostCard key={post.article_id} post={post} />
            ))
        }
    </ul>
)

export default PostList