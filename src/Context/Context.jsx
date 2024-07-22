import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const myContext = createContext();

function Context({ children }) {
    const [activeTab, setActiveTab] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/admin') {
            setActiveTab('admin');
        } else if (location.pathname === '/') {
            console.log('added active tab ')
            setActiveTab('user');
        }
    }, [location]);

    console.log(activeTab,'active tab is here ')

    return (
        <>
            <myContext.Provider value={{ activeTab, setActiveTab }}>
                {children}
            </myContext.Provider>
        </>
    )
}

export { myContext }
export default Context