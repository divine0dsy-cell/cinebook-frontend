import avatar from "../assets/avatarfireash.webp";
import alpha from "../assets/alpha.webp";
import spiderman from "../assets/spiderman.jpg";
import peddi from "../assets/peddi.webp";
import pushpa2 from "../assets/pushpa2.jpg";
import kalki from "../assets/kalki.jpg";

function MovieCards({ onSelectMovie }) {

    const movies = [
        {
            name: "Avatar:Fire And Ash",
            image: avatar,
            rating: "⭐ 4.9",
            price: "₹200 onwards"
        },
        {
            name: "Alpha",
            image: alpha,
            rating: "⭐ 4.6",
            price: "₹220 onwards"
        },
        {
            name: "Spiderman:Brand New Day",
            image: spiderman,
            rating: "⭐ 4.8",
            price: "₹250 onwards"
        },
        {
            name: "Peddi",
            image: peddi,
            rating: "⭐ 4.7",
            price: "₹230 onwards"
        },
        {
            name: "Pushpa 2",
            image: pushpa2,
            rating: "⭐ 4.9",
            price: "₹250 onwards"
        },
        {
            name: "Kalki 2898 AD",
            image: kalki,
            rating: "⭐ 4.8",
            price: "₹280 onwards"
        }
    ];


    return (

        <div className="container mb-5">

            {/* SECTION HEADING */}

            <div className="text-center mb-4">

                <h2
                    className="mb-2"
                    style={{
                        color: "#7d0710",
                        fontWeight: "800"
                    }}
                >
                    🎬 Now Showing
                </h2>

                <p
                    style={{
                        color: "#665555",
                        marginBottom: "0"
                    }}
                >
                    Choose your movie and book your favourite seats
                </p>

                <div
                    style={{
                        color: "#d9a441",
                        letterSpacing: "5px",
                        marginTop: "5px"
                    }}
                >
                    ★ ★ ★
                </div>

            </div>


            {/* MOVIE GRID */}

            <div className="row">

                {movies.map((movie, index) => (

                    <div
                        className="col-md-4 mb-4"
                        key={index}
                    >

                        <div
                            className="card shadow-ig h-100"
                            style={{
                                border: "4px solid #7d0710",
                                background: "#fffdf9"
                            }}
                        >

                            {/* POSTER */}

                            <img
                                src={movie.image}
                                alt={movie.name}
                                style={{
                                    height: "400px",
                                    objectFit: "cover"
                                }}
                            />


                            {/* MOVIE DETAILS */}

                            <div className="card-body text-center">

                                <h5
                                    className="fw-bold"
                                    style={{
                                        color: "#65000a"
                                    }}
                                >
                                    {movie.name}
                                </h5>


                                <p
                                    style={{
                                        color: "#d9a441",
                                        fontWeight: "600",
                                        marginBottom: "8px"
                                    }}
                                >
                                    {movie.rating}
                                </p>


                                <p
                                    style={{
                                        color: "#665555",
                                        fontWeight: "600"
                                    }}
                                >
                                    {movie.price}
                                </p>


                                {/* BOOK BUTTON */}

                                <button
                                    type="button"
                                    className="btn btn-danger w-100"
                                    onClick={() =>
                                        onSelectMovie(movie)
                                    }
                                >
                                    🎟 Book Now
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default MovieCards;