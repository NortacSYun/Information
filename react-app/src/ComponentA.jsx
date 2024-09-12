// PROVIDER COMPONENT

import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Project");

    return (

        <div className="box">

            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB value={user} />
            </UserContext.Provider>

        </div>
    )

}
export default ComponentA