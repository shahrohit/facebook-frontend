import Header from "../Header/Header";
import LeftNavBar from "./LeftNavBar";
import RightContact from "./RightContact";
import "./main.css";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="leftNavBarContainer">
          <LeftNavBar />
        </div>

        <div className="mainContentContainer">
          <div className="childrenContent">
            <div className="childrenContentSection">{children}</div>
          </div>
        </div>

        <div className="rightContactContainer">
          <RightContact />
        </div>
      </div>
    </>
  );
};

export default Main;
