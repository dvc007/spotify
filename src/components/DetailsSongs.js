import React, { useContext } from "react";
import { Songs } from "./../Context";

export default function DetailsSongs() {
  const { song } = useContext(Songs);
  return (
    <div className="grid-span-1">
      <h2 className="text-cyan-500 font-bold ml-10">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl ml-10">{song.name}</h2>
      <div>
        <img
          className="w-80 h-72 mx-auto mt-10"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
