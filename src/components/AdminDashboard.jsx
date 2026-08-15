import MovieList from "./MovieList";

function AdminDashboard({
                            refresh,
                            setSelectedMovie,
                            onLogout
                        }) {

    return (

        <div className="admin-page">

            {/* ==============================
                ADMIN HEADER
            ============================== */}

            <div
                className="d-flex justify-content-between align-items-center mb-4"
            >

                <h2
                    className="text-danger mb-0"
                >
                    👨‍💼 Admin Dashboard
                </h2>


                {/* LOGOUT BUTTON */}

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={onLogout}
                >
                    🚪 Logout
                </button>

            </div>


            {/* ==============================
                ALL BOOKINGS
            ============================== */}

            <MovieList
                refresh={refresh}
                setSelectedMovie={setSelectedMovie}
            />

        </div>

    );

}

export default AdminDashboard;