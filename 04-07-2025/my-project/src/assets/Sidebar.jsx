
function Sidebar() {
  return (
    <div className="w-16 bg-discord-dark flex flex-col items-center py-4 space-y-4">
      <div className="bg-discord-blurple w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white">
        D
      </div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-12 h-12 bg-discord-gray hover:bg-discord-blurple rounded-full transition duration-300"
        ></div>
      ))}
    </div>
  );
}

export default Sidebar;
