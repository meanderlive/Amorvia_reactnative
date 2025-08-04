

import { BASE_URL } from ".";
import { Platform } from 'react-native';




// PROFILE UPDATE -> PUT
export const api_update = async ( userId:any,token:any ,payload:any) => {
  console.log({userId,token,payload})
  const uri = `https://marier.one:9001/api/v1/users/update/${userId}`;
    const response = await fetch(uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    // if(!response.isSuccess){
    //     throw new Error(response.error || 'something went wrong!')
    // }
    console.log(response)
    return response;
  };



  // UPDATE PROFILE

export const api_updateProfile = async (
  userId: string,
  payload: any,
) => {
  const uri = `${BASE_URL}/users/profileImageUpload/${userId}`;

  const data = new FormData();
  data.append('image', {
    name: new Date().toDateString(),
    type: 'image/jpeg',
    uri: Platform.OS === 'ios' ? payload.replace('file://', '') : payload,
  });

  const response = await fetch(uri, {
    method: 'PUT',
    body: data,
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};



// GET CURRENT-> GET

export const api_getCurrent = async (userId:any, token:string) => {
  const uri = `${BASE_URL}/users/current/${userId}`;
  
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

