import { BASE_URL } from ".";


// GET RANDOM LIST-> GET

export const api_getRandomList = async (userId:any, token:string) => {
    const uri = `${BASE_URL}/users/randomList/${userId}`;
    console.log({userId,token},'fdgfsdgfsdgdfsgfdsgf')
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }).then((res) => res.json());
    if (!response.isSuccess) {
      throw new Error(response.error);
    }
    return response;
  };
  
  