import React from 'react';
import './App.css';
import MainContainer from "./main/MainContainer";
import HistoryContainer from "./history/HistoryContainer";
import {Route} from "react-router-dom";
import NavBar from "./NavBar/NavBar";


function App() {
    return (

        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <NavBar/>
                        </div>
                    </div>
                </div>
            </header>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <Route exact path={'/main'} render={() => <MainContainer/>}/>
                        <Route exact path={'/history'} render={() => <HistoryContainer/>}/>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
