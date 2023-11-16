import axios from "axios";

export const fetchCards = async (
  typeId: number | undefined,
  bySort: string,
  page: number,
  limit: number = 5
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/card/mini`,
    {
      params: {
        typeId,
        bySort,
        page,
        limit,
      },
      
    }
  );
  return response;
};
