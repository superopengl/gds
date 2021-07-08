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
    <div style={{ width: '100%', textAlign: 'center', position: 'relative', paddingTop: 40 }}>
      <Title style={{ fontSize: catchPhraseSize, color: '#ffd100' }} >
        North Narrabeen
      </Title>
      <ImageCarousel images={images} />
      <Paragraph>
        We imagine every child to be like a little seed - they are born with everything they need to thrive. We support children to unlock their full potential by providing them with a welcoming environment and the loving guidance they need to flourish. We place developing and maintaining meaningful relationships at the heart of all we do.
      </Paragraph>
    </div>
  );
}

NorthNarrabeenPage.propTypes = {};

NorthNarrabeenPage.defaultProps = {};

export default withRouter(NorthNarrabeenPage);
