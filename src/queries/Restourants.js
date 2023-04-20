import { gql } from '@apollo/client';

const GET_RESTAURANTS = gql`
  query restaurants {
    restaurants {
      data {
        id
        attributes {
          name
          photos {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_RESTAURANTS
}