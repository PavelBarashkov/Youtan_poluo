import axios from "axios";

export const fetchTypes = async () => {
  const response = await axios.get(
    `http://localhost:5000/api/type/product/all`
  );
  return response;
};
