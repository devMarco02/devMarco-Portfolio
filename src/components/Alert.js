import { Success, Error } from "./Icons";
import { CloseButton } from "./Button";
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

      <CloseButton classNm={"alert__btn-close"} func={close} />
    </div>
  );
};

export default Alert;
