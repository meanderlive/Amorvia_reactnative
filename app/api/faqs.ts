import { BASE_URL } from ".";



// GET FAQs-> GET
export const api_getAllFAQs = async () => {
    const uri = `${BASE_URL}/faqs/getAll`;
    
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
  