import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function DigitalTicket({ booking, onDone }) {

    if (!booking) {
        return (
            <div className="container text-center mt-5">
                <h2>No ticket information available.</h2>

                <button
                    className="btn btn-danger mt-3"
                    onClick={onDone}
                >
                    Back to Movies
                </button>
            </div>
        );
    }

    // ==============================
    // BOOKING ID
    // ==============================

    const bookingId = booking.id
        ? `CB${String(booking.id).padStart(6, "0")}`
        : `CB${Date.now().toString().slice(-6)}`;


    // ==============================
    // QR DATA
    // ==============================

    const ticketData = JSON.stringify({
        bookingId: bookingId,
        movie: booking.movieName,
        customer: booking.customerName,
        email: booking.email,
        showTime: booking.showTime,
        seats: booking.seats,
        amount: booking.totalAmount,
        status: "PAID"
    });


    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#ffffff",
                padding: "40px 15px"
            }}
        >

            {/* ==============================
                PAYMENT SUCCESS
            ============================== */}

            <div className="text-center mb-4">

                <div
                    style={{
                        width: "65px",
                        height: "65px",
                        margin: "0 auto 15px",
                        borderRadius: "50%",
                        background: "#e8f7ed",
                        color: "#16803c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "34px",
                        fontWeight: "bold"
                    }}
                >
                    ✓
                </div>


                <h1
                    style={{
                        color: "#65000a",
                        fontWeight: "bold",
                        marginBottom: "5px"
                    }}
                >
                    Booking Confirmed!
                </h1>


                <p className="text-muted">
                    Your movie ticket is ready.
                </p>

            </div>


            {/* ==============================
                DIGITAL TICKET
            ============================== */}

            <div
                style={{
                    maxWidth: "900px",
                    margin: "auto",
                    background: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid #ead8d0",
                    boxShadow:
                        "0 15px 45px rgba(101, 0, 10, 0.15)"
                }}
            >

                {/* ==============================
                    TICKET HEADER
                ============================== */}

                <div
                    style={{
                        background:
                            "linear-gradient(135deg, #9f0d19, #70050c)",
                        color: "white",
                        padding: "25px 30px"
                    }}
                >

                    <div
                        className="d-flex justify-content-between align-items-center"
                    >

                        <div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontWeight: "bold"
                                }}
                            >
                                🎬 CineBook
                            </h2>
                            <div
                                style={{
                                    marginTop: "5px",
                                    opacity: 0.85,
                                    fontSize: "14px",
                                    letterSpacing: "1px"
                                }}
                            >
                                DIGITAL MOVIE TICKET
                            </div>

                        </div>


                        <div
                            style={{
                                fontSize: "42px"
                            }}
                        >
                            🎟️
                        </div>

                    </div>

                </div>


                {/* ==============================
                    MOVIE + QR SECTION
                ============================== */}

                <div
                    style={{
                        padding: "30px"
                    }}
                >

                    <div className="row">

                        {/* ==============================
                            MOVIE DETAILS
                        ============================== */}

                        <div className="col-md-8">

                            <div
                                style={{
                                    color: "#777",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    letterSpacing: "1px"
                                }}
                            >
                                MOVIE
                            </div>


                            <h1
                                style={{
                                    color: "#65000a",
                                    fontWeight: "bold",
                                    marginTop: "5px",
                                    marginBottom: "25px"
                                }}
                            >
                                {booking.movieName}
                            </h1>


                            <div className="row">

                                {/* CUSTOMER */}

                                <div className="col-sm-6 mb-4">

                                    <div className="text-muted small">
                                        CUSTOMER
                                    </div>

                                    <strong>
                                        {booking.customerName}
                                    </strong>

                                </div>


                                {/* EMAIL */}

                                <div className="col-sm-6 mb-4">

                                    <div className="text-muted small">
                                        EMAIL
                                    </div>

                                    <strong>
                                        {booking.email || "Not available"}
                                    </strong>

                                </div>


                                {/* SHOW TIME */}

                                <div className="col-sm-6 mb-4">

                                    <div className="text-muted small">
                                        SHOW TIME
                                    </div>

                                    <strong>
                                        🕐 {booking.showTime}
                                    </strong>

                                </div>


                                {/* SEATS */}

                                <div className="col-sm-6 mb-4">

                                    <div className="text-muted small">
                                        SEATS
                                    </div>

                                    <strong>
                                        🪑 {booking.seats}
                                    </strong>
                                </div>

                            </div>


                            {/* ==============================
                                PAYMENT DETAILS
                            ============================== */}

                            <div
                                style={{
                                    background: "#fff7ed",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    marginTop: "5px"
                                }}
                            >

                                <div
                                    className="d-flex justify-content-between"
                                >

                                    <span>
                                        Payment Status
                                    </span>

                                    <strong
                                        style={{
                                            color: "#16803c"
                                        }}
                                    >
                                        ✓ PAID
                                    </strong>

                                </div>


                                <hr />


                                <div
                                    className="d-flex justify-content-between align-items-center"
                                >

                                    <strong>
                                        Amount Paid
                                    </strong>

                                    <strong
                                        style={{
                                            color: "#9f0d19",
                                            fontSize: "24px"
                                        }}
                                    >
                                        ₹{booking.totalAmount}
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* ==============================
                            QR CODE
                        ============================== */}

                        <div
                            className="col-md-4 text-center mt-4 mt-md-0"
                            style={{
                                borderLeft: "2px dashed #d8c5bd",
                                paddingLeft: "30px"
                            }}
                        >

                            <h5
                                style={{
                                    color: "#65000a",
                                    fontWeight: "bold"
                                }}
                            >
                                Entry QR
                            </h5>


                            <p
                                className="text-muted"
                                style={{
                                    fontSize: "13px"
                                }}
                            >
                                Scan this QR code
                                to verify your ticket.
                            </p>


                            <div
                                style={{
                                    display: "inline-block",
                                    background: "white",
                                    padding: "12px",
                                    borderRadius: "12px",
                                    border: "1px solid #eee"
                                }}
                            >

                                <QRCodeCanvas
                                    value={ticketData}
                                    size={180}
                                    level="H"
                                />

                            </div>
                            <div
                                style={{
                                    marginTop: "12px",
                                    fontSize: "13px",
                                    color: "#777"
                                }}
                            >
                                Show this QR at the theatre entrance.
                            </div>

                        </div>

                    </div>

                </div>


                {/* ==============================
                    TICKET DIVIDER
                ============================== */}

                <div
                    style={{
                        borderTop: "2px dashed #d8c5bd",
                        position: "relative"
                    }}
                >

                    {/* LEFT CUTOUT */}

                    <div
                        style={{
                            position: "absolute",
                            left: "-12px",
                            top: "-12px",
                            width: "24px",
                            height: "24px",
                            background: "#ffffff",
                            borderRight: "1px solid #ead8d0",
                            borderRadius: "50%"
                        }}
                    />


                    {/* RIGHT CUTOUT */}

                    <div
                        style={{
                            position: "absolute",
                            right: "-12px",
                            top: "-12px",
                            width: "24px",
                            height: "24px",
                            background: "#ffffff",
                            borderLeft: "1px solid #ead8d0",
                            borderRadius: "50%"
                        }}
                    />

                </div>


                {/* ==============================
                    THEATRE ENTRY INSTRUCTIONS
                ============================== */}

                <div
                    style={{
                        background: "#fff7ed",
                        borderTop: "1px solid #ead8d0",
                        borderBottom: "1px solid #ead8d0",
                        padding: "20px 30px",
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            color: "#65000a",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "8px"
                        }}
                    >
                        🎬 Theatre Entry Instructions
                    </div>


                    <div
                        style={{
                            color: "#5e4c49",
                            fontSize: "14px",
                            lineHeight: "1.7"
                        }}
                    >

                        Please arrive at the theatre
                        before the show starts.

                        <br />

                        Keep your QR code ready
                        and show it at the entrance
                        for verification.

                    </div>

                </div>


                {/* ==============================
                    TICKET FOOTER
                ============================== */}

                <div
                    style={{
                        padding: "20px 30px",
                        background: "#faf5f0"
                    }}
                >

                    <div className="row align-items-center">

                        {/* BOOKING ID */}

                        <div className="col-md-6">
                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "#777"
                                }}
                            >
                                BOOKING ID
                            </div>


                            <strong
                                style={{
                                    color: "#65000a",
                                    fontSize: "18px"
                                }}
                            >
                                {bookingId}
                            </strong>

                        </div>


                        {/* PAYMENT STATUS */}

                        <div
                            className="col-md-6 text-md-end mt-3 mt-md-0"
                        >

                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#e8f7ed",
                                    color: "#16803c",
                                    padding: "7px 14px",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                    fontSize: "13px"
                                }}
                            >
                                ✓ PAYMENT SUCCESSFUL
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* ==============================
                BACK TO MOVIES
            ============================== */}

            <div className="text-center mt-4">

                <button
                    className="btn btn-danger px-5 py-2"
                    onClick={onDone}
                    style={{
                        borderRadius: "10px",
                        fontWeight: "bold"
                    }}
                >
                    🎬 Back to Movies
                </button>

            </div>

        </div>
    );
}

export default DigitalTicket;