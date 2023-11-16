import axios from "axios";

export const fetchCards = async (
  typeId: number | undefined,
  page: number,
  limit: number = 5,
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/card/mini`, {
        params: {
            typeId,
            page,
            limit
        }
    }
  );
  return response;
};
