import OldtimerData from "./DataOS";
import { useState } from "react";
import "./indexOS.css";
import SearchAreaOS from "./SearchAreaOS";
import CardOS from "./CardOS";
import { clickEventDoorsSeats, clickEventFuel } from "./functions/clickEvents";
import { clickEventSearch } from "./functions/clickEventSearch";

function OldtimerSearch() {
  // VARIABLES //
  let [filteredData, setFilteredData] = useState(OldtimerData);
  let [numberOfCards, setNumberOfCards] = useState(4);
  let [nameOS, setNameOS] = useState("");
  let [brandOS, setBrandOS] = useState("");
  let [sortOS, setSortOS] = useState("Erscheinungsjahr");
  let [doorsSeats, setDoorsSeats] = useState("");
  let [fuel, setFuel] = useState("");
  /////////////////

  // CHANGE VARIABLES //
  const handleChangeName = (value) => {
    setNameOS(value);
  };
  const handleChangeBrand = (value) => {
    setBrandOS(value);
  };
  const handleChangeSort = (value) => {
    setSortOS(value);
  };
  const useClickEventDoorsSeats = clickEventDoorsSeats(
    doorsSeats,
    setDoorsSeats
  );
  const useClickEventFuel = clickEventFuel(fuel, setFuel);
  const clickEventClearAll = () => {
    setNameOS("");
    setBrandOS("");
    setSortOS("Erscheinungsjahr");
    setDoorsSeats("");
    setFuel("");
    const boxes = document.querySelectorAll(".box"); // removes 'box-active' from all boxes
    boxes.forEach((box) => {
      box.classList.remove("box-active");
    });
  };

  // user clicks on search button
  const useClickEventSearch = () => clickEventSearch(nameOS, brandOS, doorsSeats, fuel, sortOS, setFilteredData, setNumberOfCards);

  return (
    <section className="OldtimerSearch">
      <SearchAreaOS
        nameOS={nameOS}
        handleChangeName={handleChangeName}
        brandOS={brandOS}
        handleChangeBrand={handleChangeBrand}
        sortOS={sortOS}
        handleChangeSort={handleChangeSort}
        clickEventSearch={useClickEventSearch}
        clickEventDoorsSeats={useClickEventDoorsSeats}
        clickEventFuel={useClickEventFuel}
        clickEventClearAll={clickEventClearAll}
      />
      <div className="FeedOS">
        {filteredData
          .filter((card, i) => i < numberOfCards) // with 'filter' we specify the amount of cards to be rendered
          .map((card, index) => {
            // 'map' loops through the data and returns a card for every object
            return (
              <CardOS
                key={index}
                url={filteredData[index].Url}
                name={filteredData[index].Name}
                brand={filteredData[index].Brand}
                productionStart={filteredData[index].ProductionStart}
                productionEnd={filteredData[index].ProductionEnd}
                power={filteredData[index].Power}
                fuel={filteredData[index].Fuel}
                doors={filteredData[index].Doors}
                seats={filteredData[index].Seats}
                sales={filteredData[index].Sales}
              />
            );
          })}
      </div>
      <div className="BelowFeed">
        {filteredData.length === 0 ? <div>Keine Oldtimer gefunden.</div> : null} 
        {filteredData.length > numberOfCards ? (
          <button onClick={() => setNumberOfCards(numberOfCards + 4)} className="more-cars-btn">
            Mehr Anzeigen
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default OldtimerSearch;
