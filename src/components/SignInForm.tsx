import React from 'react';
import { Input, Button, Form, message } from 'antd';
import { useSignIn } from '../hooks/useAuth';
import logo from '../assets/logo.png';
import { GoogleLogin } from '@react-oauth/google';
import loginImage from '../assets/background.png';
import Star from '../assets/Star.png';

type SignInData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const [form] = Form.useForm();
  const signIn = useSignIn();

  const onFinish = async (values: SignInData) => {
    try {
      const result = await signIn.mutateAsync(values);
      localStorage.setItem('token', result.token);
      message.success('login success!');
    } catch (err) {
      const error = err as { response?: { data?: { message?: string } } };
      message.error(error.response?.data?.message || 'error');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {/* الفورم */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{
            width: 400,
            padding: 32,
            backgroundColor: '#fff',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 0,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 83, height: 32, marginBottom: 24 }} />
          <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Log in</h3>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, min: 8, message: 'must be at least 8 characters' }]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={signIn.isPending}
            style={{
              width: '100%',
              height: 44,
              borderRadius: 8,
              marginBottom: 16,
              background: '#7F56D9',
              border: 'none',
             
            }}
          >
            Login
          </Button>

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </Form>
      </div>

      {/* style of image  */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          height: '100%',
          padding: 0,
          margin: 0,
          
        }}
      >
        <img
          src={loginImage}
          alt="Login"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* style of star */}
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 40,
            width: 140,
            height: 140,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={Star}
            alt="Star"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'absolute',
              zIndex: 1,
            }}
          />
        </div>

        {/* style of text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          Welcome to our Platform
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
