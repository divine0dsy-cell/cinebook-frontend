import React, { useEffect, useState } from "react";
import axios from "axios";

function PublicTicket({ bookingId }) {

    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchBooking = async () => {

            try {

                const response = await axios.get(
                    `https://cinebook-backend-doxe.onrender.com/movies/${bookingId}`
            );

                setBooking(response.data);
                setLoading(false);

            } catch (error) {

                console.error("Error loading ticket:", error);

                setError("Ticket could not be found.");
                setLoading(false);

            }

        };

        fetchBooking();

    }, [bookingId]);


    if (loading) {

        return (
            <div className="text-center mt-5">

                <h2>Loading ticket...</h2>

            </div>
        );

    }


    if (error || !booking) {

        return (
            <div className="text-center mt-5">

                <h2>❌ Ticket Not Found</h2>

                <p>
                    This ticket does not exist or could not be loaded.
                </p>

            </div>
        );

    }


    const bookingIdText =
        `CB${String(booking.id).padStart(6, "0")}`;


    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#ffffff",
                padding: "40px 15px"
            }}
        >

            <div className="text-center mb-4">

                <div
                    style={{
                        fontSize: "50px"
                    }}
                >
                    🎟️
                </div>

                <h1
                    style={{
                        color: "#65000a",
                        fontWeight: "bold"
                    }}
                >
                    CineBook Ticket
                </h1>

                <p className="text-muted">
                    Ticket verified successfully
                </p>

            </div>


            <div
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    background: "white",
                    borderRadius: "18px",
                    border: "1px solid #ead8d0",
                    boxShadow:
                        "0 15px 45px rgba(101, 0, 10, 0.15)",
                    overflow: "hidden"
                }}
            >

                <div
                    style={{
                        background:
                            "linear-gradient(135deg, #9f0d19, #70050c)",
                        color: "white",
                        padding: "25px"
                    }}
                >

                    <h2 style={{ margin: 0 }}>
                        🎬 CineBook
                    </h2>

                    <div style={{ marginTop: "5px" }}>
                        DIGITAL MOVIE TICKET
                    </div>

                </div>


                <div style={{ padding: "30px" }}>

                    <div
                        style={{
                            color: "#777",
                            fontSize: "12px",
                            fontWeight: "bold"
                        }}
                    >
                        MOVIE
                    </div>

                    <h1
                        style={{
                            color: "#65000a",
                            fontWeight: "bold"
                        }}
                    >
                        {booking.movieName}
                    </h1>


                    <hr />


                    <div className="row">

                        <div className="col-sm-6 mb-3">

                            <div className="text-muted small">
                                CUSTOMER
                            </div>
                            <strong>
                                {booking.customerName}
                            </strong>

                        </div>


                        <div className="col-sm-6 mb-3">

                            <div className="text-muted small">
                                EMAIL
                            </div>

                            <strong>
                                {booking.email || "Not available"}
                            </strong>

                        </div>


                        <div className="col-sm-6 mb-3">

                            <div className="text-muted small">
                                SHOW TIME
                            </div>

                            <strong>
                                🕐 {booking.showTime}
                            </strong>

                        </div>


                        <div className="col-sm-6 mb-3">

                            <div className="text-muted small">
                                SEATS
                            </div>

                            <strong>
                                🪑 {booking.seats}
                            </strong>

                        </div>

                    </div>


                    <div
                        style={{
                            background: "#fff7ed",
                            borderRadius: "12px",
                            padding: "18px",
                            marginTop: "10px"
                        }}
                    >

                        <div className="d-flex justify-content-between">

                            <strong>
                                Booking ID
                            </strong>

                            <strong
                                style={{
                                    color: "#65000a"
                                }}
                            >
                                {bookingIdText}
                            </strong>

                        </div>


                        <hr />


                        <div className="d-flex justify-content-between">

                            <strong>
                                Payment Status
                            </strong>

                            <strong
                                style={{
                                    color: "#16803c"
                                }}
                            >
                                ✓ PAID
                            </strong>

                        </div>


                        <hr />


                        <div className="d-flex justify-content-between">

                            <strong>
                                Amount Paid
                            </strong>

                            <strong
                                style={{
                                    color: "#9f0d19",
                                    fontSize: "22px"
                                }}
                            >
                                ₹{booking.totalAmount}
                            </strong>

                        </div>

                    </div>


                    <div
                        className="text-center"
                        style={{
                            marginTop: "25px",
                            color: "#16803c",
                            fontWeight: "bold"
                        }}
                    >
                        ✓ TICKET VERIFIED
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PublicTicket;