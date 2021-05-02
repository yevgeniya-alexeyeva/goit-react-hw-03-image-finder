import axios from "axios";
import key from "./pixabayKey";

const BASE_URL = "https://pixabay.com/api";

const fetchImagesWithQuery = async (query = 1, page = 1, itemPerPage = 12) => {
  const response = await axios.get(
    `${BASE_URL}/?key=${key}=${query}&image_type=photo&orientation=horizontal&per_page=${itemPerPage}&page=${page}`
  );
  return response;
};
export default fetchImagesWithQuery;
