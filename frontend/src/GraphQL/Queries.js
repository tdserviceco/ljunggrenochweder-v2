import { gql } from "@apollo/client";

const STRUCTURE_EXAMPLE = gql`query getMediaByID($id: ID!){
  uploadFile(id:$id){
    data {
      attributes {
        caption
        formats
      }
    }
  }
}`

export { STRUCTURE_EXAMPLE }