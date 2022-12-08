import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
        />
        <span>just now</span>
      </div>

      <div className="messageContent">
        <p>Hello!</p>
        <img
          src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
        />
      </div>
    </div>
  );
};

export default Message;
