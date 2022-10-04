// import { CharactersMocks } from "../../mocks/CharactersMocks";
import "./CharactersList.css";
import { useState, useEffect } from "react";
import { api } from "../../utils/api/api";

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await api.getAllCharacters();
    setCharacters(response);
  };

  console.log(characters);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map((character, index) => (
        <ul className="all-characters" key={`all-characters-${index}`}>
          <li>
            <title>{character._id}</title>
            <a href="https://www.google.com/">
              <img src={character.imageUrl} alt="Mickey Mouse" />
            </a>
            <span>{character.name}</span>
            <p>
              <b>Movies:</b> {character.films}
            </p>
            <div className="actions-btn">
              <button className="edit-btn" type="button">
                Edit
              </button>
              <button className="delete-btn" type="button">
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CharactersList;
