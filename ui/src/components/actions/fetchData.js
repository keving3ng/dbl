import testapi from "../apis/testapi";

export const fetchData = async () => {
  const item = await testapi.get("/apple");
  return {
    type: "CARD_DATA",
    payload: item
  };
};
