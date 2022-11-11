// import { CharactersMocks } from "../../mocks/CharactersMocks";
import "./CharactersList.css";
import { useState, useEffect } from "react";
import { api } from "../../utils/api/api";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      {characters.map((character, index) => (
        <ul className="all-characters" key={`all-characters-${index}`}>
          <li>
            <title>{character._id}</title>
            <a href={modalOpen}>
              <img
                src={character.imageUrl}
                alt="Mickey Mouse"
                onClick={openModal}
              />
            </a>
            <Modal
              isOpen={modalOpen}
              onRequestClose={closeModal}
              className="modal-action-click"
              overlayClassName="modal-overlay"
            >
              <img
                src={character.imageUrl}
                alt="Mickey Mouse"
                onClick={openModal}
              />
              <span>{character.name}</span>
            <p>
              <b>Movies:</b> {character.films}
            </p>
            <p>
              <b>Short Films:</b> {character.shortFilms}
            </p>
            <p>
              <b>TV Shows:</b> {character.tvShows}
            </p>
            <button className="delete-btn" type="button" onClick={closeModal}>
                Close
              </button>
            </Modal>
            <h5 className="details-text">Click on the image to expand</h5>
            <span>{character.name}</span>
            <p>
              <b>Movies:</b> {character.films.length}
            </p>
            <p>
              <b>Short Films:</b> {character.shortFilms.length}
            </p>
            <p>
              <b>TV Shows:</b> {character.tvShows.length}
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
