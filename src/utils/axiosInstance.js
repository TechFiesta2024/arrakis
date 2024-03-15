const { default: axios } = require("axios");

const axiosInstance = axios.create({
	baseURL: `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_MESSIAH_DEV_URL : process.env.NEXT_PUBLIC_MESSIAH_PROD_URL}`,
	headers: {
		"Access-Control-Allow-Headers": "*",
	},
});

module.exports = axiosInstance;
