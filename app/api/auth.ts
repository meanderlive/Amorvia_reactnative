import { BASE_URL } from '.';

// LOGIN OTP -> POST

export const api_loginOTP = async (email: any) => {
  const uri = `${BASE_URL}/User/loginWithEmail`;

  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

// SIGN UP -> POST

export const api_createUser = async (payload: any) => {
  // const uri = `${BASE_URL}/Users/create`;
  const uri = 'https://datingapi.meander.software/User/create';

  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

// VERIFY OTP -> POST


export const api_otpVerify = async (otp: any, token: any) => {
  // const uri = `${BASE_URL}/User/verifyOtpEmail`;
  const uri = "https://datingapi.meander.software/User/verifyOtpEmail";

console.log(otp,token,"in api folder response ----<<<<<<<<<<<")
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'x-access-token': token,
    },
    body: JSON.stringify({otp,token}),
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};
