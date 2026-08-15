import { useEffect, useState } from "react";
import { updateMovie } from "../services/MovieService";

function MovieForm({
                       onBookingSuccess,
                       selectedMovie,
                       userEmail,
                       selectedSeats,
                       onProceedToPayment,
                       onBookingCreated,
                       onBack
                   }) {

    const [customerName, setCustomerName] =
        useState("");

    const [movieName, setMovieName] =
        useState("");

    const [showTime, setShowTime] =
        useState("");

    const [seats, setSeats] =
        useState("");

    const [ticketPrice, setTicketPrice] =
        useState("");


    // ==============================
    // TOTAL AMOUNT
    // ==============================

    const totalAmount =
        Number(seats || 0) *
        Number(ticketPrice || 0);


    // ==============================
    // LOAD SELECTED MOVIE
    // ==============================

    useEffect(() => {

        if (selectedMovie) {

            setCustomerName(
                selectedMovie.customerName || ""
            );


            /*
             * MovieCards uses movie.name.
             * Existing bookings may use movieName.
             *
             * So support both.
             */

            setMovieName(
                selectedMovie.movieName ||
                selectedMovie.name ||
                ""
            );


            setShowTime(
                selectedMovie.showTime || ""
            );


            if (selectedMovie.seats) {

                setSeats(
                    selectedMovie.seats
                );
            }

        }

    }, [selectedMovie]);


    // ==============================
    // LOAD SELECTED SEATS
    // ==============================

    useEffect(() => {

        if (
            selectedSeats &&
            selectedSeats.length > 0
        ) {

            setSeats(
                selectedSeats.length
            );
        }

    }, [selectedSeats]);


    // ==============================
    // TICKET PRICE
    // ==============================

    useEffect(() => {

        switch (movieName) {

            case "Avatar:Fire And Ash":

                setTicketPrice(
                    showTime === "7:30 PM"
                        ? 300
                        : 250
                );

                break;


            case "Alpha":

                setTicketPrice(220);

                break;


            case "Spiderman:Brand New Day":

                setTicketPrice(280);

                break;


            case "Peddi":

                setTicketPrice(230);

                break;


            case "Pushpa 2":

                setTicketPrice(250);

                break;


            case "Kalki 2898 AD":

                setTicketPrice(280);

                break;


            default:

                setTicketPrice("");

        }

    }, [movieName, showTime]);


    // ==============================
    // CLEAR FORM
    // ==============================

    const clearForm = () => {

        setCustomerName("");

        setMovieName("");

        setShowTime("");

        setSeats("");

        setTicketPrice("");
    };


    // ==============================
    // BOOKING
    // ==============================

    const handleBooking = (e) => {

        e.preventDefault();


        // CUSTOMER NAME

        if (
            customerName.trim() === ""
        ) {

            alert(
                "Please enter Customer Name."
            );

            return;
        }


        // MOVIE

        if (movieName === "") {

            alert(
                "Please select a Movie."
            );

            return;
        }


        // SHOW TIME

        if (showTime === "") {

            alert(
                "Please select Show Time."
            );

            return;
        }


        // SEATS

        if (
            !selectedSeats ||
            selectedSeats.length === 0
        ) {

            alert(
                "Please select seats first."
            );

            return;
        }


        // ==============================
        // BOOKING OBJECT
        // ==============================

        const bookingData = {

            customerName:
                customerName.trim(),

            email:
                userEmail || "",

            movieName:
            movieName,

            showTime:
            showTime,

            seats:
                Number(seats),

            selectedSeats:
            selectedSeats,

            ticketPrice:
                Number(ticketPrice),

            totalAmount:
                Number(totalAmount)
        };


        console.log(
            "Booking data:",
            bookingData
        );


        // ==============================
        // UPDATE EXISTING BOOKING
        // ==============================

        if (selectedMovie?.id) {

            updateMovie(
                selectedMovie.id,
                bookingData,
                userEmail || selectedMovie.email || "",
                "admin"
            )

                .then(() => {

                    alert(
                        "Booking Updated Successfully!"
                    );

                    clearForm();

                    if (onBookingSuccess) {
                        onBookingSuccess();
                    }

                })

                .catch((error) => {

                    console.error(
                        "Error updating booking:",
                        error
                    );

                    console.error(
                        "Backend response:",
                        error.response?.data
                    );

                    alert(
                        "Unable to update booking. Please try again."
                    );

                });

            return;
        }
        // ==============================
        // NEW BOOKING
        // ==============================

        if (onBookingCreated) {

            onBookingCreated(
                bookingData
            );

        } else if (
            onProceedToPayment
        ) {

            onProceedToPayment(
                bookingData
            );

        }

    };


    // ==============================
    // FORM
    // ==============================

    return (

        <div className="card shadow p-4 mb-4">

            <h2
                className="text-center text-success mb-4"
            >
                🎟 Movie Ticket Booking
            </h2>


            <form
                onSubmit={handleBooking}
            >


                {/* ==============================
                    CUSTOMER NAME
                ============================== */}

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) =>
                        setCustomerName(
                            e.target.value
                        )
                    }
                />


                {/* ==============================
                    MOVIE
                ============================== */}

                <select
                    className="form-select mb-3"
                    value={movieName}
                    onChange={(e) =>
                        setMovieName(
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Select Movie
                    </option>


                    <option value="Avatar:Fire And Ash">
                        Avatar: Fire And Ash
                    </option>


                    <option value="Alpha">
                        Alpha
                    </option>


                    <option value="Spiderman:Brand New Day">
                        Spider-Man: Brand New Day
                    </option>


                    <option value="Peddi">
                        Peddi
                    </option>


                    <option value="Pushpa 2">
                        Pushpa 2
                    </option>


                    <option value="Kalki 2898 AD">
                        Kalki 2898 AD
                    </option>

                </select>


                {/* ==============================
                    SHOW TIME
                ============================== */}

                <select
                    className="form-select mb-3"
                    value={showTime}
                    onChange={(e) =>
                        setShowTime(
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Select Show Time
                    </option>


                    <option value="10:00 AM">
                        10:00 AM
                    </option>


                    <option value="1:30 PM">
                        1:30 PM
                    </option>


                    <option value="4:30 PM">
                        4:30 PM
                    </option>


                    <option value="7:30 PM">
                        7:30 PM
                    </option>


                    <option value="10:30 PM">
                        10:30 PM
                    </option>

                </select>


                {/* ==============================
                    SELECTED SEATS
                ============================== */}

                {selectedSeats &&
                    selectedSeats.length > 0 && (

                        <div
                            className="alert alert-warning"
                        >

                            <strong>
                                Selected Seats:
                            </strong>{" "}

                            {selectedSeats.join(
                                ", "
                            )}

                        </div>

                    )}


                {/* ==============================
                    NUMBER OF SEATS
                ============================== */}

                <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Seats"
                    min="1"
                    max="10"
                    value={seats}
                    readOnly
                />


                {/* ==============================
                    TICKET PRICE
                ============================== */}

                <input
                    type="number"
                    className="form-control mb-3"
                    value={ticketPrice}
                    readOnly
                />


                {/* ==============================
                    TOTAL AMOUNT
                ============================== */}

                <div
                    className="alert alert-info"
                >

                    <strong>
                        Total Amount: ₹ {totalAmount}
                    </strong>

                </div>


                {/* ==============================
                    BACK BUTTON
                ============================== */}

                {onBack && (

                    <button
                        type="button"
                        className="btn btn-outline-danger w-100 mb-2"
                        onClick={onBack}
                    >
                        ← Back to Seat Selection
                    </button>

                )}


                {/* ==============================
                    PAYMENT BUTTON
                ============================== */}

                <button
                    type="submit"
                    className={
                        selectedMovie?.id
                            ? "btn btn-warning w-100"
                            : "btn btn-primary w-100"
                    }
                >

                    {selectedMovie?.id
                        ? "Update Booking"
                        : "Proceed to Payment →"}

                </button>

            </form>

        </div>
    );
}

export default MovieForm;