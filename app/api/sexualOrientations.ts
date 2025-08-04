import { BASE_URL } from ".";



// GET SexualOrientations-> GET
export const api_getSexualOrientations = async () => {
    const uri = `${BASE_URL}/sexualOrientations/getAll`;
    
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
  