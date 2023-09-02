import axios from "axios";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";
export const GET_GAME_BY_ID = "GET_GAME_BY_ID";
export const CLEAR_GAME_BY_ID = "CLEAR_GAME_BY_ID";
export const GET_GENRES = "GET_GENRES";
export const GET_GENRES_FILTERED = "GET_GENRES_FILTERED";
export const GET_GAMES_ORDER_RATING = "GET_GAMES_ORDER_RATING";
export const GET_GAMES_ORDER_ALPHABETIC = "GET_GAMES_ORDER_ALPHABETIC";
export const GET_GAMES_FROM_API_OR_DB = "GET_GAMES_FROM_API_OR_DB";
export const GAME_POST = "GAME_POST";
const URL = "https://piback-production-6752.up.railway.app/";

export const getAllGames = () => {
  return async (dispatch) => {
    try {
      // https://piback-production-6752.up.railway.app/videogames
      const response = await axios.get(URL + "videogames");
      const data = response.data;
      return dispatch({ type: GET_ALL_GAMES, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const getGameByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL + `videogames?name=${name}`);
      const data = response.data;
      return dispatch({ type: GET_GAME_BY_NAME, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const getGameById = (idVideogame) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL + `videogames/${idVideogame}`);
      const data = response.data;
      return dispatch({ type: GET_GAME_BY_ID, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const clearGameById = () => {
  return { type: CLEAR_GAME_BY_ID };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL + "genres");
      const data = response.data;
      return dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const postGame = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL + "videogames/", payload);

      return dispatch({ type: GAME_POST, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
};

export const getGenresFiltered = (genre) => {
  return { type: GET_GENRES_FILTERED, payload: genre };
};

export const getGamesOrderRating = (value) => {
  return { type: GET_GAMES_ORDER_RATING, payload: value };
};

export const getGamesOrderAlphabetic = (value) => {
  return { type: GET_GAMES_ORDER_ALPHABETIC, payload: value };
};

export const getGamesFromApiOrDb = (value) => {
  return { type: GET_GAMES_FROM_API_OR_DB, payload: value };
};
