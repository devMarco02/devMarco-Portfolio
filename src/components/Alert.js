import { Close, Success, Error } from "./Icons";
const Alert = ({ text, close }) => {
  return (
    <div className="alert">
      <div className="alert__status">
        <strong>{text.status}</strong>
        {text.isSuccess ? (
          <Success classNm={"alert__icon"} />
        ) : (
          <Error classNm={"alert__icon"} />
        )}
      </div>
      <p className="alert__message">{text.message}</p>
      <button className="alert__btn-close" onClick={close}>
        <Close classNm="alert__btn-close-icon" />
      </button>
    </div>
  );
};

export default Alert;
