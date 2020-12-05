import React, { useState, useContext } from 'react'
import sublinks from './data'

// Creating a context so that we can move things into 
// our children
const AppContext =React.createContext();

// Creating Our provider ----->>> Which will have children
export const AppProvider =({children})=>{

    // Creating our states that we want to pass around
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isSubMenuOpen,setIsSubMenuOpen]=useState(false);

    const [location,setLocation]=useState({});
    const [page,setPage]=useState({page:'',links:[]})

    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }


    const openSubMenu=(text,coordinates)=>{

        const page=sublinks.find((link)=>link.page==text);
        console.log(page);
        
        setPage(page);
        setLocation(coordinates);
        setIsSubMenuOpen(true);
    }
    const closeSubMenu=()=>{
        setIsSubMenuOpen(false);
    }
    // Passing our children with the same context to 
    // Provider and returning itisSubMenuOpen
    return <AppContext.Provider value={

        {
            // Returning an openSubMenu 
            isSubMenuOpen,
            isSidebarOpen,
            location,
            page,
            openSubMenu,
            openSidebar,
            closeSubMenu,
            closeSidebar
        }

        }
        >

        {children}

    </AppContext.Provider>
}


// SettisSubMenuOpening up custom hook to get Context
export const useGlobalContext=()=>{
    return useContext(AppContext);
}