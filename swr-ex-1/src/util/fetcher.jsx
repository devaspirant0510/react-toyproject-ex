import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8080";

const fetcher = (url) => axios.get(url).then(res=>res.data);

export default fetcher;