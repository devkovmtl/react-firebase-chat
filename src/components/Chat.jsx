import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
