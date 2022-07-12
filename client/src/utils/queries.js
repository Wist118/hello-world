import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!){
    user(email: $email) {
      _id
      displayName
      email
      friendCount
      friends {
        _id
        displayName
      }
    }
  }
`;


// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       displayName
//       email
//       friendCount
//       friends {
//         _id
//         displayName
//       }
//       blockedUsers {
//         _id
//         displayName
//       }
//       accountSource
//     }
//   }
// `