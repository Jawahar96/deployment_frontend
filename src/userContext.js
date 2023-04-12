import { createContext, useState } from "react";

let UserContext=createContext()


export const Users=({children})=>{
 const [name,setUsername]=useState("Jawahar")

  return(
    <UserContext.Provider value={{name ,setUsername}}>
        {children}
    </UserContext.Provider>
  )
}


export default UserContext