import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, Carousel, Space, Row, Col, Button } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { Logo } from 'components/Logo';
import ImageCarousel from 'components/ImageCarousel';
import { Divider } from 'antd';
import { Tooltip } from 'antd';

const { Title, Paragraph, Text } = Typography;

const PosterContainer = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
width: 100%;
min-height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.ant-typography {
  color: rgba(255,255,255,1);
  text-align: center;
}

.location-link {
  a {
    background-color: #fffff22;
  }
}
`;

const images = [
  '/images/home/1.jpg',
  // '/images/home/2.jpg',
  // '/images/home/3.jpg',
  // '/images/home/4.jpg',
  '/images/home/5.jpg',
  '/images/home/6.jpg',
];

const LocationButton = styled(Button)`
width: 180px;
border-color: #ffd100;
border: none;
color: #280071cc;
background-color: #ffffff77;
border-radius: 16px;

&:hover {
border-color: #ffd100;
background-color: #ffffffbb;
color: #280071;
}
`;

const gitVersion = process.env.REACT_APP_GIT_HASH;


const HomePage = props => {

  return (
    <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
      <ImageCarousel images={images} />
      <PosterContainer style={{ position: 'absolute', top: 160, left: 0, right: 0, padding: '0 40px' }}>
        <Space direction="vertical" size="large" style={{ textAlign: 'center', backgroundColor: '#00c1d5cc', padding: 40, borderRadius: 64 }}>
          <Logo size={400} />
          <Title style={{ color: '#ffd100', marginBottom: 0 }} >
            "It all starts with a Seed…"
          </Title>
          <Text style={{ color: '#ffd100', fontSize: 22 }}><small>~ Bryan E. Wright</small></Text>
          <Paragraph style={{ maxWidth: 800, color: '#280071cc', marginTop: 30 }}>
            We imagine every child to be like a little seed - they are born with everything they need to thrive. We support children to unlock their full potential by providing them with a welcoming environment and the loving guidance they need to flourish. We place developing and maintaining meaningful relationships at the heart of all we do.
          </Paragraph>
        </Space>

        <Row style={{ marginTop: 40, color: '#280071cc' }} justify="center" align="middle" gutter={[40, 20]}>
          <Col>
            <LocationButton size="large" type="primary" onClick={() => props.history.push('/locations/north_narrabeen')}>North Narrabeen</LocationButton>
          </Col>
          <Col>
            <LocationButton size="large" type="primary" onClick={() => props.history.push('/locations/campsie')}>Campsie</LocationButton>
          </Col>
          <Col>
            <Tooltip title="Coming soon!" trigger="click" placement="bottom">
              <LocationButton size="large" type="primary">Auburn</LocationButton>
            </Tooltip>
          </Col>
        </Row>

        <Space size="small" direction="vertical" style={{ marginTop: 40, color: '#280071cc', fontSize: 14 }}>
          <p>©{new Date().getFullYear()} Golden Seeds Inc.</p>
          <p style={{ display: 'none' }}>Version {gitVersion}</p>
          <div style={{ display: 'none', marginTop: 5 }}><img src="https://www.techseeding.com.au/logo-bw.png" width="120px" height="auto" alt="Techseeding logo"></img></div>
        </Space>
      </PosterContainer>
    </div>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withRouter(HomePage);
