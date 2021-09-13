import Laptop from "./Laptop";

const ObjectsDesign = ({ hrDeg = "0", minDeg = "0" }) => {
  return (
    // <svg
    //   className="hero__objects"
    //   width="750"
    //   height="817"
    //   viewBox="0 0 750 817"
    //   fill="none"
    // >
    //   <g className="objects">
    //     <path
    //       className="objects__shadow-main"
    //       d="M751.785 816.777H261L751.785 46.2444V816.777Z"
    //       fill="#49F1C1"
    //     />
    //     <path
    //       className="objects__desk"
    //       d="M2 816.777L153.786 571.204H277.474M544.971 571.204H636.089"
    //       stroke="#1F2833"
    //       strokeWidth="4"
    //     />
    //     <g className="objects__clock">
    //       <circle cx="480.662" cy="260.027" r="88.1415" fill="#F7F7F7" />
    //       <circle
    //         cx="480.662"
    //         cy="260.027"
    //         r="86.1415"
    //         stroke="#1F2833"
    //         strokeWidth="4"
    //       />
    //     </g>
    //     <path
    //       d="M751.919 651.137H636.206V145.187H751.919M751.919 308.076H653.552V163.334H751.919M751.919 326.223L653.552 325.359V470.101H751.919M751.919 488.248H653.552V632.99H751.919M679.413 509.851H653.489V632.99H679.413V509.851ZM679.413 509.851H705.337M705.337 509.851V632.99H731.261V509.851M705.337 509.851H731.261M731.261 509.851H751.919M658.673 527.134H674.228M684.597 527.134H700.152M710.521 527.134H726.076M736.445 527.134H752M654.353 362.949H669.907V378.503M669.907 378.503H695.831V391.897M669.907 378.503V386.28M695.831 409.612V468.373M695.831 409.612H707.929M695.831 409.612V391.897M707.929 409.612V468.373M707.929 409.612V349.987H726.94V362.949M726.94 362.949V468.373M726.94 362.949H751.919M669.907 386.28H654.353M669.907 386.28V391.897M669.907 450.226V468.373M669.907 450.226H654.353M669.907 450.226V391.897M669.907 391.897H695.831M733.853 374.182H748.543M655.217 211.725H677.684M677.684 211.725V229.008M677.684 211.725V191.85H694.967V223.823M694.967 223.823V306.78M694.967 223.823H709.657M709.657 223.823V298.736M709.657 223.823V215.794M723.483 229.008H739.902M723.483 229.008V215.794M723.483 229.008V298.736M739.902 229.008V306.78M739.902 229.008V211.725H751.919M677.684 306.78V229.008M677.684 229.008H655.217M723.483 215.794V207.405H709.657V215.794M723.483 215.794H709.657M723.483 298.736V306.78M723.483 298.736H709.657M709.657 306.78V298.736"
    //       stroke="#1F2833"
    //       strokeWidth="4"
    //     />
    //     <g className="objects__mouse">
    //       <path
    //         d="M608.645 735.306C608.671 739.157 609.126 743.407 610.083 748.067C618.549 789.293 681.737 777.514 664.069 733.344C663.048 730.023 661.716 726.995 660.143 724.267M608.645 735.306C608.405 699.534 645.188 698.33 660.143 724.267M608.645 735.306C616.159 731.219 636.978 723.288 660.143 724.267"
    //         stroke="#1F2833"
    //         strokeWidth="4"
    //       />
    //       <path
    //         d="M629.478 718.183C626.468 711.245 631.91 708.101 635.669 716.642C637.42 721.407 632.488 725.122 629.478 718.183Z"
    //         stroke="#1F2833"
    //         strokeWidth="2"
    //       />
    //     </g>
    //     <g className="objects__mug">
    //       <g className="mug__shadow">
    //         <path
    //           d="M158.683 724.155L158.683 699.883C164.45 698.498 182.118 699.883 187.003 710.683C190.958 719.427 161.676 725.854 158.683 724.155Z"
    //           fill="#49F1C1"
    //         />
    //         <path
    //           d="M141.241 797.147V726.288C132.069 726.288 127.178 726.288 113.725 716.783V771.223C110.885 773.297 102.232 777.168 104.44 786.657C108.216 802.886 139.391 793.614 141.241 797.147Z"
    //           fill="#49F1C1"
    //         />
    //       </g>
    //       <path
    //         d="M188.499 730.841C207.149 720.583 236.105 747.037 188.499 773.539M188.499 744.583C199.787 732.852 216.474 742.62 188.499 760.288M112.918 711.27V781.943C113.245 784.234 112.918 787.274 117.826 789.305C132.059 795.194 142.856 796.176 150.708 796.176M112.918 711.27C113.9 706.69 122.832 697.626 150.708 698.019M112.918 711.27C113.082 715.687 120.869 724.718 150.708 725.503M188.008 711.27V781.943C187.681 784.234 188.008 787.274 183.1 789.305C168.867 795.194 158.07 796.176 150.218 796.176M188.008 711.27C187.026 706.69 178.094 697.626 150.218 698.019M188.008 711.27C187.844 715.687 180.057 724.718 150.218 725.503"
    //         stroke="#1F2833"
    //         strokeWidth="4"
    //       />
    //     </g>

    //     <Laptop />

    //     <g className="objects__cp">
    //       <g>
    //         <path
    //           d="M195.149 658.994C194.985 659.485 194.167 660.466 192.204 660.466H140.181C138.107 660.466 137.128 660.466 136.955 659.888C136.927 660.512 136.981 661.694 137.236 663.902C137.379 665.135 138.382 665.374 139.199 665.374H192.204C193.383 665.374 195.64 664.392 196.13 663.902L228.522 598.136C229.685 592.247 228.522 593.719 228.522 593.719L199.693 650.106L195.149 658.994Z"
    //           fill="#49F1C1"
    //         />
    //         <path
    //           d="M228.522 593.719C229.013 592.738 229.994 590.284 227.05 590.284H181.898C179.542 589.891 177.644 591.756 176.99 592.738L142.127 650.106M228.522 593.719C228.522 593.719 229.685 592.247 228.522 598.136L196.13 663.902C195.64 664.392 193.383 665.374 192.204 665.374M228.522 593.719L199.693 650.106M192.204 660.466C194.167 660.466 194.985 659.485 195.149 658.994L199.693 650.106M192.204 660.466C190.241 660.466 156.704 660.466 140.181 660.466M192.204 660.466H140.181M140.181 660.466C138.107 660.466 137.128 660.466 136.955 659.888M192.204 665.374C191.025 665.374 156.049 665.374 139.199 665.374M192.204 665.374H139.199M139.199 665.374C138.382 665.374 137.379 665.135 137.236 663.902C136.981 661.694 136.927 660.512 136.955 659.888M137.075 658.994C137.274 658.424 137.67 657.635 138.218 656.54L142.127 650.106M137.075 658.994C137.445 659.774 137.014 658.555 136.955 659.888M137.075 658.994C136.936 659.388 136.892 659.677 136.955 659.888M142.127 650.106H199.693"
    //           stroke="#1F2833"
    //           strokeWidth="4"
    //         />
    //       </g>
    //       <circle cx="166.373" cy="655.014" r="2.94471" fill="#1F2833" />
    //     </g>
    //     <g className="objects__plant">
    //       <path
    //         d="M734.742 100.722L727.38 144.892H676.338L667.504 100.722M734.742 100.722H667.504M734.742 100.722H738.668V84.5256H664.56V100.722H667.504"
    //         stroke="#1F2833"
    //         strokeWidth="4"
    //       />
    //       <path
    //         d="M705.863 83.544H723.619C723.995 79.8514 724.225 66.331 744.067 41.7895C738.33 45.042 730.658 48.9704 723.619 54.5877M705.863 83.544C705.486 79.204 707.312 71.634 711.778 66.3665M705.863 83.544H693.744M723.619 54.5877C722.586 48.8398 724.859 33.8363 729.819 15.6575C724.84 21.6224 714.149 36.0519 711.218 46.0502M723.619 54.5877C718.395 58.7563 715.553 61.9138 711.778 66.3665M711.218 46.0502C709.985 57.6392 710.75 63.6208 711.778 66.3665M711.218 46.0502C711.118 41.6002 711.287 30.655 712.759 22.4746C709.736 26.7293 705.336 34.3939 701.529 44.0619M693.744 83.544H678.379C678.379 74.4546 668.486 57.0416 656.707 40.808C662.344 43.9893 674.485 50.879 677.398 53.4354M693.744 83.544C693.628 76.6246 694.403 69.8212 695.73 63.3769M693.744 83.544C692.805 78.1472 688.22 64.5699 677.398 53.4354M701.529 44.0619C700.249 36.4874 696.394 18.2707 691.208 6C689.705 15.4681 686.867 36.7336 687.544 46.0502M701.529 44.0619C699.239 49.8774 697.163 56.4178 695.73 63.3769M687.544 46.0502C690.926 51.9583 694.41 60.063 695.73 63.3769M687.544 46.0502C684.538 41.9789 676.834 32.3025 670.07 26.1671C672.513 32.7001 677.398 47.3 677.398 53.4354"
    //         stroke="#1F2833"
    //         strokeWidth="3"
    //       />
    //     </g>
    //     <g className="objects__notebook">
    //       <path
    //         d="M419.118 699.97L311.636 698.988L275.318 809.906M419.118 699.97L394.579 809.906H275.318M419.118 699.97V710.276L397.524 812.85H275.318V809.906"
    //         stroke="#1F2833"
    //         strokeWidth="3"
    //       />
    //       <path
    //         d="M316.544 704.878L286.606 799.108"
    //         stroke="#1F2833"
    //         strokeWidth="3"
    //         strokeDasharray="5 6"
    //       />
    //     </g>
    //     <path
    //       className="objects__ballpen"
    //       d="M452.422 718.237L455.384 710.767L460.831 713.252L457.869 720.722M452.422 718.237L457.869 720.722M452.422 718.237L429.568 775.883M457.869 720.722L436.074 778.228M429.568 775.883L428.492 778.596L428.27 788.535L434.919 781.144L436.074 778.228M429.568 775.883L436.074 778.228"
    //       stroke="#1F2833"
    //       strokeWidth="3"
    //     />
    //   </g>
    //   <defs>
    //     <filter
    //       className="filter0_d"
    //       x="388.521"
    //       y="171.885"
    //       width="180.283"
    //       height="185.283"
    //       filterUnits="userSpaceOnUse"
    //       colorInterpolationFilters="sRGB"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       />
    //       <feMorphology
    //         radius="1"
    //         operator="erode"
    //         in="SourceAlpha"
    //         result="effect1_dropShadow"
    //       />
    //       <feOffset dx="-5" dy="10" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 0 0.756863 0 0 0 1 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow"
    //         result="shape"
    //       />
    //     </filter>
    //   </defs>
    // </svg>

    <svg
      className="hero__objects"
      width="752"
      height="817"
      viewBox="0 0 752 817"
      fill="none"
    >
      <g className="hero__objects">
        <path
          className="objects__shadow-main"
          d="M751.785 816.777H261L751.785 46.2444V816.777Z"
          fill="#49F1C1"
        />
        <path
          className="objects__desk"
          d="M2 816.777L153.786 571.204H277.474M544.971 571.204H636.089"
          stroke="#1F2833"
          strokeWidth="4"
        />
        <path
          className="objects__bookshelf"
          d="M751.919 651.137H636.206V145.187H751.919M751.919 308.076H653.552V163.334H751.919M751.919 326.223L653.552 325.359V470.101H751.919M751.919 488.248H653.552V632.99H751.919M679.413 509.851H653.489V632.99H679.413V509.851ZM679.413 509.851H705.337M705.337 509.851V632.99H731.261V509.851M705.337 509.851H731.261M731.261 509.851H751.919M658.673 527.134H674.228M684.597 527.134H700.152M710.521 527.134H726.076M736.445 527.134H752M654.353 362.949H669.907V378.503M669.907 378.503H695.831V391.897M669.907 378.503V386.28M695.831 409.612V468.373M695.831 409.612H707.929M695.831 409.612V391.897M707.929 409.612V468.373M707.929 409.612V349.987H726.94V362.949M726.94 362.949V468.373M726.94 362.949H751.919M669.907 386.28H654.353M669.907 386.28V391.897M669.907 450.226V468.373M669.907 450.226H654.353M669.907 450.226V391.897M669.907 391.897H695.831M733.853 374.182H748.543M655.217 211.725H677.684M677.684 211.725V229.008M677.684 211.725V191.85H694.967V223.823M694.967 223.823V306.78M694.967 223.823H709.657M709.657 223.823V298.736M709.657 223.823V215.794M723.483 229.008H739.902M723.483 229.008V215.794M723.483 229.008V298.736M739.902 229.008V306.78M739.902 229.008V211.725H751.919M677.684 306.78V229.008M677.684 229.008H655.217M723.483 215.794V207.405H709.657V215.794M723.483 215.794H709.657M723.483 298.736V306.78M723.483 298.736H709.657M709.657 306.78V298.736"
          stroke="#1F2833"
          strokeWidth="4"
        />
        <g className="objects__clock">
          <g className="objects__circle" filter="url(#filter0_d)">
            <circle cx="481.141" cy="260.141" r="88.1415" fill="#F7F7F7" />
            <circle
              cx="481.141"
              cy="260.141"
              r="86.1415"
              stroke="#1F2833"
              strokeWidth="4"
            />
          </g>
          <g
            className="hour"
            style={{
              transition: "0.25s linear",
              transform: `rotate(${hrDeg + "deg"})`,
              transformOrigin: "481px 260px",
            }}
          >
            <rect
              width="80"
              height="80"
              transform="translate(441 220)"
              fill="none"
            />
            <path
              className="line"
              d="M479 222.5C479 221.119 480.119 220 481.5 220V220C482.881 220 484 221.119 484 222.5V260H479V222.5Z"
              fill="#1F2833"
            />
          </g>
          <g
            className="minute"
            clipPath="url(#clip0)"
            style={{
              transition: "0.25s linear",
              transform: `rotate(${minDeg + "deg"})`,
              transformOrigin: "481px 260px",
            }}
          >
            <rect
              width="130"
              height="130"
              transform="translate(416 195)"
              fill="none"
            />
            <path
              className="line_2"
              d="M479 197C479 195.895 479.895 195 481 195V195C482.105 195 483 195.895 483 197V260H479V197Z"
              fill="#1F2833"
            />
          </g>
          <circle
            className="middle-circle"
            cx="481"
            cy="260"
            r="4"
            fill="#1F2833"
          />
          <g className="dash">
            <rect
              className="5"
              x="517.289"
              y="323.622"
              width="2"
              height="5.19041"
              transform="rotate(-30 517.289 323.622)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="11"
              x="442.384"
              y="193.883"
              width="2"
              height="5.282"
              transform="rotate(-30 442.384 193.883)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="4"
              x="544.13"
              y="297.525"
              width="2"
              height="5.18127"
              transform="rotate(-60 544.13 297.525)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="10"
              x="414.383"
              y="222.616"
              width="2"
              height="5.23963"
              transform="rotate(-60 414.383 222.616)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="7"
              x="445.016"
              y="322.558"
              width="2"
              height="5.26406"
              transform="rotate(30 445.016 322.558)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="1"
              x="519.884"
              y="192.883"
              width="2"
              height="5.28182"
              transform="rotate(30 519.884 192.883)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="8"
              x="418.856"
              y="295.801"
              width="2"
              height="5.16653"
              transform="rotate(60 418.856 295.801)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="2"
              x="548.617"
              y="220.884"
              width="2"
              height="5.21469"
              transform="rotate(60 548.617 220.884)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="12"
              x="480"
              y="183"
              width="4"
              height="9"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="6"
              x="480"
              y="329"
              width="4"
              height="9"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="3"
              x="550"
              y="262"
              width="4"
              height="9"
              transform="rotate(-90 550 262)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
            <rect
              className="9"
              x="404"
              y="262"
              width="4"
              height="9"
              transform="rotate(-90 404 262)"
              fill="#1F2833"
              fillOpacity="0.7"
            />
          </g>
        </g>
        <g className="objects__mouse">
          <path
            className="mouse__main"
            d="M608.645 735.306C608.671 739.157 609.126 743.407 610.083 748.067C618.549 789.293 681.737 777.514 664.069 733.344C663.048 730.023 661.716 726.995 660.143 724.267M608.645 735.306C608.405 699.534 645.188 698.33 660.143 724.267M608.645 735.306C616.159 731.219 636.978 723.288 660.143 724.267"
            stroke="#1F2833"
            strokeWidth="4"
          />
          <path
            className="mouse__wheel"
            d="M629.478 718.183C626.468 711.245 631.91 708.101 635.669 716.642C637.42 721.407 632.488 725.122 629.478 718.183Z"
            stroke="#1F2833"
            strokeWidth="2"
          />
        </g>
        <g className="objects__mug">
          <g className="mug__shadow">
            <path
              d="M158.683 724.155L158.683 699.883C164.45 698.498 182.118 699.883 187.003 710.683C190.958 719.427 161.676 725.854 158.683 724.155Z"
              fill="#49F1C1"
            />
            <path
              d="M141.241 797.147V726.288C132.069 726.288 127.178 726.288 113.725 716.783V771.223C110.885 773.297 102.232 777.168 104.44 786.657C108.216 802.886 139.391 793.614 141.241 797.147Z"
              fill="#49F1C1"
            />
          </g>
          <path
            className="mug__main"
            d="M188.499 730.841C207.149 720.583 236.105 747.037 188.499 773.539M188.499 744.583C199.787 732.852 216.474 742.62 188.499 760.288M112.918 711.27V781.943C113.245 784.234 112.918 787.274 117.826 789.305C132.059 795.194 142.856 796.176 150.708 796.176M112.918 711.27C113.9 706.69 122.832 697.626 150.708 698.019M112.918 711.27C113.082 715.687 120.869 724.718 150.708 725.503M188.008 711.27V781.943C187.681 784.234 188.008 787.274 183.1 789.305C168.867 795.194 158.07 796.176 150.218 796.176M188.008 711.27C187.026 706.69 178.094 697.626 150.218 698.019M188.008 711.27C187.844 715.687 180.057 724.718 150.218 725.503"
            stroke="#1F2833"
            strokeWidth="4"
          />
        </g>

        <Laptop />

        <g className="objects__cp">
          <g className="cp__main">
            <path
              d="M195.149 658.994C194.985 659.485 194.167 660.466 192.204 660.466H140.181C138.107 660.466 137.128 660.466 136.955 659.888C136.927 660.512 136.981 661.694 137.236 663.902C137.379 665.135 138.382 665.374 139.199 665.374H192.204C193.383 665.374 195.64 664.392 196.13 663.902L228.522 598.136C229.685 592.247 228.522 593.719 228.522 593.719L199.693 650.106L195.149 658.994Z"
              fill="#49F1C1"
            />
            <path
              d="M228.522 593.719C229.013 592.738 229.994 590.284 227.05 590.284H181.898C179.542 589.891 177.644 591.756 176.99 592.738L142.127 650.106M228.522 593.719C228.522 593.719 229.685 592.247 228.522 598.136L196.13 663.902C195.64 664.392 193.383 665.374 192.204 665.374M228.522 593.719L199.693 650.106M192.204 660.466C194.167 660.466 194.985 659.485 195.149 658.994L199.693 650.106M192.204 660.466C190.241 660.466 156.704 660.466 140.181 660.466M192.204 660.466H140.181M140.181 660.466C138.107 660.466 137.128 660.466 136.955 659.888M192.204 665.374C191.025 665.374 156.049 665.374 139.199 665.374M192.204 665.374H139.199M139.199 665.374C138.382 665.374 137.379 665.135 137.236 663.902C136.981 661.694 136.927 660.512 136.955 659.888M137.075 658.994C137.274 658.424 137.67 657.635 138.218 656.54L142.127 650.106M137.075 658.994C137.445 659.774 137.014 658.555 136.955 659.888M137.075 658.994C136.936 659.388 136.892 659.677 136.955 659.888M142.127 650.106H199.693"
              stroke="#1F2833"
              strokeWidth="4"
            />
          </g>
          <circle
            className="cp__button"
            cx="166.373"
            cy="655.014"
            r="2.94471"
            fill="#1F2833"
          />
        </g>
        <g className="objects__plant">
          <path
            className="plant__pot"
            d="M734.742 100.722L727.38 144.892H676.338L667.504 100.722M734.742 100.722H667.504M734.742 100.722H738.668V84.5256H664.56V100.722H667.504"
            stroke="#1F2833"
            strokeWidth="4"
          />
          <path
            className="plant__leaf"
            d="M705.863 83.544H723.619C723.995 79.8514 724.225 66.331 744.067 41.7895C738.33 45.042 730.658 48.9704 723.619 54.5877M705.863 83.544C705.486 79.204 707.312 71.634 711.778 66.3665M705.863 83.544H693.744M723.619 54.5877C722.586 48.8398 724.859 33.8363 729.819 15.6575C724.84 21.6224 714.149 36.0519 711.218 46.0502M723.619 54.5877C718.395 58.7563 715.553 61.9138 711.778 66.3665M711.218 46.0502C709.985 57.6392 710.75 63.6208 711.778 66.3665M711.218 46.0502C711.118 41.6002 711.287 30.655 712.759 22.4746C709.736 26.7293 705.336 34.3939 701.529 44.0619M693.744 83.544H678.379C678.379 74.4546 668.486 57.0416 656.707 40.808C662.344 43.9893 674.485 50.879 677.398 53.4354M693.744 83.544C693.628 76.6246 694.403 69.8212 695.73 63.3769M693.744 83.544C692.805 78.1472 688.22 64.5699 677.398 53.4354M701.529 44.0619C700.249 36.4874 696.394 18.2707 691.208 6C689.705 15.4681 686.867 36.7336 687.544 46.0502M701.529 44.0619C699.239 49.8774 697.163 56.4178 695.73 63.3769M687.544 46.0502C690.926 51.9583 694.41 60.063 695.73 63.3769M687.544 46.0502C684.538 41.9789 676.834 32.3025 670.07 26.1671C672.513 32.7001 677.398 47.3 677.398 53.4354"
            stroke="#1F2833"
            strokeWidth="3"
          />
        </g>
        <g className="objects__notebook">
          <path
            className="notebook__main"
            d="M419.118 699.97L311.636 698.988L275.318 809.906M419.118 699.97L394.579 809.906H275.318M419.118 699.97V710.276L397.524 812.85H275.318V809.906"
            stroke="#1F2833"
            strokeWidth="3"
          />
          <path
            className="notebook__string"
            d="M316.544 704.878L286.606 799.108"
            stroke="#1F2833"
            strokeWidth="3"
            strokeDasharray="5 6"
          />
        </g>
        <path
          className="objects__ballpen"
          d="M452.422 718.237L455.384 710.767L460.831 713.252L457.869 720.722M452.422 718.237L457.869 720.722M452.422 718.237L429.568 775.883M457.869 720.722L436.074 778.228M429.568 775.883L428.492 778.596L428.27 788.535L434.919 781.144L436.074 778.228M429.568 775.883L436.074 778.228"
          stroke="#1F2833"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="389"
          y="172"
          width="180.283"
          height="185.283"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx="-5" dy="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 0 0.756863 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="130"
            height="130"
            fill="none"
            transform="translate(416 195)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ObjectsDesign;
