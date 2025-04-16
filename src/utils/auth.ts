
import { useMutation } from '@tanstack/react-query';
import axios from '../utils/axios';

type AuthData = {
  email: string;
  password: string;
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: (userData: AuthData) =>
      axios.post('/auth/signup', userData),
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: (userData: AuthData) =>
      axios.post('/auth/signin', userData),
  });
};
