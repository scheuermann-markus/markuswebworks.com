import "./CardOS.css";

function CardOS(props) {
  return (
    <div className="CardOS">
      <span className="span-1">
        <img src={props.url} alt="" />
      </span>
      <div className="content-div">
        <p className="item-name nowarp">{props.name}</p> 
        <p className="item-brand nowarp" style={{color: "#a5a6a6"}}>{props.brand}</p>
        <hr />
        <p className="item-specs nowarp">Produktion von {props.productionStart} bis {props.productionEnd}</p>
        <p className="item-specs nowarp">Leistung: {props.power} PS</p>
        <p className="item-specs nowarp">Kraftstoff: {props.fuel}</p>
        <p className="item-specs nowarp">Anzahl Türen - Sitze: {props.doors} / {props.seats}</p>
        <p className="item-specs nowarp">Verkaufszahlen: {props.sales / 1000000} Millionen</p>
      </div>
    </div>
  );
}

export default CardOS;
