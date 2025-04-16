
import React, { useState } from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title style={{ color: 'white', margin: 0 }} level={3}>
            
          </Title>
          <Button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Do you have an account? Log in' : 'Do not have an account? register'}
          </Button>
        </Header>

        <Content style={{ padding: '2rem' }}>
          <Space direction="vertical" style={{ width: '100%' }} align="center">
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </Space>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          © 2025 My  App. All rights reserved.
        </Footer>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
