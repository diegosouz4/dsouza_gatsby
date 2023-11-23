import React from "react";

export default function DarkmodeIcon({ clasName }) {
  return (
    <svg className={clasName} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="star" d="M21.338 16.162 25 12.5l-3.662-3.662V3.662h-5.177L12.5 0 8.838 3.662H3.662v5.176L0 12.5l3.662 3.662v5.177h5.176L12.5 25l3.662-3.662h5.177v-5.177zM12.5 19.334a6.836 6.836 0 1 1 0-13.67 6.836 6.836 0 0 1 0 13.67z" fill="#253751"/>
      <path id="dot" d="M12.5 18.51a6.01 6.01 0 1 0 0-12.02 6.01 6.01 0 0 0 0 12.02z" fill="#253751"/>
    </svg>
  );
}
