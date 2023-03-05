import React, { useContext, useState, useEffect } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  console.log(DataSongs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song.id]);

  return (
    <div className="col-span-2 overflow-y-scroll">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">#</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {DataSongs.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={` border-b hover:bg-gray-600 ${
                    idSong === item.id && "bg-slate-600 text-teal-400 "
                  }`}
                  onClick={() => handlePlaySong(item.id)}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">{index + 1}</div>
                  </td>
                  <th scope="row" className="flex items-center px-6 py-4 ">
                    <div className="pl-3 mt-3">
                      <div className="text-base">{item.name}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{item.author}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <a href={item.url}>
                        <button
                          type="button"
                          className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
                        >
                          Download
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
