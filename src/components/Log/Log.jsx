import "./log.css";

const Log = ({ children }) => {
  return (
    <div className="logContainer">
      <div className="logSection">
        <img src="/banner.svg" alt="" />

        <div className="logForm">{children}</div>
      </div>
    </div>
  );
};

export default Log;
