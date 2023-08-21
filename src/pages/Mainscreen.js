import React, { useState } from "react";
import "./Mainscreen.css";
import SelectLanguage from "../components/SelectLanguage/SelectLanguage";
import bar from "../assets/bar.svg";
import settingsicon from "../assets/settings.svg";
import arrow from "../assets/next.png";
function MainScreen() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [fontSelectedTab, setFontSelectedTab] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  return (
    <div className={showDrawer ? "mainScreenWithWorldMap" : "mainScreen"}>
      <div className="contentContainer">
        <h1>Welcome</h1>
        <h1>Select Language</h1>
      </div>
      <SelectLanguage />
      <div
        className="settingsDrawer"
        onClick={() =>
          showDrawer ? setShowDrawer(false) : setShowDrawer(true)
        }
      >
        Settings
        <img src={bar} alt="" />
      </div>
      <div className={showDrawer ? "drawer" : "hideDrawer"}>
        <img
          src={bar}
          alt=""
          onClick={() =>
            showDrawer ? setShowDrawer(false) : setShowDrawer(true)
          }
          style={{ cursor: "pointer" }}
        />
        <div className="header">
          <img src={settingsicon} alt="settingsicon" />
          <span
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "white",
              margin: "0 20px",
            }}
          >
            Settings
          </span>
        </div>
        <div className="optionsContainer">
          <div className="option">
            <div className="optionsHeding">Language</div>
            <div className="selectTab">
              Select
              <img src={arrow} alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className="option">
            <div className="optionsHeding">Text Color</div>
            <div className="selectTab">
              Select
              <img src={arrow} alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className="option">
            <div className="optionsHeding">Text Size</div>
            <div className="selectTab">
              Select
              <img src={arrow} alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className="option">
            <div className="optionsHeding">Theme</div>
            <div className="selectTab">
              Select
              <img src={arrow} alt="" width="20px" height="20px" />
            </div>
          </div>
        </div>
        <div className="selectContainer">
          <div
            className={
              fontSelectedTab.first ? "fontSelectedTab" : "fontSelectTab"
            }
            onClick={() => {
              fontSelectedTab.first
                ? setFontSelectedTab({ ...fontSelectedTab, first: false })
                : setFontSelectedTab({ ...fontSelectedTab, first: true });
            }}
          ></div>
          <div
            className={
              fontSelectedTab.second ? "fontSelectedTab" : "fontSelectTab"
            }
            onClick={() => {
              fontSelectedTab.second
                ? setFontSelectedTab({ ...fontSelectedTab, second: false })
                : setFontSelectedTab({ ...fontSelectedTab, second: true });
            }}
          ></div>
          <div
            className={
              fontSelectedTab.third ? "fontSelectedTab" : "fontSelectTab"
            }
            onClick={() => {
              fontSelectedTab.third
                ? setFontSelectedTab({ ...fontSelectedTab, third: false })
                : setFontSelectedTab({ ...fontSelectedTab, third: true });
            }}
          ></div>
          <div
            className={
              fontSelectedTab.fourth ? "fontSelectedTab" : "fontSelectTab"
            }
            onClick={() => {
              fontSelectedTab.fourth
                ? setFontSelectedTab({ ...fontSelectedTab, fourth: false })
                : setFontSelectedTab({ ...fontSelectedTab, fourth: true });
            }}
          ></div>
        </div>
        <div className="listFonts">
          <div className="fontSizeOne">aA</div>
          <div className="fontSizeTwo">aA</div>
          <div className="fontSizeThree">aA</div>
          <div className="fontSizeFour">aA</div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
