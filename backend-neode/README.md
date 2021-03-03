# BACKEND

## Setup

Before running test you need to create a file .env in backend root with the JWT secret, e.g. JWT_SECRET=jsonwebtoken

``` bash
# setup
yarn install

# lint
yarn lint

# run test
yarn test

# start server at localhost:4000
yarn start

```

## Guide

<h4>The Server ready at http://localhost:4000 </h4>

<h4>✔️ Example for 'indefinitely' nestable queries.</h4>

```
{
  posts {
    title
    author {
      name
      posts {
        title
        author {
          name
        }
      }
    }
  }
}
```

<h4>✔️ Example for 'Create a new Post' queries.</h4>

```
mutation {
  write(post: { title: "the countryroads", author: { name: "Andrej" } }) {
    id
    title
    author {
      name
    }
  }
}
```

<h4>✔️ Example for 'Upvote' queries.</h4>

```
mutation {
  upvote(id: 0, voter: { name: "Andrej" }) {
    id
    title
    votes
    voters {
      name
      posts {
        title
      }
    }
  }
}
```


#mutation{write(post:{title:"sfs", author:{name:"oijji"}}){id, title, votes, author{name}, voters{name}}}
query{posts{title, id, author{name}, voters{name}}}
#mutation{upvote(id:2, voter:{name:"Lee"}){id, votes, voters{name}}}