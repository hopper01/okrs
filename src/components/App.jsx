import React from 'react'
import Container from "./Container"
import Header from "./Header";

const App = () => {
  return (
    <div className="wrapper">
      <header className="head">
        <Header />
      </header>
      <main className="body-main">
        <Container />
      </main>
    </div>
  )
}

export default App
