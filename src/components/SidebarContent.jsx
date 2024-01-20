import React from "react";
import {
    Home,
    Mail,
    Assessment,
    Dashboard,
    Group,
    PermMedia,
} from "@mui/icons-material";

export default function SidebarContent() {
    return [
        { title: "Home", icon: <Home />, link: "/home" },
        { title: "Mailbox", icon: <Mail />, link: "/mailbox" },
        { title: "Analytics", icon: <Assessment />, link: "/analytics" },
        { title: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
        { title: "Friends", icon: <Group />, link: "/friends" },
        { title: "Images", icon: <PermMedia />, link: "/images" },
    ];
}
