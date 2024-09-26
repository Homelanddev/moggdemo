
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { initMiniApp } from "@tma.js/sdk-react";
import BottomNav from "./Page/BottomNav";




function App() {


  const [miniApp] = initMiniApp();
  

  useEffect(() => {
  
    miniApp.setHeaderColor('#000000');
    
  });

  return (
    <div className="">
    
        <Outlet />
        <BottomNav />
    
    </div>
  );
}

export default App;
