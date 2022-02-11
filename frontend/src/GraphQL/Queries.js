import { gql } from "@apollo/client";

const BACKGROUND_IMAGE = gql`query getMediaByID($id: ID!){
  uploadFile(id:$id){
    data {
      attributes {
        caption
        url
        formats
      }
    }
  }
}`

const GET_ALL_CATEGORIES = gql`query {
   categories{
     data {
       id
       attributes {
         name
       }
     }
   }
}`

const GET_ALL_SERVICES = gql`query {
  services {
    data {
      attributes {
        name
        price
      }
    }
  }
}`

const GET_ALL_SERVICES_BASED_ON_CATEGORY_ID = gql`query getServiceByCategoryId($id: ID!) {
  category(id: $id) {
    data {
      attributes {
        services(sort: "name:ASC") {
          data {
            id
            attributes {
              name
              time
            }
          }
        }
      }
    }
  }
}`

const GET_ALL_WORKERS_BASED_ON_SERVICE_ID = gql`query getWorkersByServiceId($id: ID!) {
  service(id: $id) {
    data {
      attributes {
        workers(sort: "name:ASC") {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}`

const GET_EMPLOYEE_SCHEDULE = gql`query employeeInfo($employee: ID!, $service: ID!, $date: Date!) {
  workers(filters: { id: { eq: $employee } }) {
    data {
      id
      attributes {
        name
        services(filters: { id: { eq: $service } }) {
          data {
            id
            attributes {
              name
            }
          }
        }
        workhours {
          data {
            attributes {
              schedule(filters: { work: { eq: $date } }) {
                work
                start
                end
              }
            }
          }
        }
      }
    }
  }
}`

const IS_BOOKED = gql`query employeeTime(
  $id: ID!
  $time: String!
  $booked: Boolean!
  $date: String!
) {
  bookings(
    filters: {
      worker: { id: { eq: $id } }
      time: { eq: $time }
      booked: { eq: $booked }
      date: { eq: $date }
    }
  ) {
    data {
      attributes {
        booked
        time
      }
    }
  }
}`

const GET_STAFFS = gql`query {
  staffs {
    data {
      attributes {
        name
        biograph
        experience
        profile {
          data {
            attributes {
              ext
              hash
              alternativeText
              formats
            }
          }
        }
      }
    }
  }
}`

const GET_ALL_USERS_BOOKING = gql`query loadAllBookings($uID: ID!) {
  bookings(filters: { username: { id: { eq: $uID } } }) {
    data {
      id
      attributes {
        worker {
          data {
            attributes {
              name
            }
          }
        }
        date
        time
      }
    }
  }
}`

export {
  BACKGROUND_IMAGE,
  GET_ALL_CATEGORIES,
  GET_ALL_SERVICES_BASED_ON_CATEGORY_ID,
  GET_ALL_WORKERS_BASED_ON_SERVICE_ID,
  GET_EMPLOYEE_SCHEDULE,
  GET_ALL_SERVICES,
  IS_BOOKED,
  GET_STAFFS,
  GET_ALL_USERS_BOOKING
}