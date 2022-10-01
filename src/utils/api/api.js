const defaultURL = "https://api.disneyapi.dev/characters";

export const api = {
    createCharacters: async (character) => {
      const response = await fetch(`${defaultURL}/create`, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringfy(character),
      });

      const newCharacter = await response.json();

      return newCharacter;
    },

  getAllCharacters: async () => {
    const response = await fetch(`${defaultURL}`);
    const allCharacters = response.json();
    return allCharacters;
  },

  getCharacterById: async (id) => {
    const response = await fetch(`${defaultURL}/:${id}`);
    const character = response.json();
    return character;
  },

  updateCharacter: async (id, character) => {
    const response = await fetch(`${defaultURL}/update/${id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "aplpication/json" }),
      body: JSON.stringify(character),
    });

    const characterUpdated = await response.json();

    return characterUpdated;
  },

  deleteCharacter: async (id) => {
    const response = await fetch(`${defaultURL}/delete/:${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const characterDeleted = response.json();

    return characterDeleted;
  },
};
