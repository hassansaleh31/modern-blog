const TagList = ({ tags }) => (
    tags
        ? tags.length > 0
            ? (
                <div>
                    <h3>Tags:</h3>
                    <ul style={{ margin: '0', padding: '1em 0' }}>
                        {tags.map((tag, i) => (
                            <li className="article-tag" key={i}>
                                <span>#{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
            : null
        : null
)

export default TagList