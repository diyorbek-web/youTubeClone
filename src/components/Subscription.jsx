const Subscription = ({ sideBar }) => {
  return (
    <div className={`bg-green-600 ${sideBar ? "w-[95%]" : "w-[85%]"} `}>
      <h1 className="text-white">Subscription</h1>
    </div>
  );
};
export default Subscription;
