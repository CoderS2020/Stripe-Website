import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext=React.createContext();

export const AppProvider=({children})=>{

    const [isSidebarOpen,setisSidebarOpen]=useState(false);
    const [isSubmenuOpen,setisSubmenuOpen]=useState(false);
    const [location,setlocation]=useState({});
    const [page,setpage]=useState({page:'',links:[]});
    

    const openSidebar=()=>{
        setisSidebarOpen(true);
    }

    const closeSidebar=()=>{
        setisSidebarOpen(false);
    }

    const openSubmenu=(text,coordinates)=>{
        const page=sublinks.find((link)=>link.page===text);
        setpage(page);

        setlocation(coordinates);
        setisSubmenuOpen(true);
    }

    const closeSubmenu=()=>{
        setisSubmenuOpen(false);
    }

    return <AppContext.Provider
    value=
    {{isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar,location,page}}
>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

