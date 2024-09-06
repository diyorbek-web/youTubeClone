const Favorites = ({ sideBar }) => {
  return (
    <div className={`bg-green-600 ${sideBar ? "w-[95%]" : "w-[85%]"} `}>
      <h1 className="text-white">Favorites</h1>
    </div>
  );
};
export default Favorites;
