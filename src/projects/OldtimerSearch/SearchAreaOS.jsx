import "./SearchAreaOS.css";
import "./Icons/icons.css";
import { SearchIcon } from "./Icons/SearchIcon";
import { FerrariIcon } from "./Icons/FerrariIcon";
import { SortIcon } from "./Icons/SortIcon";
import { ClearIcon } from "./Icons/ClearIcon";
import { CarDoorIcon } from "./Icons/CarDoorIcon";
import { FuelIcon } from "./Icons/FuelIcon";

function SearchAreaOS(props) {
  return (
    <div className="SearchArea">
      <div className="FirstDiv">
        <div className="user-input-div">
          <SearchIcon />
          <input
            className="user-text-input"
            placeholder="Name..."
            type="text"
            value={props.nameOS}
            onChange={(e) => {
              props.handleChangeName(e.target.value);
            }}
          ></input>
          <ClearIcon
            click={() => {
              props.handleChangeName("");
            }}
          />
        </div>
        <div className="user-input-div">
          <FerrariIcon />
          <input
            className="user-text-input"
            placeholder="Marke..."
            type="text"
            value={props.brandOS}
            onChange={(e) => {
              props.handleChangeBrand(e.target.value);
            }}
          ></input>
          <ClearIcon
            click={() => {
              props.handleChangeBrand("");
            }}
          />
        </div>
        <div className="user-input-div">
          <SortIcon />
          <select
            id="brand"
            className="drop-down-menu"
            value={props.sortOS}
            onChange={(e) => {
              props.handleChangeSort(e.target.value);
            }}
          >
            <option>Erscheinungsjahr</option>
            <option>Verkaufszahl</option>
            <option>Leistung</option>
          </select>
        </div>
        <button
          className="search-button"
          onClick={() => {
            props.clickEventSearch();
          }}
        >
          Suchen
        </button>
      </div>

      <div className="SecondDiv">
        <div className="select-div">
          <CarDoorIcon />
          <button
            id="twotwo"
            className="box left-box"
            onClick={(e) => {
              props.clickEventDoorsSeats(e.target.id);
            }}
          >
            2 / 2
          </button>
          <button
            id="twofour"
            className="box right-box"
            onClick={(e) => {
              props.clickEventDoorsSeats(e.target.id);
            }}
          >
            2 / 4
          </button>
        </div>
        <div className="select-div">
          <FuelIcon />
          <button
            id="benzin"
            className="box left-box"
            onClick={(e) => {props.clickEventFuel(e.target.id)}}
          >
            Benzin
          </button>
          <button
            id="diesel"
            className="box right-box"
            onClick={(e) => {props.clickEventFuel(e.target.id)}}
          >
            Diesel
          </button>
        </div>

        <span
          className="clear-all"
          onClick={props.clickEventClearAll}
        >
          Auswahl löschen
        </span>
      </div>
    </div>
  );
}

export default SearchAreaOS;
