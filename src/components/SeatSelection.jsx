import React, { useState } from "react";

function SeatSelection({
                           movie,
                           onContinue,
                           onBack,
                           selectedSeatsProp = []
                       }) {

    // ==============================
    // SEAT CONFIGURATION
    // ==============================

    const rows = ["A", "B", "C", "D", "E", "F"];
    const seatsPerRow = 8;

    // Already booked seats
    // These are temporary fixed seats.
    const bookedSeats = ["A3", "A4", "C5", "D2", "F7"];

    const [selectedSeats, setSelectedSeats] = useState(
        Array.isArray(selectedSeatsProp)
            ? selectedSeatsProp
            : []
    );


    // ==============================
    // MOVIE NAME
    // ==============================

    const movieName =
        movie?.name ||
        movie?.movieName ||
        "Movie";


    // ==============================
    // SEAT CLICK
    // ==============================

    const handleSeatClick = (seatNumber) => {

        // Don't allow booked seats
        if (bookedSeats.includes(seatNumber)) {
            return;
        }


        // Remove selected seat
        if (selectedSeats.includes(seatNumber)) {

            setSelectedSeats(
                selectedSeats.filter(
                    (seat) => seat !== seatNumber
                )
            );

        }

        // Add selected seat
        else {

            setSelectedSeats([
                ...selectedSeats,
                seatNumber
            ]);

        }
    };


    // ==============================
    // CONTINUE
    // ==============================

    const handleContinue = () => {

        if (selectedSeats.length === 0) {

            alert(
                "Please select at least one seat."
            );

            return;
        }


        // Send only the array of seats
        onContinue(selectedSeats);
    };


    // ==============================
    // SEAT COMPONENT
    // ==============================

    const renderSeat = (row, number) => {

        const seatNumber = `${row}${number}`;

        const isBooked =
            bookedSeats.includes(seatNumber);

        const isSelected =
            selectedSeats.includes(seatNumber);


        let backgroundColor = "#ffffff";
        let borderColor = "#b9aaa5";
        let color = "#4a3a36";


        // BOOKED
        if (isBooked) {

            backgroundColor = "#d9534f";
            borderColor = "#d9534f";
            color = "#ffffff";

        }

        // SELECTED
        else if (isSelected) {

            backgroundColor = "#e5b84b";
            borderColor = "#c99627";
            color = "#4c3000";

        }


        return (

            <button
                key={seatNumber}
                type="button"
                disabled={isBooked}
                onClick={() =>
                    handleSeatClick(seatNumber)
                }
                title={
                    isBooked
                        ? "Already booked"
                        : `Seat ${seatNumber}`
                }
                style={{
                    width: "42px",
                    height: "38px",
                    margin: "5px",
                    borderRadius:
                        "8px 8px 5px 5px",
                    border:
                        `2px solid ${borderColor}`,
                    backgroundColor:
                    backgroundColor,
                    color: color,
                    fontWeight: "bold",
                    fontSize: "12px",
                    cursor: isBooked
                        ? "not-allowed"
                        : "pointer",
                    transition: "0.2s ease",
                    boxShadow: isSelected
                        ? "0 4px 10px rgba(201,150,39,0.35)"
                        : "none"
                }}
            >
                {number}
            </button>

        );
    };


    // ==============================
    // SCREEN
    // ==============================

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#ffffff",
                padding: "30px 15px 50px"
            }}
        >

            {/* ==============================
                HEADER
            ============================== */}

            <div
                style={{
                    maxWidth: "950px",
                    margin: "0 auto"
                }}
            >

                {/* BACK BUTTON */}

                <button
                    type="button"
                    onClick={onBack}
                    className="btn btn-outline-danger mb-3"
                >
                    ← Back
                </button>


                {/* MOVIE INFORMATION */}

                <div className="text-center mb-4">

                    <h1
                        style={{
                            color: "#65000a",
                            fontWeight: "bold"
                        }}
                    >
                        Select Your Seats
                    </h1>


                    <h4
                        style={{
                            color: "#7d0710"
                        }}
                    >
                        {movieName}
                    </h4>


                    <p
                        style={{
                            color: "#777"
                        }}
                    >
                        🎟 Choose your favourite seats
                    </p>

                </div>


                {/* ==============================
                    SCREEN
                ============================== */}

                <div
                    style={{
                        maxWidth: "650px",
                        margin: "0 auto 45px",
                        textAlign: "center"
                    }}
                >

                    <div
                        style={{
                            height: "12px",
                            borderRadius: "50%",
                            background:
                                "linear-gradient(90deg, transparent, #65000a, transparent)",
                            boxShadow:
                                "0 8px 20px rgba(101,0,10,0.20)"
                        }}
                    />

                    <div
                        style={{
                            marginTop: "10px",
                            color: "#777",
                            fontSize: "13px",
                            letterSpacing: "3px",
                            fontWeight: "bold"
                        }}
                    >
                        SCREEN
                    </div>

                </div>


                {/* ==============================
                    THEATRE
                ============================== */}

                <div
                    style={{
                        background: "#faf5f0",
                        borderRadius: "20px",
                        padding: "30px 15px",
                        border: "1px solid #ead8d0",
                        boxShadow:
                            "0 10px 30px rgba(101,0,10,0.10)",
                        overflowX: "auto"
                    }}
                >

                    {rows.map((row) => (

                        <div
                            key={row}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minWidth: "600px",
                                marginBottom: "8px"
                            }}
                        >

                            {/* ROW LABEL */}

                            <div
                                style={{
                                    width: "30px",
                                    fontWeight: "bold",
                                    color: "#65000a"
                                }}
                            >
                                {row}
                            </div>


                            {/* SEATS */}

                            <div>

                                {Array.from(
                                    {
                                        length:
                                        seatsPerRow
                                    },
                                    (_, index) =>
                                        renderSeat(
                                            row,
                                            index + 1
                                        )
                                )}

                            </div>

                        </div>

                    ))}

                </div>


                {/* ==============================
                    LEGEND
                ============================== */}

                <div
                    className="d-flex justify-content-center flex-wrap gap-4 mt-4"
                >

                    {/* AVAILABLE */}

                    <div>

                        <span
                            style={{
                                display:
                                    "inline-block",
                                width: "18px",
                                height: "18px",
                                background: "#ffffff",
                                border:
                                    "2px solid #b9aaa5",
                                borderRadius: "5px",
                                marginRight: "6px",
                                verticalAlign:
                                    "middle"
                            }}
                        />

                        Available

                    </div>


                    {/* SELECTED */}

                    <div>

                        <span
                            style={{
                                display:
                                    "inline-block",
                                width: "18px",
                                height: "18px",
                                background: "#e5b84b",
                                borderRadius: "5px",
                                marginRight: "6px",
                                verticalAlign:
                                    "middle"
                            }}
                        />

                        Selected

                    </div>


                    {/* BOOKED */}

                    <div>

                        <span
                            style={{
                                display:
                                    "inline-block",
                                width: "18px",
                                height: "18px",
                                background: "#d9534f",
                                borderRadius: "5px",
                                marginRight: "6px",
                                verticalAlign:
                                    "middle"
                            }}
                        />

                        Booked

                    </div>

                </div>


                {/* ==============================
                    SELECTION SUMMARY
                ============================== */}

                <div
                    style={{
                        maxWidth: "650px",
                        margin: "30px auto 0",
                        background: "#fff7ed",
                        border: "1px solid #ead8d0",
                        borderRadius: "15px",
                        padding: "20px"
                    }}
                >

                    <div
                        className="d-flex justify-content-between align-items-center"
                    >

                        {/* SELECTED SEATS */}

                        <div>

                            <div
                                style={{
                                    color: "#777",
                                    fontSize: "13px"
                                }}
                            >
                                SELECTED SEATS
                            </div>


                            <strong
                                style={{
                                    color: "#65000a",
                                    fontSize: "18px"
                                }}
                            >

                                {selectedSeats.length > 0
                                    ? selectedSeats.join(", ")
                                    : "No seats selected"}

                            </strong>

                        </div>


                        {/* SEAT COUNT */}

                        <div className="text-end">

                            <div
                                style={{
                                    color: "#777",
                                    fontSize: "13px"
                                }}
                            >
                                SEATS
                            </div>


                            <strong
                                style={{
                                    color: "#9f0d19",
                                    fontSize: "24px"
                                }}
                            >
                                {selectedSeats.length}
                            </strong>

                        </div>

                    </div>


                    {/* ==============================
                        CONTINUE BUTTON
                    ============================== */}

                    <button
                        type="button"
                        className="btn btn-danger w-100 mt-4 py-2"
                        onClick={handleContinue}
                        style={{
                            borderRadius: "10px",
                            fontWeight: "bold"
                        }}
                    >
                        Continue to Booking →
                    </button>

                </div>

            </div>

        </div>

    );
}

export default SeatSelection;