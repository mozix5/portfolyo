import React from "react";

const Card = ({ name, url }) => {
  return (
    <div className="h-[254px] bg-[#3049bd] w-80 rounded-3xl relative">
      <div className=" h-[240px] w-[276px] absolute rounded-2xl left-0 right-0 mx-auto -top-32 bg-slate-400">
        <img src={url} className="h-full w-full object-cover rounded-2xl" />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Card;
