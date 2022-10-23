import './App.css';
import React from "react";
import StaticContext from "./context/StaticContext";
import {Route} from "wouter"
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults";
import Detail from "./pages/detail/Detail";
import {GifsContextProvider} from "./context/GifsContext";

function App() {
    return (
        <StaticContext.Provider value={
            {name: 'LOKI', nice: true}
        }>
            <div className="App">
                <nav className="Navbar">
                      <h1>GIFS</h1>
                </nav>
              <section className="App-content">
                  <GifsContextProvider>
                      <Route component={Home} path="/"/>
                      <Route component={SearchResults} path="/search/:keyword"/>
                      <Route component={Detail} path="/detail/:id"/>
                  </GifsContextProvider>
              </section>
            </div>
        </StaticContext.Provider>
  );
}

export default App;
