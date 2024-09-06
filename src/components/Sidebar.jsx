import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";

const Sidebar = ({ sideBar, setChoosePage }) => {
  const [activeHover, setActiveHover] = useState(1);
  const data = [
    {
      id: 1,
      icon: <FaHome className="text-[22px]" />,
      name: "Asosiy",
    },
    { id: 2, icon: <AiFillLike className="text-[22px]" />, name: "Sevimli" },
    {
      id: 3,
      icon: <MdOutlineSubscriptions className="text-[22px]" />,
      name: "A'zo kanallar",
    },
    {
      id: 4,
      icon: <CiSquarePlus className="text-[22px]" />,
      name: "Kanal yaratish",
    },
  ];
  const activeItem = (id) => {
    setChoosePage(id);
    setActiveHover(id);
  };
  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 mt-[80px] bg-white space-y-5 ${
        sideBar ? "w-[5%]" : "w-[15%]"
      } transition-width duration-100 z-30`}
    >
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => activeItem(item.id)}
          className={`${
            item.id === activeHover ? "bg-[#F0F0F0]" : ""
          } mt-5 hover:bg-[#F0F0F0] rounded-lg ml-5 cursor-pointer flex items-center p-1`}
        >
          {item.icon}
          <span
            className={`ml-5 text-[20px] ${sideBar ? "hidden" : "opacity-1"}`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
