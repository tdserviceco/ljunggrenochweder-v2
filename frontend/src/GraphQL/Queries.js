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
  category(id: 1) {
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

export { BACKGROUND_IMAGE, GET_ALL_CATEGORIES }