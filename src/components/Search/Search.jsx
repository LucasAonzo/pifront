import { getGameByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Search.module.css";

export default function SearchBar() {
  const [game, setGame] = useState(""); // Estado local para guardar el valor del input
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setGame(event.target.value);
  }; //esta funcion se ejecuta cada vez que se escribe en el input y guarda el valor en el estado local

  const searchGame = () => {
    if (!game) {
      alert("Please enter a game name");
      return;
    }
    dispatch(getGameByName(game)).catch((error) => {
      window.alert(error.response.data);
      setGame("");
    });
  }; //veo si esta vacio y si no, lo envio al action

  return (
    <div className={style.container}>
      <input
        className={style.input}
        onChange={onChangeHandler}
        type="search"
        placeholder="Name"
        name="name"
        value={game}
      />
      <button className={style.buttons} onClick={searchGame}>
        Search
      </button>
    </div>
  );
}
