function Ticket({
                    booking,
                    selectedSeats,
                    onHome
                }) {

    const bookingId =
        "CB" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    return (

        <div className="ticket-page">

            <div className="ticket-card">

                <h2 className="text-center mb-4">
                    🎉 Payment Successful
                </h2>

                <div className="success-mark">
                    ✅
                </div>

                <h3 className="text-center">
                    CineBook Digital Ticket
                </h3>

                <hr />

                <div className="ticket-row">
                    <span>Booking ID</span>
                    <strong>{bookingId}</strong>
                </div>

                <div className="ticket-row">
                    <span>Movie</span>
                    <strong>{booking.movieName}</strong>
                </div>

                <div className="ticket-row">
                    <span>Customer</span>
                    <strong>{booking.customerName}</strong>
                </div>

                <div className="ticket-row">
                    <span>Show Time</span>
                    <strong>{booking.showTime}</strong>
                </div>

                <div className="ticket-row">
                    <span>Seats</span>
                    <strong>
                        {selectedSeats.join(", ")}
                    </strong>
                </div>

                <div className="ticket-row">
                    <span>Total Amount</span>
                    <strong>
                        ₹{booking.totalAmount}
                    </strong>
                </div>

                <div className="ticket-row">
                    <span>Status</span>
                    <strong className="text-success">
                        PAID
                    </strong>
                </div>

                <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={onHome}
                >
                    Back To Home
                </button>

            </div>

        </div>

    );

}

export default Ticket;