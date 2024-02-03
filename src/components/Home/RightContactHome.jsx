import Contacts from "./Contacts";

const RightContactHome = () => {
  return (
    <div className="rightContactHome">
      {/* header */}
      <div className="rightContactHomeHeader">
        <span className="rightContactHomeHeaderTitle">Contact</span>
        <div className="rightContactHomeHeaderIcons">
          <div className="option">...</div>
        </div>
      </div>

      {/* Contacts */}
      <Contacts
        name="Victor Plains"
        src="https://i.ibb.co/QFRL9Cg/person.jpg"
      />
      <Contacts
        name="Clementine Bauch"
        src="https://i.ibb.co/mRDWrXD/19182643.jpg"
      />
      <Contacts
        name="Patricia Lebsack"
        src="https://i.ibb.co/Tq1ktf7/15471694.jpg"
      />
    </div>
  );
};

export default RightContactHome;
