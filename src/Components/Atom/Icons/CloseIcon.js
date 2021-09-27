import * as React from "react";

function SvgCloseIcon(props) {
  return (
    <svg
      width={58}
      height={58}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={29} cy={29} r={29} fill="#000" />
      <path
        d="M20.889 37.169l16.163-16.163M37.052 37.169L20.889 21.006"
        stroke="#fff"
        strokeWidth={6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgCloseIcon;
