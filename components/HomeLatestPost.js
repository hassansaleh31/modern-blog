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
            <span>{new Date(props.post.date).toDateString()}</span>
            <p>{props.post.description}</p>
            <div style={{ flex: '1 1 auto' }}></div>
            <a href={`/p/${props.post.id}`} style={{ alignSelf: 'flex-end' }}>Read More</a>
        </div>
    </div>
)