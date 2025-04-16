import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '854964094152-lqmqivjv2o7jvtbiqnd73j0d0csl9lln.apps.googleusercontent.com';

export const GoogleProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>;
};
