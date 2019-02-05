import Link from 'next/link'

export default (props) => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: 'white',
        borderRadius: '.5em',
        boxShadow: '0 0 1em #a7a7a78a'
    }}>
        <div style={{
            backgroundImage: `url(${props.post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            borderRadius: '0.5em 0 0 0.5em'
        }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1em' }}>
            <h1 style={{ margin: 0, marginBottom: '1em' }}>{props.post.title}</h1>
            <span>{props.post.date.toLocaleString()}</span>
            <p>{props.post.body}</p>
            <div style={{ flex: '1 1 auto' }}></div>
            <Link as={`/p/${props.post.id}`} href={`/post?id=${props.post.id}`}>
                <a style={{ alignSelf: 'flex-end' }}>Read More</a>
            </Link>
        </div>
    </div>
)