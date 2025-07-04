
function Chat() {
  return (
    <div className="flex-1 flex flex-col bg-discord-chat p-4 overflow-y-auto text-white">
      <div className="flex-1">
        <p className="text-sm text-gray-300">Welcome to #general!</p>
      </div>
      <div className="mt-4">
        <input
          className="w-full p-2 rounded bg-discord-dark-light text-white placeholder-gray-400"
          placeholder="Message #general"
        />
      </div>
    </div>
  );
}

export default Chat;
