let blogPosts = [
    {
        id: 1,
        title: 'Who am I',
        description: 'This is my first blog post',
        body: `
# Marked - Markdown Parser

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

## How To Use The Demo

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

## Syntax highlighting

### Javascript

\`\`\`javascript
const myArr = [0, 1, 2, 3, 4];

const sum = myArr.reduce((a,b) => { return a + b}, 0);

console.log(sum) // expected value: 10
\`\`\`

### CSS

\`\`\`css
body {
    margin: 0;
    backgroung-color: #fcfcfc;
}
\`\`\`

### HTML

\`\`\`html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Chatster</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root>Loading Page...</app-root>
</body>
</html>
\`\`\`

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
        `,
        date: new Date('2019-02-06'),
        author: 'Hassan Saleh',
        category: 'Design',
        tags: ['react', 'css','react', 'css','react', 'css','react', 'css','react', 'css','react', 'css','react', 'css'],
        image: 'https://picsum.photos/1920/1080?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: null,
        next: 2
    },
    {
        id: 2,
        title: 'Hello world 2',
        description: 'This is my first blog post',
        body: 'This is blog post 2',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hassan Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/1920/1080?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 1,
        next: 3,
        comments: []
    },
    {
        id: 3,
        title: 'Hello world 3',
        description: 'This is my first blog post',
        body: 'This is blog post 3',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hussam Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/1920/1080?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 2,
        next: 4
    },
    {
        id: 4,
        title: 'Hello world 4',
        description: 'This is my first blog post',
        body: 'This is blog post 4',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hassan Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/1920/1080?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 3,
        next: 5
    },
    {
        id: 5,
        title: 'Hello world 5',
        description: 'This is my first blog post',
        body: 'This is blog post 5',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hussam Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/1920/1080?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 4,
        next: null
    }
]

class PostsMethods {
    getPosts() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(blogPosts)
            }, 500);
        })
    }

    getPost(id) {
        return new Promise(resolve => {
            const post = blogPosts.find(post => post.id == id)
            setTimeout(() => {
                resolve(post)
            }, 500);
        })
    }

    getRelated(id) {
        return new Promise(resolve => {
            const post = blogPosts.filter(post => post.id != id)
            setTimeout(() => {
                resolve(post)
            }, 500);
        })
    }

    deletePost(id) {
        blogPosts = blogPosts.filter(post => post != id)
        return true;
    }
}

export default new PostsMethods()