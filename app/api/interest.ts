import { BASE_URL } from ".";



// GET ALL INTERESTS-> GET

export const api_getAllInterests = async (token:string) => {
    const uri = `${BASE_URL}/interests/getAll`;
    
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
  

// GET ALL INTERESTS BY ID-> GET

export const api_getInterestsById = async (interests:any, token:string) => {
    const uri = `${BASE_URL}/interests/getById/${interests}`;
    
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
  

  // INTEREST UPDATE -> PUT

export const api_AddInterest = async ( userId:string,token:string ,interests:any) => {
  console.log({userId,token,})

  const data = JSON.stringify(interests)
  console.log(data)
  const uri = `${BASE_URL}/users/addIntersts/${userId}`;
  
    const response = await fetch(uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: data,
    }).then((res) => res.json());

    if(!response.isSuccess){
        throw new Error(response.error || 'something went wrong!')
    }
    console.log(response)
    return response;
  };