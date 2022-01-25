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

const GET_ALL_SERVICES_BASED_ON_CATEGORY_ID = gql`query getServiceByCategoryId($id: ID!){
  category(id:$id) {
    data {
      attributes {
        services(sort:"name:ASC") {
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

const GET_ALL_WORKERS_BASED_ON_SERVICE_ID = gql`query getWorkersByServiceId($id: ID!){
  service(id:$id) {
    data {
      attributes {
        workers(sort:"name:ASC") {
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

/* const GET_EMPLOYEE_SCHEDULE = gql`query (employeeInfo($idWorker: ID!, $year: String!)) {
  workers(filters: { id: { eq: $idWorker } }) {
    data {
      attributes {
        name
        workhours(filters: { year: { eq: $year } }) {
          data {
            attributes {
              year
            }
          }
        }
      }
    }
  }
}` */

export { BACKGROUND_IMAGE, GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, GET_ALL_WORKERS_BASED_ON_SERVICE_ID, /* GET_EMPLOYEE_SCHEDULE */ }