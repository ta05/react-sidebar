import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Mailbox from "./pages/Mailbox";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/Mailbox" element={<Mailbox />} />
                    <Route exact path="/Analytics" element={<Analytics />} />
                    <Route exact path="/Dashboard" element={<Dashboard />} />
                    <Route exact path="/Friends" element={<Friends />} />
                    <Route exact path="/Images" element={<Images />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
