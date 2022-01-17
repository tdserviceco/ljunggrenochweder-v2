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
        services {
          data {
            id
            attributes {
              service
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
        workers {
          data {
            id
          }
        }
      }
    }
  }
}`

export { BACKGROUND_IMAGE, GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, GET_ALL_WORKERS_BASED_ON_SERVICE_ID }