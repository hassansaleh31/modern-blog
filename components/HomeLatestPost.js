import Link from 'next/link'

const HomeLatestPost = (props) => (
    <Link href={`/p/${props.post.article_id}`} legacyBehavior>
        <a>
            <div id="latest-post" style={{ backgroundImage: `url(${props.post.image})` }}>
                <div id="latest-post-content" style={{ padding: '1em' }}>
                    <h1 style={{ margin: 0, marginBottom: '1em' }}>{props.post.title}</h1>
                    <span>{new Date(props.post.created_at).toDateString()}</span>
                </div>
                <style jsx>
                    {`
                        #latest-post {
                            border-radius: .5em;
                            box-shadow: 0 0 1em #a7a7a78a;
                            background-size: cover;
                            background-position: center;
                            position: relative;
                            background-color: white;
                            transition: transform 200ms ease-out;
                        }

                        #latest-post::after {
                            content: '';
                            display: block;
                            padding-bottom: 100%;
                        }

                        @media only screen and (min-width: 686px) {
                            #latest-post::after {
                                padding-bottom: 50%;
                            }
                        }

                        #latest-post:hover {
                            transform: scale(0.98);
                        }

                        #latest-post-content {
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            color: white;
                            background-image: linear-gradient(#00000073, black);
                            border-radius: 0 0 .5em .5em;
                        }

                        #latest-post-footer {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                        }
                    `}
                </style>
            </div>
        </a>
    </Link>
)

export default HomeLatestPost