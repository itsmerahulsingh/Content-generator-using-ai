"use client"
import { FileClock, Home, Icon, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
const MenuList=[
    {
        name:'Home',
        Icon:Home,
        path:'/dashboard'

    },
    {
        name:'History',
        Icon:FileClock,
        path:'/dashboard/history'

    },
    {
        name:'Billing',
        Icon:WalletCards,
        path:'/dashboard/billing'

    },
    {
        name:'Setting',
        Icon:Settings,
        path:'/dashboard/setting'

    }
]
const path = usePathname();
useEffect(()=>{
  console.log(path)
})
    


  return (
    <div className="h-screen p-5 shadow-sm border relative bg-white">
      <div className=" flex justify-center">
        <Image src={"./logo.svg"} alt="logo" width={120} height={80} />
      </div>
      <hr className="my-6 border"/>
      <div className="mt-3">
      {MenuList.map((menu,index)=>(
        <div className={`flex gap-2 mb-2 p-3
        hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
        ${path==menu.path&&'bg-primary text-white'}

        ` }>
            <menu.Icon className="h-6 w-6"/>
            <h2 className="text-lg">{menu.name}</h2>
        </div>
      ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
