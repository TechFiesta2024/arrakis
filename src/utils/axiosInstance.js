const { default: axios } = require("axios");

const environments = ['development', 'preview']

const axiosInstance = axios.create({
	baseURL: `${environments.includes(process.env.NODE_ENV) ? process.env.NEXT_PUBLIC_MESSIAH_DEV_URL : process.env.NEXT_PUBLIC_MESSIAH_PROD_URL}`,
	headers: {
		"Access-Control-Allow-Headers": "*",
	},
});

module.exports = axiosInstance;
