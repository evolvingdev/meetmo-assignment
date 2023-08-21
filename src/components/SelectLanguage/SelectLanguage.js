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
  const [whichLangSelected, setwhichLangSelected] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });
  return (
    <div className="languageContainer">
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.first
            ? setwhichLangSelected({ ...whichLangSelected, first: false })
            : setwhichLangSelected({ ...whichLangSelected, first: true });
        }}
      >
        <div className={whichLangSelected.first ? "selected" : "notSelected"}>
          <img src={canada} alt="" width="52px" height="52px" />
        </div>
        <div>Canada</div>
      </div>
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.second
            ? setwhichLangSelected({ ...whichLangSelected, second: false })
            : setwhichLangSelected({ ...whichLangSelected, second: true });
        }}
      >
        <div className={whichLangSelected.second ? "selected" : "notSelected"}>
          <img src={japan} alt="" width="52px" height="52px" />
        </div>
        <div>Japan</div>
      </div>
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.third
            ? setwhichLangSelected({ ...whichLangSelected, third: false })
            : setwhichLangSelected({ ...whichLangSelected, third: true });
        }}
      >
        <div className={whichLangSelected.third ? "selected" : "notSelected"}>
          <img src={unitedStates} alt="" width="52px" height="52px" />
        </div>
        <div>USA</div>
      </div>
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.fourth
            ? setwhichLangSelected({ ...whichLangSelected, fourth: false })
            : setwhichLangSelected({ ...whichLangSelected, fourth: true });
        }}
      >
        <div className={whichLangSelected.fourth ? "selected" : "notSelected"}>
          <img src={france} alt="" width="52px" height="52px" />
        </div>
        <div>France</div>
      </div>
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.fifth
            ? setwhichLangSelected({ ...whichLangSelected, fifth: false })
            : setwhichLangSelected({ ...whichLangSelected, fifth: true });
        }}
      >
        <div className={whichLangSelected.fifth ? "selected" : "notSelected"}>
          <img src={unitedKingdom} alt="" width="52px" height="52px" />
        </div>
        <div>UK</div>
      </div>
      <div
        className="languageContainerDiv"
        onClick={() => {
          whichLangSelected.sixth
            ? setwhichLangSelected({ ...whichLangSelected, sixth: false })
            : setwhichLangSelected({ ...whichLangSelected, sixth: true });
        }}
      >
        <div className={whichLangSelected.sixth ? "selected" : "notSelected"}>
          <img src={germany} alt="" width="52px" height="52px" />
        </div>
        <div>Germany</div>
      </div>
    </div>
  );
}

export default SelectLanguage;
