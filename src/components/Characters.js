import React from "react";
import { useCharacters } from "../Apollo/Query/useCharacter";

export default function Characters() {
  const { loading, error, data } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.characters?.results?.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt="CharacterImage" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
