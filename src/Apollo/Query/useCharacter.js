import { gql, useQuery } from "@apollo/client";

const CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery(CHARACTERS);

  return { error, loading, data };
};
