import OldtimerData from "../DataOS";

export const clickEventSearch = (
  nameOS,
  brandOS,
  doorsSeats,
  fuel,
  sortOS,
  setFilteredData,
  setNumberOfCards
) => {
  let dataCopy = [...OldtimerData]; // create copy of data so we can apply changes on it whitout affecting the real data

  // user types something in name search
  if (nameOS !== "") {
    dataCopy = dataCopy.filter((car) => car.Name.includes(nameOS));
  }

  // user types something in brand search
  if (brandOS !== "") {
    dataCopy = dataCopy.filter((car) => car.Brand.includes(brandOS));
  }

  // user selects doors / seats
  if (doorsSeats === "twotwo") {
    dataCopy = dataCopy.filter((car) => (car.Doors === 2) & (car.Seats === 2));
  } else if (doorsSeats === "twofour") {
    dataCopy = dataCopy.filter((car) => (car.Doors === 2) & (car.Seats === 4));
  }

  // user selects fuel
  if (fuel === "benzin") {
    dataCopy = dataCopy.filter((car) => car.Fuel === "Benzin");
  } else if (fuel === "diesel") {
    dataCopy = dataCopy.filter((car) => car.Fuel === "Diesel");
  }

  // sort data
  switch (sortOS) {
    case "Erscheinungsjahr":
      dataCopy.sort((a, b) => a.ProductionStart - b.ProductionStart);
      break;

    case "Verkaufszahl":
      dataCopy.sort((a, b) => b.Sales - a.Sales);
      break;

    case "Leistung":
      dataCopy.sort((a, b) => b.Power - a.Power);
      break;

    default:
      break;
  }

  setNumberOfCards(4);
  setFilteredData(dataCopy);
};
