import gql from 'graphql-tag'

export const userInfor = gql`
  query getUser($token: String!){
    getUser(token: $token){
        name
    }
  }`
