import React from "react";
import Sidebar from "./assets/Sidebar";
import ChannelList from "./assets/ChannelList";
import Chat from "./assets/Chat";

function App() {
  return (
    <div className="h-screen flex text-white">
      <Sidebar />
      <ChannelList />
      <Chat />
    </div>
  );
}

export default App;
