import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, Carousel, Space, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { Logo } from 'components/Logo';
import ImageCarousel from 'components/ImageCarousel';

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
  'https://picsum.photos/id/1018/1000/600/',
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1019/1000/600/',
];

const NorthNarrabeenPage = () => {

  const windowWidth = useWindowWidth();


  const posterHeight = windowWidth < 576 ? 400 :
    windowWidth < 992 ? 450 :
      500;

  const catchPhraseSize = windowWidth < 576 ? 28 :
    windowWidth < 992 ? 36 :
      44;
  return (
    <>
      <Title style={{ fontSize: catchPhraseSize, color: '#ffd100' }} >
        North Narrabeen
      </Title>
      <ImageCarousel images={images} />

      <PosterContainer style={{ height: posterHeight, position: 'absolute', top: 0, left: 0, right: 0 }}>
        <Space direction="vertical" style={{ maxWidth: '1200px', textAlign: 'center' }}>
          <Space size="large">
          </Space>
          <Title style={{ fontSize: catchPhraseSize, color: '#ffd100' }} >
            “It all starts with a Seed…”
          </Title>
          <Text style={{ fontSize: catchPhraseSize * 0.6, color: '#ffd100' }} >~ Bryan E. Wright</Text>
          {/* <Title level={2} style={{ marginTop: 0, fontWeight: 300, fontSize: Math.max(catchPhraseSize * 0.5, 14) }}>
            All in one system for file, doc, job, task and workflow management. Come on, join us today!!
              </Title> */}
        </Space>
      </PosterContainer>
      <Logo size={400} />

      <Paragraph>
        We imagine every child to be like a little seed - they are born with everything they need to thrive. We support children to unlock their full potential by providing them with a welcoming environment and the loving guidance they need to flourish. We place developing and maintaining meaningful relationships at the heart of all we do.
      </Paragraph>
    </>
  );
}

NorthNarrabeenPage.propTypes = {};

NorthNarrabeenPage.defaultProps = {};

export default withRouter(NorthNarrabeenPage);
