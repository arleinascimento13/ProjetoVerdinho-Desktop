import { useState } from "react";
import sair from "./assets/sair.png";
import imgdefault from "./assets/Default.png";

const menuItems = [
  "DashBoard",
  "Pesquisa",
  "Ocorrência",
  "Domésticos",
  "Silvestres"
];
type InfoProps = {
  name: string;
  position: string;
  imgurl?: string;
  onClick: () => void;
}

export const MenuBar = ({ name, position, imgurl, onClick }: InfoProps) => {
  const [selected, setSelected] = useState("DashBoard");

  return (
    <div className="w-56 h-screen bg-[#1F2937] flex flex-col justify-around text-white">
      
      <div className="flex flex-col items-center">
        <button onClick={onClick}>
          <img
            src={imgurl ? imgurl : imgdefault}
            alt="Configuração"
            className="w-24 h-24 rounded-full border-2 border-white mb-0"
          />
        </button>
          <p className="font-bold text-2xl mt-2 mb-0">{name}</p>
          <p className="text-sm text-gray-300">{position}</p>
        </div>

        
      <div className="flex flex-col items-center w-full mb-8">
        <div className="flex-1 w-full flex flex-col pt-96 justify-center items-center gap-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`relative w-full h-12 flex items-center justify-center cursor-pointer transition-all ${
                selected === item ? "font-black text-lg" : "font-semibold"
              }`}
            >
              {selected === item && (
                <div className="absolute left-0 h-full w-1.5 bg-white" />
              )}
              {item}
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img src={sair} alt="Sair" className="w-5 h-5" />
        <span className="text-lg font-semibold">Sair</span>
      </div>
    </div>
  );
};
