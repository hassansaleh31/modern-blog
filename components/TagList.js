export default ({ tags }) => (
    tags
        ? tags.length > 0
            ? (
                <div>
                    <h3>Tags:</h3>
                    <ul style={{ margin: '0', padding: '1em 0' }}>
                        {tags.map((tag, i) => (
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
                </div>
            )
            : null
        : null
)