import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight, Close } from "./Icons";

//===MAIN BUTTON

export const Button = ({ classNm, text = "text", children }) => {
  return (
    <button
      className={`btn ${classNm}`}
      onMouseDown={(e) => e.preventDefault()}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  classNm: PropTypes.string,
  text: PropTypes.any,
};

//===ARROW BUTTON

export const ArrowButton = ({ classNm, func, isVisible, isLeft = true }) => {
  let opacity = 1;
  let cursor = "pointer";

  //show or hide arrows
  if (isVisible) {
    opacity = 1;
    cursor = "pointer";
  } else {
    cursor = "default";
    opacity = 0;
  }

  return (
    <button
      className={classNm}
      onClick={func}
      style={{ opacity: `${opacity}`, cursor: `${cursor}` }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {isLeft ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

ArrowButton.propTypes = {
  classNm: PropTypes.string,
  func: PropTypes.func,
  isVisible: PropTypes.bool,
  isLeft: PropTypes.bool,
};

//INDICATOR BUTTON

export const IndicatorButton = ({ func, index, order }) => {
  let active = "portfolio__indicator--active";
  return (
    <button
      className={`portfolio__indicator ${index === order && active}`}
      onClick={func}
      onMouseDown={(e) => e.preventDefault()}
    ></button>
  );
};

IndicatorButton.propTypes = {
  func: PropTypes.func,
  index: PropTypes.number,
  order: PropTypes.number,
};

//CLOSE BUTTON

export const CloseButton = ({ func, classNm }) => {
  return (
    <button
      className={`btn-close ${classNm}`}
      onMouseDown={(e) => {
        func();
        e.preventDefault();
      }}
    >
      <Close classNm={"btn-close__icon"} />
    </button>
  );
};

//SEND BUTTON

export const SendButton = () => {
  return (
    <button className="contact__btn" onMouseDown={(e) => e.preventDefault()}>
      <svg
        className="btn--send"
        width="176"
        height="45"
        viewBox="0 0 176 45"
        fill="none"
      >
        <g>
          <rect width="176" height="45" rx="22.5" fill="#12EDAE" />
          <path
            className="main"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2673 42C15.5728 43.9082 19.4088 45 23.4999 45H153.5C165.926 45 176 34.9264 176 22.5C176 10.0736 165.926 0 153.5 0H139V42H12.2673Z"
            fill="#10D59D"
          />
          <path
            className="text"
            d="M29.586 18.902C29.538 18.986 29.486 19.048 29.43 19.088C29.378 19.124 29.312 19.142 29.232 19.142C29.148 19.142 29.056 19.112 28.956 19.052C28.86 18.988 28.744 18.918 28.608 18.842C28.472 18.766 28.312 18.698 28.128 18.638C27.948 18.574 27.734 18.542 27.486 18.542C27.262 18.542 27.066 18.57 26.898 18.626C26.73 18.678 26.588 18.752 26.472 18.848C26.36 18.944 26.276 19.06 26.22 19.196C26.164 19.328 26.136 19.474 26.136 19.634C26.136 19.838 26.192 20.008 26.304 20.144C26.42 20.28 26.572 20.396 26.76 20.492C26.948 20.588 27.162 20.674 27.402 20.75C27.642 20.826 27.888 20.908 28.14 20.996C28.392 21.08 28.638 21.18 28.878 21.296C29.118 21.408 29.332 21.552 29.52 21.728C29.708 21.9 29.858 22.112 29.97 22.364C30.086 22.616 30.144 22.922 30.144 23.282C30.144 23.674 30.076 24.042 29.94 24.386C29.808 24.726 29.612 25.024 29.352 25.28C29.096 25.532 28.782 25.732 28.41 25.88C28.038 26.024 27.612 26.096 27.132 26.096C26.856 26.096 26.584 26.068 26.316 26.012C26.048 25.96 25.79 25.884 25.542 25.784C25.298 25.684 25.068 25.564 24.852 25.424C24.636 25.284 24.444 25.128 24.276 24.956L24.75 24.182C24.79 24.126 24.842 24.08 24.906 24.044C24.97 24.004 25.038 23.984 25.11 23.984C25.21 23.984 25.318 24.026 25.434 24.11C25.55 24.19 25.688 24.28 25.848 24.38C26.008 24.48 26.194 24.572 26.406 24.656C26.622 24.736 26.88 24.776 27.18 24.776C27.64 24.776 27.996 24.668 28.248 24.452C28.5 24.232 28.626 23.918 28.626 23.51C28.626 23.282 28.568 23.096 28.452 22.952C28.34 22.808 28.19 22.688 28.002 22.592C27.814 22.492 27.6 22.408 27.36 22.34C27.12 22.272 26.876 22.198 26.628 22.118C26.38 22.038 26.136 21.942 25.896 21.83C25.656 21.718 25.442 21.572 25.254 21.392C25.066 21.212 24.914 20.988 24.798 20.72C24.686 20.448 24.63 20.114 24.63 19.718C24.63 19.402 24.692 19.094 24.816 18.794C24.944 18.494 25.128 18.228 25.368 17.996C25.608 17.764 25.904 17.578 26.256 17.438C26.608 17.298 27.012 17.228 27.468 17.228C27.98 17.228 28.452 17.308 28.884 17.468C29.316 17.628 29.684 17.852 29.988 18.14L29.586 18.902ZM34.9719 18.608V21.014H38.0079V22.256H34.9719V24.71H38.8239V26H33.3519V17.324H38.8239V18.608H34.9719ZM49.3683 17.324V26H48.5403C48.4123 26 48.3043 25.98 48.2163 25.94C48.1323 25.896 48.0503 25.824 47.9703 25.724L43.4403 19.94C43.4643 20.204 43.4763 20.448 43.4763 20.672V26H42.0543V17.324H42.9003C42.9683 17.324 43.0263 17.328 43.0743 17.336C43.1263 17.34 43.1703 17.352 43.2063 17.372C43.2463 17.388 43.2843 17.414 43.3203 17.45C43.3563 17.482 43.3963 17.526 43.4403 17.582L47.9883 23.39C47.9763 23.25 47.9663 23.112 47.9583 22.976C47.9503 22.84 47.9463 22.714 47.9463 22.598V17.324H49.3683ZM60.8044 21.662C60.8044 22.298 60.6984 22.882 60.4864 23.414C60.2744 23.946 59.9764 24.404 59.5924 24.788C59.2084 25.172 58.7464 25.47 58.2064 25.682C57.6664 25.894 57.0664 26 56.4064 26H53.1004V17.324H56.4064C57.0664 17.324 57.6664 17.432 58.2064 17.648C58.7464 17.86 59.2084 18.158 59.5924 18.542C59.9764 18.922 60.2744 19.378 60.4864 19.91C60.6984 20.442 60.8044 21.026 60.8044 21.662ZM59.1484 21.662C59.1484 21.186 59.0844 20.76 58.9564 20.384C58.8324 20.004 58.6504 19.684 58.4104 19.424C58.1744 19.16 57.8864 18.958 57.5464 18.818C57.2104 18.678 56.8304 18.608 56.4064 18.608H54.7204V24.716H56.4064C56.8304 24.716 57.2104 24.646 57.5464 24.506C57.8864 24.366 58.1744 24.166 58.4104 23.906C58.6504 23.642 58.8324 23.322 58.9564 22.946C59.0844 22.566 59.1484 22.138 59.1484 21.662ZM78.1553 17.324V26H76.7333V20.396C76.7333 20.172 76.7453 19.93 76.7693 19.67L74.1473 24.596C74.0233 24.832 73.8333 24.95 73.5773 24.95H73.3493C73.0933 24.95 72.9033 24.832 72.7793 24.596L70.1273 19.652C70.1393 19.784 70.1493 19.914 70.1573 20.042C70.1653 20.17 70.1693 20.288 70.1693 20.396V26H68.7473V17.324H69.9653C70.0373 17.324 70.0993 17.326 70.1513 17.33C70.2033 17.334 70.2493 17.344 70.2893 17.36C70.3333 17.376 70.3713 17.402 70.4033 17.438C70.4393 17.474 70.4733 17.522 70.5053 17.582L73.1033 22.4C73.1713 22.528 73.2333 22.66 73.2893 22.796C73.3493 22.932 73.4073 23.072 73.4633 23.216C73.5193 23.068 73.5773 22.926 73.6373 22.79C73.6973 22.65 73.7613 22.516 73.8293 22.388L76.3913 17.582C76.4233 17.522 76.4573 17.474 76.4933 17.438C76.5293 17.402 76.5673 17.376 76.6073 17.36C76.6513 17.344 76.6993 17.334 76.7513 17.33C76.8033 17.326 76.8653 17.324 76.9373 17.324H78.1553ZM83.511 18.608V21.014H86.547V22.256H83.511V24.71H87.363V26H81.891V17.324H87.363V18.608H83.511ZM95.2133 18.902C95.1653 18.986 95.1133 19.048 95.0573 19.088C95.0053 19.124 94.9393 19.142 94.8593 19.142C94.7753 19.142 94.6833 19.112 94.5833 19.052C94.4873 18.988 94.3713 18.918 94.2353 18.842C94.0993 18.766 93.9393 18.698 93.7553 18.638C93.5753 18.574 93.3613 18.542 93.1133 18.542C92.8893 18.542 92.6933 18.57 92.5253 18.626C92.3573 18.678 92.2153 18.752 92.0993 18.848C91.9873 18.944 91.9033 19.06 91.8473 19.196C91.7913 19.328 91.7633 19.474 91.7633 19.634C91.7633 19.838 91.8193 20.008 91.9313 20.144C92.0473 20.28 92.1993 20.396 92.3873 20.492C92.5753 20.588 92.7893 20.674 93.0293 20.75C93.2693 20.826 93.5153 20.908 93.7673 20.996C94.0193 21.08 94.2653 21.18 94.5053 21.296C94.7453 21.408 94.9593 21.552 95.1473 21.728C95.3353 21.9 95.4853 22.112 95.5973 22.364C95.7133 22.616 95.7713 22.922 95.7713 23.282C95.7713 23.674 95.7033 24.042 95.5673 24.386C95.4353 24.726 95.2393 25.024 94.9793 25.28C94.7233 25.532 94.4093 25.732 94.0373 25.88C93.6653 26.024 93.2393 26.096 92.7593 26.096C92.4833 26.096 92.2113 26.068 91.9433 26.012C91.6753 25.96 91.4173 25.884 91.1693 25.784C90.9253 25.684 90.6953 25.564 90.4793 25.424C90.2633 25.284 90.0713 25.128 89.9033 24.956L90.3773 24.182C90.4173 24.126 90.4693 24.08 90.5333 24.044C90.5973 24.004 90.6653 23.984 90.7373 23.984C90.8373 23.984 90.9453 24.026 91.0613 24.11C91.1773 24.19 91.3153 24.28 91.4753 24.38C91.6353 24.48 91.8213 24.572 92.0333 24.656C92.2493 24.736 92.5073 24.776 92.8073 24.776C93.2673 24.776 93.6233 24.668 93.8753 24.452C94.1273 24.232 94.2533 23.918 94.2533 23.51C94.2533 23.282 94.1953 23.096 94.0793 22.952C93.9673 22.808 93.8173 22.688 93.6293 22.592C93.4413 22.492 93.2273 22.408 92.9873 22.34C92.7473 22.272 92.5033 22.198 92.2553 22.118C92.0073 22.038 91.7633 21.942 91.5233 21.83C91.2833 21.718 91.0693 21.572 90.8813 21.392C90.6933 21.212 90.5413 20.988 90.4253 20.72C90.3133 20.448 90.2573 20.114 90.2573 19.718C90.2573 19.402 90.3193 19.094 90.4433 18.794C90.5713 18.494 90.7553 18.228 90.9953 17.996C91.2353 17.764 91.5313 17.578 91.8833 17.438C92.2353 17.298 92.6393 17.228 93.0953 17.228C93.6073 17.228 94.0793 17.308 94.5113 17.468C94.9433 17.628 95.3113 17.852 95.6153 18.14L95.2133 18.902ZM103.599 18.902C103.551 18.986 103.499 19.048 103.443 19.088C103.391 19.124 103.325 19.142 103.245 19.142C103.161 19.142 103.069 19.112 102.969 19.052C102.873 18.988 102.757 18.918 102.621 18.842C102.485 18.766 102.325 18.698 102.141 18.638C101.961 18.574 101.747 18.542 101.499 18.542C101.275 18.542 101.079 18.57 100.911 18.626C100.743 18.678 100.601 18.752 100.485 18.848C100.373 18.944 100.289 19.06 100.233 19.196C100.177 19.328 100.149 19.474 100.149 19.634C100.149 19.838 100.205 20.008 100.317 20.144C100.433 20.28 100.585 20.396 100.773 20.492C100.961 20.588 101.175 20.674 101.415 20.75C101.655 20.826 101.901 20.908 102.153 20.996C102.405 21.08 102.651 21.18 102.891 21.296C103.131 21.408 103.345 21.552 103.533 21.728C103.721 21.9 103.871 22.112 103.983 22.364C104.099 22.616 104.157 22.922 104.157 23.282C104.157 23.674 104.089 24.042 103.953 24.386C103.821 24.726 103.625 25.024 103.365 25.28C103.109 25.532 102.795 25.732 102.423 25.88C102.051 26.024 101.625 26.096 101.145 26.096C100.869 26.096 100.597 26.068 100.329 26.012C100.061 25.96 99.8033 25.884 99.5553 25.784C99.3113 25.684 99.0813 25.564 98.8653 25.424C98.6493 25.284 98.4573 25.128 98.2893 24.956L98.7633 24.182C98.8033 24.126 98.8553 24.08 98.9193 24.044C98.9833 24.004 99.0513 23.984 99.1233 23.984C99.2233 23.984 99.3313 24.026 99.4473 24.11C99.5633 24.19 99.7013 24.28 99.8613 24.38C100.021 24.48 100.207 24.572 100.419 24.656C100.635 24.736 100.893 24.776 101.193 24.776C101.653 24.776 102.009 24.668 102.261 24.452C102.513 24.232 102.639 23.918 102.639 23.51C102.639 23.282 102.581 23.096 102.465 22.952C102.353 22.808 102.203 22.688 102.015 22.592C101.827 22.492 101.613 22.408 101.373 22.34C101.133 22.272 100.889 22.198 100.641 22.118C100.393 22.038 100.149 21.942 99.9093 21.83C99.6693 21.718 99.4553 21.572 99.2673 21.392C99.0793 21.212 98.9273 20.988 98.8113 20.72C98.6993 20.448 98.6433 20.114 98.6433 19.718C98.6433 19.402 98.7053 19.094 98.8293 18.794C98.9573 18.494 99.1413 18.228 99.3813 17.996C99.6213 17.764 99.9173 17.578 100.269 17.438C100.621 17.298 101.025 17.228 101.481 17.228C101.993 17.228 102.465 17.308 102.897 17.468C103.329 17.628 103.697 17.852 104.001 18.14L103.599 18.902ZM111.773 22.724L110.717 19.838C110.665 19.71 110.611 19.558 110.555 19.382C110.499 19.206 110.443 19.016 110.387 18.812C110.335 19.016 110.281 19.208 110.225 19.388C110.169 19.564 110.115 19.718 110.063 19.85L109.013 22.724H111.773ZM114.623 26H113.375C113.235 26 113.121 25.966 113.033 25.898C112.945 25.826 112.879 25.738 112.835 25.634L112.187 23.864H108.593L107.945 25.634C107.913 25.726 107.851 25.81 107.759 25.886C107.667 25.962 107.553 26 107.417 26H106.157L109.571 17.324H111.215L114.623 26ZM124.216 21.65V25.16C123.776 25.484 123.306 25.722 122.806 25.874C122.31 26.022 121.778 26.096 121.21 26.096C120.502 26.096 119.86 25.986 119.284 25.766C118.712 25.546 118.222 25.24 117.814 24.848C117.41 24.456 117.098 23.988 116.878 23.444C116.658 22.9 116.548 22.306 116.548 21.662C116.548 21.01 116.654 20.412 116.866 19.868C117.078 19.324 117.378 18.856 117.766 18.464C118.158 18.072 118.632 17.768 119.188 17.552C119.744 17.336 120.368 17.228 121.06 17.228C121.412 17.228 121.74 17.256 122.044 17.312C122.352 17.368 122.636 17.446 122.896 17.546C123.16 17.642 123.4 17.76 123.616 17.9C123.832 18.04 124.03 18.194 124.21 18.362L123.748 19.094C123.676 19.21 123.582 19.282 123.466 19.31C123.35 19.334 123.224 19.304 123.088 19.22C122.956 19.144 122.824 19.068 122.692 18.992C122.56 18.916 122.412 18.85 122.248 18.794C122.088 18.738 121.906 18.692 121.702 18.656C121.502 18.62 121.27 18.602 121.006 18.602C120.578 18.602 120.19 18.674 119.842 18.818C119.498 18.962 119.204 19.168 118.96 19.436C118.716 19.704 118.528 20.026 118.396 20.402C118.264 20.778 118.198 21.198 118.198 21.662C118.198 22.158 118.268 22.602 118.408 22.994C118.552 23.382 118.752 23.712 119.008 23.984C119.268 24.252 119.58 24.458 119.944 24.602C120.308 24.742 120.714 24.812 121.162 24.812C121.482 24.812 121.768 24.778 122.02 24.71C122.272 24.642 122.518 24.55 122.758 24.434V22.862H121.666C121.562 22.862 121.48 22.834 121.42 22.778C121.364 22.718 121.336 22.646 121.336 22.562V21.65H124.216ZM129.191 18.608V21.014H132.227V22.256H129.191V24.71H133.043V26H127.571V17.324H133.043V18.608H129.191Z"
            fill="#F7F7F7"
          />
          <path
            className="send-icon"
            d="M162.796 15.1941C162.706 15.1046 162.592 15.0426 162.468 15.0154C162.344 14.9883 162.215 14.9971 162.096 15.0408L147.43 20.3739C147.304 20.4219 147.195 20.5072 147.118 20.6185C147.041 20.7298 147 20.8619 147 20.9972C147 21.1325 147.041 21.2645 147.118 21.3759C147.195 21.4872 147.304 21.5725 147.43 21.6205L153.157 23.907L157.383 19.6672L158.323 20.6072L154.077 24.8537L156.37 30.58C156.419 30.7041 156.505 30.8104 156.615 30.8853C156.726 30.9602 156.856 31.0001 156.99 31C157.124 30.9972 157.255 30.9537 157.365 30.8752C157.474 30.7966 157.557 30.6868 157.603 30.56L162.936 15.8941C162.982 15.7762 162.992 15.6477 162.968 15.5238C162.943 15.3999 162.883 15.2855 162.796 15.1941Z"
            fill="#F7F7F7"
          />
        </g>
      </svg>
    </button>
  );
};
