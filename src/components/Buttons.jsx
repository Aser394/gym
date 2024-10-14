import React from "react";

export default function Buttons(props) {
  const { title, func } = props;
  return (
    <button
      onClick={func}
      className="border-[1.5px] border-orange-300  rounded-lg mx-auto p-4 mt-10 duration-200 buttonBox"
    >
      {title}
    </button>
  );
}
