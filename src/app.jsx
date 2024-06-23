
import './App.css';
import React from 'react';
import { Layout } from 'antd';
const [Header, Sider] = Layout
function App() {
  return (
    <div>
      <Layout>
        <Sider>sidebar</Sider>
      </Layout>
    </div>
  );
}

export default App;
