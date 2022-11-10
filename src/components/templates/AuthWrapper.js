import React from 'react';
import styled from 'styled-components';
import AuthBackImage from '../../assets/images/auth.jpg';
import { Card, Col, Row } from '../atoms';

const AuthWrapperComp = styled.div`
  position: relative;
  //padding: 60px 100px 30px 100px;
  //background-image: url(${AuthBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: center;

  .back_image {
    width: 100%;
    //max-height: 85vh;
    border-radius: 20px;
  }

  @media screen and (max-width: 992px) {
    padding: 0 35px;
    background-image: none;

    .back-image {
      border-radius: 0px;
    }
    .image_col {
      align-items: start;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: none;
    .back-image {
      border-radius: 0px;
    }
  }
`;

const AuthWrapper = ({ children }) => {
  return (
    <AuthWrapperComp>
      <Row mb={0} gutter={60}>
        <Col span={16} mt={40}>
          <Card b_backcolor={'white'} padding={'0 30px'} width={'100%'}>
            {children}
          </Card>
        </Col>
      </Row>
    </AuthWrapperComp>
  );
};

export default AuthWrapper;
