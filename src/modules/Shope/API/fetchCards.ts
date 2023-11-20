import axios from "axios";

export const fetchCards = async (
  typeId: number | undefined,
  bySort: string,
  page: number,
  limit: number = 1
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/card/model/mini`,
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
