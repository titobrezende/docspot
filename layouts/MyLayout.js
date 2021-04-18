//import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core"

const navLinks = [
  { title: `Patients`, path: `/patients` },
  { title: `Appointments`, path: `/appointments` }
]

export default function MyLayout({ children }) {
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <p>      
        <button onClick={() => console.log("Clicked")}>
          button
        </button>
      </p>

      {children}
    </>
  )
}