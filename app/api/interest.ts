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
  

// GET ALL INTERESTS BY MODE ID-> GET

export const api_getInterestsByModeId = async (modeId: string, pageNo: number = 1, pageSize: number = 50) => {
    const uri = `${BASE_URL}/interest/getall/${modeId}?page_no=${pageNo}&page_size=${pageSize}`;
    
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