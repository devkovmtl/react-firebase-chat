const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Message;
