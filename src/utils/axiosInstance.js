const { default: axios } = require("axios");

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MESSIAH_URL,
    withCredentials: true
})

module.exports = axiosInstance