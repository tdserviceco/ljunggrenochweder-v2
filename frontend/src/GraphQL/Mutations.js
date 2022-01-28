import { gql } from '@apollo/client';

const CREATE_USER = gql`mutation 
RegisterNewUser(
  $username: String! 
  $email: String!
  $password: String!
  ) {
    register(
    input: { username: $username, email: $email, password: $password }
  ) {
    jwt
    user {
      id
      username
      email
    }
  }
  }`;

const LOGIN_USER = gql`mutation 
UserValue(
  $email: String!, 
  $password: String!
  ) {
    login(
    input: { identifier: $email, password: $password }
    ) {
    jwt 
    user {
     id 
     username 
     email
     }
    }
}`

export { CREATE_USER, LOGIN_USER }