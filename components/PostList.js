import PostCard from './PostCard'
const PostList = (props) => (
    <ul className="post-list">
        {
            props.posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))
        }
        <style jsx global>
            {`
                .post-list {
                    list-style: none;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 1em;
                    padding: 0;
                }

                @media only screen and (min-width: 662px) {
                    .post-list {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (min-width: 1250px) {
                    .post-list {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                .post-card-image {
                    background-size: cover;
                    background-position: center;
                    border-radius: 0.5em 0.5em 0 0;
                }

                .post-card-image::after {
                    content: '';
                    display: block;
                    padding-bottom: 50%;
                }

                .post-card {
                    background-color: white;
                    border-radius: .5em;
                    box-shadow: 0 0 1em #a7a7a78a;
                    transition: transform 200ms ease-out, opacity 200ms ease-out;
                }

                .post-card:hover {
                    transform: translateY(-0.5em);
                    opacity: 0.85;
                }

                .post-card-content {
                    padding: 1em;
                }

                .post-card {
                    cursor: pointer;
                }
            `}
        </style>
    </ul>
)

export default PostList