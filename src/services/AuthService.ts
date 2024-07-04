import axios from "axios";
import { BASE_URL } from "../env";

interface LoginResponse {
  status: string;
  message: string;
  data: {
    name: string;
    email: string;
    role: string;
    token: string;
  };
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const loginWithGoogle = async (googleToken: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup/google`, {
      token: googleToken,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const profile = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
