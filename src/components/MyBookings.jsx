import { useEffect, useState } from "react";

import {
    getBookingsByEmail
} from "../services/MovieService";

function MyBookings({
                        userEmail,
                        refresh,
                        setSelectedMovie,
                        setSelectedSeats
                    }) {

    const [movies, setMovies] = useState([]);


    // ==============================
    // LOAD CUSTOMER BOOKINGS
    // ==============================

    const loadBookings = async () => {

        try {

            const response =
                await getBookingsByEmail(userEmail);

            setMovies(response.data);

        } catch (error) {

            console.error(
                "Error loading bookings:",
                error
            );

        }

    };


    useEffect(() => {

        if (userEmail) {
            loadBookings();
        }

    }, [refresh, userEmail]);


    // ==============================
    // UPDATE BOOKING
    // ==============================

    const handleUpdate = (movie) => {

        // Save complete booking
        setSelectedMovie(movie);


        // Convert saved seat string
        // "A1,A2,B3"
        // into:
        // ["A1","A2","B3"]

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

        // Scroll to booking section
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


    return (

        <div className="mt-5">

            {/* Heading */}

            <h2
                className="text-center mb-4"
                style={{
                    color: "#7d0710",
                    fontWeight: "800"
                }}
            >
                🎟 My Bookings
            </h2>


            {/* Table */}

            <div className="table-responsive">

                <table
                    className="table table-bordered table-striped"
                    style={{
                        borderRadius: "12px",
                        overflow: "hidden"
                    }}
                >

                    <thead
                        style={{
                            background:
                                "linear-gradient(135deg, #9f0d19, #70050c)",
                            color: "white"
                        }}
                    >

                    <tr>

                        <th>ID</th>

                        <th>Movie</th>

                        <th>Show Time</th>

                        <th>Seats</th>

                        <th>Ticket Price</th>

                        <th>Total Amount</th>

                        <th>Action</th>

                    </tr>

                    </thead>


                    <tbody>

                    {movies.map((movie) => (

                        <tr key={movie.id}>

                            <td>
                                {movie.id}
                            </td>


                            <td
                                style={{
                                    fontWeight: "600",
                                    color: "#65000a"
                                }}
                            >
                                {movie.movieName}
                            </td>


                            <td>
                                {movie.showTime}
                            </td>


                            <td>
                                {movie.seats}
                            </td>

                            <td>
                                ₹ {movie.ticketPrice}
                            </td>


                            <td
                                style={{
                                    fontWeight: "700",
                                    color: "#7d0710"
                                }}
                            >
                                ₹ {movie.totalAmount}
                            </td>


                            <td>

                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                        handleUpdate(movie)
                                    }
                                >
                                    ✏ Update
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default MyBookings;