import PostCard from './PostCard'
const PostList = (props) => (
    <ul className="post-list">
        {
            props.posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))
        }
    </ul>
)

export default PostList