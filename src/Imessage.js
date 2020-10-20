import React from "react";
import SideBar from "./Sidebar";
import Chat from "./chat";
import "./Imessage.css";

function Imessage() {
  return (
    <div className="imessage">
      {/* sidebar */}
      <SideBar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default Imessage;
