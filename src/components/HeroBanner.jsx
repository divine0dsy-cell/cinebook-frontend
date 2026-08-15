function HeroBanner() {
    return (
        <div
            className="text-white text-center p-5 mb-5 rounded"
            style={{
                background: "linear-gradient(to right, #000000, #434343)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)"
            }}
        >
            <h1 className="display-4">🍿 Welcome to MovieZone</h1>

            <p className="lead">
                Book your favourite movie tickets in just a few clicks.
            </p>

            <h4 className="text-warning">
                🎬 Now Showing • Fast Booking • Best Experience
            </h4>
        </div>
    );
}

export default HeroBanner;
