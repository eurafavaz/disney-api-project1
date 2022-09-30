import { CharactersMocks } from "../../mocks/CharactersMocks";
import "./CharactersList.css";

function CharactersList() {
  return (
    <div>
      {CharactersMocks.map((character, index) => (
        <ul className="all-characters" key={`all-characters-${index}`}>
          <li>
            <a href="https://www.google.com/">
              <img
                src={character.imageUrl}
                alt="Mickey Mouse"
              />
            </a>
            <span>{character.name}</span>
            <p><b>Movies:</b> {character.films}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CharactersList;
