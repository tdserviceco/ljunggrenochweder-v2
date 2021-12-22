import { gql } from "@apollo/client";

const LOAD_ABOUT_PAGE = gql`query {
  about {
    data {
      id
      attributes {
        title {headline}
        gallery {
          info
          name
          image {
            data {
              id
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
}`

export { LOAD_ABOUT_PAGE }