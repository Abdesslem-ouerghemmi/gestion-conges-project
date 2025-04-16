
import { useMutation } from '@tanstack/react-query';
import axios from '../utils/axios';

export type  AuthResponse= {
  message: string;
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export const useSignUp = () => {
  return useMutation<AuthResponse, Error, SignUpData>({
    mutationFn: async (userData) => {
      const response = await axios.post('/auth/signup', userData);
      return response.data;
    },
  });
};

export const useSignIn = () => {
  return useMutation<AuthResponse, Error, SignInData>({
    mutationFn: async (userData) => {
      const response = await axios.post('/auth/signin', userData);
      return response.data;
    },
  });
};
