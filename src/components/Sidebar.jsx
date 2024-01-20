import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import SidebarContent from "./SidebarContent";
import { Menu } from "@mui/icons-material";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();
    return (
        <div className={"sidebar" + (isOpen ? "" : " closed")}>
            <div className="hamburger">
                <Menu onClick={toggle} />
            </div>
            <ul className="sidebar-list">
                {SidebarContent().map((val, index) => (
                    <li key={index}>
                        <Link
                            to={val.link}
                            className={
                                "row" +
                                (location.pathname === val.link
                                    ? " active"
                                    : "")
                            }
                        >
                            <div id="icon" className={isOpen ? "" : "closed"}>
                                {val.icon}{" "}
                            </div>
                            <div id="title" className={isOpen ? "" : "closed"}>
                                {val.title}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
