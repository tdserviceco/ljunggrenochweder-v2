import { gql } from '@apollo/client';

const CREATE_USER = gql`mutation RegisterNewUser(
  $username: String!
  $email: String!
  $password: String!
) {
  register(input: { username: $username, email: $email, password: $password }) {
    jwt
    user {
      id
      username
      email
    }
  }
}`;

const LOGIN_USER = gql`mutation UserValue($email: String!, $password: String!) {
  login(input: { identifier: $email, password: $password }) {
    jwt
    user {
      id
      username
      email
    }
  }
}`

const REGISTER_BOOKED_HOUR = gql`mutation 
CreateBookingForThisHour(
  $time: String!,
  $eID: ID!,
  $booked: Boolean!,
  $date: String!
  $uID: ID!
  ) {
    createBooking(data: {time: $time, booked: $booked, worker: $eID, date: $date, username: $uID}) {
    data {
      id
      attributes {
        booked
      }
    }
  }
}`

const DELETE_BOOKING = gql`mutation
DeleteBookingHour($bookingID: ID!) {
  deleteBooking(id: $bookingID){
    data {
      id
    }
  }
}`


export { CREATE_USER, LOGIN_USER, REGISTER_BOOKED_HOUR, DELETE_BOOKING }