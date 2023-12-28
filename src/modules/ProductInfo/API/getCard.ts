import axios from "axios";

export const getCard = async (id: number, cardId: number) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/card/model/${id}`,
    { cardId }
  );
  return response;
};
