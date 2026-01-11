import { Outlet } from "react-router-dom";

export function AppLayout(){
    return(
        <>
        <h1> App</h1>
        <Outlet/>
        </>
    )
    
}