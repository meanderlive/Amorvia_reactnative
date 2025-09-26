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


export const api_otpVerify = async (otp: string, token: string): Promise<{
  isSuccess: boolean;
  data: any;
  message: string;
  statusCode: number;
}> => {
  const uri = "https://datingapi.meander.software/User/verifyOtpEmail";
  
  try {
    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp, token }),
    });

    const data = await response.json();
    
    if (!response.ok || !data.isSuccess) {
      throw new Error(data.message || 'Failed to verify OTP');
    }
    
    return {
      isSuccess: true,
      data: data.data,
      message: data.message || 'OTP verified successfully',
      statusCode: response.status
    };
  } catch (error: any) {
    console.error('OTP verification error:', error);
    throw new Error(error.message || 'Network error occurred while verifying OTP');
  }
};
