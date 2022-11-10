import React from 'react';
import { Content, Layout } from '../atoms';

const DashboardWrapper = ({ children }) => {
  return (
    <Layout>
      <Layout>
        <Content back_color='#fbfbfb' padding={'15px 30px'}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardWrapper;
