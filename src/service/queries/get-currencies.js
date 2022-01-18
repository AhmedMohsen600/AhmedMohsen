import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query koko {
    currencies {
      label
      symbol
    }
  }
`;
