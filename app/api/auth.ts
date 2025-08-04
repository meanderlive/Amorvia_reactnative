import { BASE_URL } from ".";


// LOGIN OTP -> POST

export const api_loginOTP = async (phoneNumber: any) => {
    const uri = `${BASE_URL}/users/loginOtp`;

    const data = {
        "phoneNumber": phoneNumber,
        "email": "string"
      }
console.log(data);

      const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (!response.isSuccess) {
      throw new Error(response.error || 'something went wrong!');
    }
    return response;
  };

  // SIGN UP -> POST

export const api_createUser = async (payload: any) => {
  const uri = `${BASE_URL}/users/create`;

    const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

  
  // VERIFY OTP -> POST

export const api_otpVerify = async (otp: any, token: any) => {
  const uri = `${BASE_URL}/users/loginOtpVerification`;

const data ={ 
  "otp": otp,
  "fcmToken": 'string'
}

console.log(data)
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};