import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.post.id}`} href={`/post?id=${props.post.id}`}>
            <a>{props.post.title}</a>
        </Link>
        <p>{props.post.body}</p>
    </li>
)

export default PostLink