import React, { useState } from "react";
import "./SelectLanguage.css";
import unitedStates from "../../assets/united-states.png";
import unitedKingdom from "../../assets/united-kingdom.png";
import canada from "../../assets/canada.png";
import france from "../../assets/france.png";
import germany from "../../assets/germany.png";
import japan from "../../assets/japan.png";

function SelectLanguage() {
  // const [country, setCountry] = useState(null);
  const [selected, setSelected] = useState(true);
  return (
    <div className="languageContainer">
      <div
        className="languageContainerDiv"
        onClick={() => {
          selected ? setSelected(false) : setSelected(true);
        }}
      >
        <div className={selected ? "selected" : "notSelected"}>
          <img src={canada} alt="" width="52px" height="52px" />
        </div>
        <div>Canada</div>
      </div>
      <div className="languageContainerDiv">
        <div className={selected ? "selected" : "notSelected"}>
          <img src={japan} alt="" width="52px" height="52px" />
        </div>
        <div>Japan</div>
      </div>
      <div className="languageContainerDiv">
        <div className={selected ? "selected" : "notSelected"}>
          <img src={unitedStates} alt="" width="52px" height="52px" />
        </div>
        <div>USA</div>
      </div>
      <div className="languageContainerDiv">
        <div className={selected ? "selected" : "notSelected"}>
          <img src={france} alt="" width="52px" height="52px" />
        </div>
        <div>France</div>
      </div>
      <div className="languageContainerDiv">
        <div className={selected ? "selected" : "notSelected"}>
          <img src={unitedKingdom} alt="" width="52px" height="52px" />
        </div>
        <div>UK</div>
      </div>
      <div className="languageContainerDiv">
        <div className={selected ? "selected" : "notSelected"}>
          <img src={germany} alt="" width="52px" height="52px" />
        </div>
        <div>Germany</div>
      </div>
    </div>
  );
}

export default SelectLanguage;
