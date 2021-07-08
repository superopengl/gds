import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { withRouter } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'

const ContainerStyled = styled.div`
border-bottom: 1px solid #f0f0f0;
margin: 0 auto 0 auto;
width: 100%;
`;

const ImgStyled = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
overflow: hidden;
// height: 600px;
box-shadow: inset 0 -10px 10px -10px #888888;
`

const ImageCarousel = props => {

  const { images } = props;
  const windowWidth = useWindowWidth();


  const posterHeight = windowWidth < 576 ? 400 :
    windowWidth < 992 ? 450 :
      500;

  return (
    <ContainerStyled>
      <Carousel autoplay dotPosition="bottom" >
        {images.map((x, i) => (
          <div key={i}>
            <ImgStyled style={{ height: posterHeight, backgroundImage: `url("${x}")` }}>
            </ImgStyled>
          </div>
        ))}
      </Carousel>
    </ContainerStyled>
  );
}

ImageCarousel.propTypes = {};

ImageCarousel.defaultProps = {};

export default withRouter(ImageCarousel);
