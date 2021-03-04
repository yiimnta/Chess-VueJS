# BACKEND

## Setup

Before running test you need to create a file .env in backend root with the JWT secret, e.g.
```
NEO4J_URL=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=neo4j
JWT_SECRET=TEST
```

``` bash
# setup
yarn install

# lint
yarn lint

# start server at localhost:4000
yarn start

```
## NEO4J

### Create admin
Run the following code in Neo4j
```
CREATE(u:User {
    id: apoc.create.uuid(),
    email: 'admin@gmail.com',	      //email to login
    name: 'admin',	              //name
    password: 'admin',	              //password to login
    role: 1,	                      //1: admin, 0: normal user
    hashedPassword: '$2b$10$8g4fvDCOuaBt.l6fba4tee.FnXR4I5Ew.89ff7okcoN8DChENtJlm',   //hashed password to compare
    avatar: 'default-avatar.png',     //default avatar
    status: 0                         //0: Normal, 1: locked
  }
)
```
## Guide

<h4>The Server ready at http://localhost:4000 </h4>
