import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="attach" />
        <input type="file" style={{ display: "none" }} id="fileImg" />
        <label htmlFor="fileImg">
          <img src={Img} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
