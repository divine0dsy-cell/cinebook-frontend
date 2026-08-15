function Brand({ compact = false }) {
    return (
        <div className="brand">

            <div className={`brand-logo ${compact ? "login-logo" : ""}`}>
                🍿
            </div>

            <div>
                <h1 className="brand-name">
                    Cine<span>Book</span>
                </h1>

                <p className="brand-tagline">
                    Movie Ticket Booking System
                </p>
            </div>

        </div>
    );
}

export default Brand;