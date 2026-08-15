import { useEffect, useState } from "react";
import {
    getAllMovies,
    deleteMovie,
    searchByCustomerName
} from "../services/MovieService";

function MovieList({ refresh, setSelectedMovie }) {

    const [movies, setMovies] = useState([]);
    const [customerName, setCustomerName] = useState("");

    const loadMovies = async () => {

        try {

            const response = await getAllMovies();

            setMovies(response.data);

        } catch (error) {

            console.error(
                "Error fetching movies:",
                error
            );

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this booking?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteMovie(id,
                "",
                "admin");

            alert(
                "Booking Deleted Successfully!"
            );

            loadMovies();

        } catch (error) {

            console.error(
                "Error deleting booking:",
                error
            );

        }

    };


    const handleSearch = async () => {

        try {

            const response =
                await searchByCustomerName(customerName);

            setMovies(response.data);

        } catch (error) {

            console.error(
                "Error searching booking:",
                error
            );

        }

    };


    const handleShowAll = async () => {

        loadMovies();

        setCustomerName("");

    };


    useEffect(() => {

        loadMovies();

    }, [refresh]);


    return (

        <div>

            {/* Search Area */}

            <div
                style={{
                    marginBottom: "20px"
                }}
            >

                <input
                    type="text"
                    placeholder="Search by Customer Name"
                    value={customerName}
                    onChange={(e) =>
                        setCustomerName(e.target.value)
                    }
                />

                {" "}

                <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    🔍 Search
                </button>

                {" "}

                <button
                    className="btn btn-warning"
                    onClick={handleShowAll}
                >
                    📋 Show All
                </button>

            </div>


            {/* Heading */}

            <h2
                className="text-center mb-4"
                style={{
                    color: "#7d0710",
                    fontWeight: "800"
                }}
            >
                🎬 Movie Bookings
            </h2>


            {/* Booking Table */}

            <div className="table-responsive">

                <table
                    className="table table-bordered table-hover table-striped"
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

                        <th>
                            Customer Name
                        </th>

                        <th>
                            Movie Name
                        </th>

                        <th>
                            Show Time
                        </th>

                        <th>
                            Seats
                        </th>

                        <th>
                            Ticket Price
                        </th>
                        <th>
                            Total Amount
                        </th>

                        <th>
                            Action
                        </th>

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
                                {movie.customerName}
                            </td>


                            <td
                                style={{
                                    fontWeight: "600"
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

                                {/* Update */}

                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                        setSelectedMovie(movie)
                                    }
                                >
                                    ✏ Update
                                </button>

                                {" "}

                                {/* Delete */}

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                        handleDelete(movie.id)
                                    }
                                >
                                    🗑 Delete
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

export default MovieList;