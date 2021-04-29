import axios from "axios";
import key from "./pixabayKey";

const fetchImagesWithQuery = async (query) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${key}=${query}&image_type=photo`
  );
  return response;
};
export default fetchImagesWithQuery;
