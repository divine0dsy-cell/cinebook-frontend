import axios from "axios";

const API_URL =
    "https://cinebook-backend-doxe.onrender.com/movies";


// ==============================
// GET ALL BOOKINGS
// ADMIN
// ==============================

export const getAllMovies = () => {

    return axios.get(
        API_URL
    );

};


// ==============================
// GET BOOKINGS BY EMAIL
// CUSTOMER
// ==============================

export const getBookingsByEmail = (
    email
) => {

    return axios.get(
        `${API_URL}/email/${encodeURIComponent(email)}`
    );

};


// ==============================
// SEARCH BY CUSTOMER NAME
// ADMIN
// ==============================

export const searchByCustomerName = (
    customerName
) => {

    return axios.get(
        `${API_URL}/search`,
        {
            params: {
                customerName: customerName
            }
        }
    );

};


// ==============================
// ADD BOOKING
// ==============================

export const addBooking = (
    booking
) => {

    return axios.post(
        API_URL,
        booking
    );

};


// ==============================
// UPDATE BOOKING
// ==============================

export const updateMovie = (
    id,
    movie,
    email,
    role = "customer"
) => {

    return axios.put(
        `${API_URL}/${id}`,
        movie,
        {
            params: {
                email: email,
                role: role
            }
        }
    );

};


// ==============================
// DELETE BOOKING
// ==============================

export const deleteMovie = (
    id,
    email,
    role = "customer"
) => {

    return axios.delete(
        `${API_URL}/${id}`,
        {
            params: {
                email: email,
                role: role
            }
        }
    );

};