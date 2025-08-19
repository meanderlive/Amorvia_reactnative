import { BASE_URL } from ".";




export const api_getModeByID = async (Id:any) => {
  const uri = `${BASE_URL}/modes/getById/${Id}`;
  
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

