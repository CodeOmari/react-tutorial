import Header from "./components/Header";
import Content from "./components/Content";
import React from "react"

export default function App(){

  const [userName, setUserName] = React.useState("Bob")
  return(
    <div>
      <Header userName = {userName} />

      <Content userName = {userName} />
    </div>
  )
}