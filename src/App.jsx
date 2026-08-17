import PublicTicket from "./components/PublicTicket.jsx";
import React, { useRef, useState } from "react";
import Login from "./components/Login";
import CustomerDashboard from "./components/CustomerDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
    // ==============================
    // PUBLIC QR TICKET
    // ==============================

    const ticketPath = window.location.pathname;

    if (ticketPath.startsWith("/ticket/")) {

        const bookingId = ticketPath.split("/")[2];

        return (
            <PublicTicket
                bookingId={bookingId}
            />
        );

    }
    // ==============================
    // LOGIN STATE
    // ==============================

    const [user, setUser] = useState(null);


    // ==============================
    // MOVIE STATE
    // ==============================

    const [selectedMovie, setSelectedMovie] = useState(null);


    // ==============================
    // REFRESH STATE
    // ==============================

    const [refresh, setRefresh] = useState(false);


    // ==============================
    // FORM REFERENCE
    // ==============================

    const formRef = useRef(null);


    // ==============================
    // LOGIN
    // ==============================

    const handleLogin = (loggedInUser) => {

        console.log("Logged in user:", loggedInUser);

        setUser(loggedInUser);

        setSelectedMovie(null);

    };


    // ==============================
    // LOGOUT
    // ==============================

    const handleLogout = () => {

        setUser(null);

        setSelectedMovie(null);

    };


    // ==============================
    // REFRESH MOVIES
    // ==============================

    const refreshMovies = () => {

        setRefresh((previous) => !previous);

    };


    // ==============================
    // LOGIN SCREEN
    // ==============================

    if (!user) {

        return (
            <Login
                onLogin={handleLogin}
            />
        );

    }


    // ==============================
    // ADMIN DASHBOARD
    // ==============================

    if (user.role === "admin") {

        return (

            <AdminDashboard
                refresh={refresh}
                setSelectedMovie={setSelectedMovie}
                onLogout={handleLogout}
            />

        );

    }


    // ==============================
    // CUSTOMER DASHBOARD
    // ==============================

    return (

        <CustomerDashboard
            refresh={refresh}
            refreshMovies={refreshMovies}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            userEmail={user.email}
            formRef={formRef}
            onLogout={handleLogout}
        />

    );

}

export default App;