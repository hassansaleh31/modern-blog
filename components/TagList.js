export default (props) => (
    <ul style={{ margin: '0', padding: '1em 0' }}>
        {props.tags.map((tag, i) => (
            <li key={i} style={{
                display: 'inline-block',
                padding: '1em',
                marginRight: '1em',
                marginBottom: '.5em',
                backgroundColor: '#001335',
                color: '#fcfcfc',
                borderRadius: '0.5em',
                boxShadow: '0 0 1em #0013355e'
            }}>
                <span>{tag}</span>
            </li>
        ))}
    </ul>
)