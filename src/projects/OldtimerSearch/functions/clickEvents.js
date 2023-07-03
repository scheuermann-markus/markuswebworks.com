export const clickEventDoorsSeats =
  (doorsSeats, setDoorsSeats) => (ButtonId) => {
    switch (ButtonId) {
      case "twotwo":
        // user selects 2 / 2
        if (doorsSeats !== "twotwo") {
          setDoorsSeats("twotwo");
          document.querySelector("#twotwo").classList.add("box-active");
          document.querySelector("#twofour").classList.remove("box-active");
        } else {
          setDoorsSeats("");
          document.querySelector("#twotwo").classList.remove("box-active");
        }
        break;

      case "twofour":
        // user selects 2 / 4
        if (doorsSeats !== "twofour") {
          setDoorsSeats("twofour");
          document.querySelector("#twofour").classList.add("box-active");
          document.querySelector("#twotwo").classList.remove("box-active");
        } else {
          setDoorsSeats("");
          document.querySelector("#twofour").classList.remove("box-active");
        }
        break;

      default:
        break;
    }
  };

export const clickEventFuel = (fuel, setFuel) => (ButtonId) => {
  switch (ButtonId) {
    case "benzin":
      // user selects benzin
      if (fuel !== "benzin") {
        setFuel("benzin");
        document.querySelector("#benzin").classList.add("box-active");
        document.querySelector("#diesel").classList.remove("box-active");
      } else {
        setFuel("");
        document.querySelector("#benzin").classList.remove("box-active");
      }
      break;
    case "diesel":
      // user selects diesel
      if (fuel !== "diesel") {
        setFuel("diesel");
        document.querySelector("#diesel").classList.add("box-active");
        document.querySelector("#benzin").classList.remove("box-active");
      } else {
        setFuel("");
        document.querySelector("#diesel").classList.remove("box-active");
      }
      break;
    default:
      break;
  }
};
