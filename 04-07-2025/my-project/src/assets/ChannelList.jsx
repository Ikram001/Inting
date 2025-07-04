
function ChannelList() {
  return (
    <div className="w-64 bg-discord-dark-light p-4 overflow-y-auto text-white">
      <h2 className="font-semibold text-xs text-gray-400 mb-2">TEXT CHANNELS</h2>
      <ul className="space-y-2 text-sm">
        {["general", "chat", "memes", "bot"].map((ch) => (
          <li
            key={ch}
            className="hover:bg-discord-gray px-2 py-1 rounded cursor-pointer transition-colors duration-200"
          >
            # {ch}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChannelList;
