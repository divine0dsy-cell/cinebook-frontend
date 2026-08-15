import React, { useState } from "react";

import MovieCards from "./MovieCards";
import MovieForm from "./MovieForm";
import MyBookings from "./MyBookings";
import SeatSelection from "./SeatSelection";
import Payment from "./Payment";
import Ticket from "./Ticket";

function CustomerDashboard({
                               refresh,
                               refreshMovies,
                               selectedMovie,
                               setSelectedMovie,
                               userEmail,
                               formRef,
                               onLogout
                           }) {

    const [showSeatSelection, setShowSeatSelection] =
        useState(false);

    const [selectedSeats, setSelectedSeats] =
        useState([]);

    const [showPayment, setShowPayment] =
        useState(false);

    const [showTicket, setShowTicket] =
        useState(false);

    const [bookingDetails, setBookingDetails] =
        useState(null);


    // ==============================
    // MOVIE SELECT
    // ==============================

    const handleMovieSelect = (movie) => {

        setSelectedMovie(movie);

        setSelectedSeats([]);

        setShowSeatSelection(true);
    };


    // ==============================
    // UPDATE EXISTING BOOKING
    // ==============================

    const handleUpdateBooking = (movie) => {

        setSelectedMovie(movie);

        if (movie.seatNumbers) {

            const seats =
                movie.seatNumbers
                    .split(",")
                    .map((seat) => seat.trim())
                    .filter(Boolean);

            setSelectedSeats(seats);

        } else {

            setSelectedSeats([]);

        }

        setShowSeatSelection(true);
    };


    // ==============================
    // SEAT CONTINUE
    // ==============================

    const handleSeatContinue = (seatData) => {

        setSelectedSeats(seatData);

        setShowSeatSelection(false);

        setTimeout(() => {

            const form =
                document.getElementById(
                    "movie-booking-form"
                );

            if (form) {

                form.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 100);

    };


    // ==============================
    // PROCEED TO PAYMENT
    // ==============================

    const handleProceedToPayment = (details) => {

        setBookingDetails(details);

        setShowPayment(true);
    };


    // ==============================
    // PAYMENT SUCCESS
    // ==============================

    const handlePaymentSuccess = (savedBooking) => {

        setBookingDetails(savedBooking);

        setShowPayment(false);

        setShowTicket(true);

        refreshMovies();
    };


    // ==============================
    // PAYMENT BACK
    // ==============================

    const handlePaymentBack = () => {

        setShowPayment(false);
    };


    // ==============================
    // TICKET HOME
    // ==============================

    const handleTicketHome = () => {

        setShowTicket(false);

        setSelectedMovie(null);

        setSelectedSeats([]);

        setBookingDetails(null);

        refreshMovies();
    };


    // ==============================
    // DIGITAL TICKET
    // ==============================

    if (showTicket && bookingDetails) {

        return (
            <Ticket
                booking={bookingDetails}
                selectedSeats={selectedSeats}
                onHome={handleTicketHome}
            />
        );
    }


    // ==============================
    // PAYMENT
    // ==============================

    if (showPayment && bookingDetails) {

        return (
            <Payment
                booking={bookingDetails}
                selectedSeats={selectedSeats}
                onPaymentSuccess={handlePaymentSuccess}
                onBack={handlePaymentBack}
            />
        );
    }


    // ==============================
    // SEAT SELECTION
    // ==============================

    if (showSeatSelection) {

        return (
            <SeatSelection
                movie={selectedMovie}
                selectedSeats={selectedSeats}
                onContinue={handleSeatContinue}
                onBack={() => {

                    setShowSeatSelection(false);

                    setSelectedSeats([]);

                }}
            />
        );
    }


    // ==============================
    // CUSTOMER DASHBOARD
    // ==============================

    return (

        <div className="customer-page">

            {/* ==============================
                CUSTOMER DASHBOARD BACKGROUND
                ============================== */}

            <div className="customer-dashboard-page">
                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2
                        className="text-danger mb-0"
                    >
                        🎬 CineBook
                    </h2>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onLogout}
                    >
                        🚪 Logout
                    </button>

                </div>

                {/* ==============================
                    MOVIE SECTION
                    ============================== */}

                <div className="movie-section">

                    <MovieCards
                        onSelectMovie={handleMovieSelect}
                    />

                </div>


                {/* ==============================
                    BOOKING FORM
                    ============================== */}

                <div
                    id="movie-booking-form"
                    ref={formRef}
                >

                    <MovieForm
                        onBookingSuccess={refreshMovies}
                        selectedMovie={selectedMovie}
                        userEmail={userEmail}
                        selectedSeats={selectedSeats}
                        onProceedToPayment={
                            handleProceedToPayment
                        }
                    />

                </div>


                {/* ==============================
                    MY BOOKINGS
                    ============================== */}

                <MyBookings
                    refresh={refresh}
                    userEmail={userEmail}
                    setSelectedMovie={handleUpdateBooking}
                    setSelectedSeats={setSelectedSeats}
                />

            </div>

        </div>
    );
}

export default CustomerDashboard;