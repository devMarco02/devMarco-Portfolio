import { Close } from "./Icons";
const Message = ({ text, close }) => {
  return (
    <div className="message">
      <p className="message__text">{text}</p>
      <button className="message__btn-close" onClick={close}>
        <Close classNm="message__btn-close-icon" />
      </button>
    </div>
  );
};

export default Message;
