import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, Carousel, Space, Row, Col } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { Logo } from 'components/Logo';
import ImageCarousel from 'components/ImageCarousel';
import { Divider } from 'antd';

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
`;

const images = [
  // '/images/home/1.jpg',
  // '/images/home/2.jpg',
  // '/images/home/3.jpg',
  '/images/home/4.jpg',
  '/images/home/5.jpg',
  '/images/home/6.jpg',
];

const gitVersion = process.env.REACT_APP_GIT_HASH;


const HomePage = () => {

  const windowWidth = useWindowWidth();

  const posterHeight = windowWidth < 576 ? 400 :
    windowWidth < 992 ? 450 :
      500;

  return (
    <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
      <ImageCarousel images={images} />
      <PosterContainer style={{ height: posterHeight, position: 'absolute', top: 250, left: 0, right: 0, padding: '0 40px' }}>
        <Space direction="vertical" size="large" style={{ textAlign: 'center', backgroundColor: '#00c1d5cc', padding: 40, borderRadius: 32 }}>
          <Logo size={400} />
          <Title style={{ color: '#ffd100', marginBottom: 0 }} >
            "It all starts with a Seed…"
          </Title>
          <Text style={{ color: '#ffd100', fontSize: 20 }}><small>~ Bryan E. Wright</small></Text>
          {/* <Title level={2} style={{ marginTop: 0, fontWeight: 300, fontSize: Math.max(catchPhraseSize * 0.5, 14) }}>
            All in one system for file, doc, job, task and workflow management. Come on, join us today!!
              </Title> */}
          <Paragraph style={{ maxWidth: 800, color: '#280071cc', marginTop: 30 }}>
            We imagine every child to be like a little seed - they are born with everything they need to thrive. We support children to unlock their full potential by providing them with a welcoming environment and the loving guidance they need to flourish. We place developing and maintaining meaningful relationships at the heart of all we do.
          </Paragraph>
        </Space>

        <Space size="large" style={{ marginTop: 40, color: '#ffd100' }}>
          <Link to="/locations/north_narrabeen" style={{ color: '#ffd100' }}>North Narrabeen</Link>
          |
          <Link to="/locations/campsie" style={{ color: '#ffd100' }}>Campsie</Link>
          |
          <Text style={{ color: '#ffd100' }}>Auburn (coming soon)</Text>
        </Space>

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
