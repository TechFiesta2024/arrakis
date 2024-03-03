const { default: axios } = require("axios");

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MESSIAH_URL,
    headers: {
        "Access-Control-Allow-Headers": "*" 
    }
})

module.exports = axiosInstance