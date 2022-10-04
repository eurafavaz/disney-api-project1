import "./CharacterForm.css";

export function CharactersForm() {
  return (
    <form className="form-character">
        <h1>Add new character</h1>
      <input type={"text"} placeholder={"Insert the character's name"} />
      <input type={"text"} placeholder={"Insert the character's movies"} />
      <input
        type={"text"}
        placeholder={"Insert the character's image URL"}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default CharactersForm;
