// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row, Space, Image } from 'antd';
import PropTypes from 'prop-types';

const PageContainer = (props) => {

  const { title, bgColor, image, contentBgColor, footerImage, contentMaxWidth } = props;

  const Container = styled.div`
    padding: 150px 20px 80px;
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0, rgba(0,0,0,0) 800px, ${bgColor} 1200px, ${bgColor} 100%), url("${image}") no-repeat;
    background-size: cover;
    min-height: 100vh;
  
    ul {
      list-style-type:disc;
    }

    h2 {
      color: #ffd100 !important;
    }
  `;

  return <Container>
    {title}
    <Row justify="center">
      <Space direction="vertical" style={{ 
        padding: '80px 80px 260px', 
      minHeight: 'calc(100vh - 200px)', 
      maxWidth: contentMaxWidth, 
      backgroundColor: contentBgColor, 
      borderRadius: 64, 
      // borderRadius: `35% 50% 45% 50%/50% 65% 70% 85%`,
      position: 'relative' 
      }}>
        {props.children}
        {footerImage && <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
          <Image src={footerImage} width={180} preview={false} />
        </div>}
      </Space>
    </Row>

  </Container>
}

PageContainer.propTypes = {
  bgColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  contentBgColor: PropTypes.string.isRequired,
  footerImage: PropTypes.string,
  contentMaxWidth: PropTypes.number,
  title: PropTypes.object,
};

PageContainer.defaultProps = {
  bgColor: '#00c1d5',
  contentBgColor: '#cf035cee',
  footerImage: '/images/logo/logo-pray.png',
  contentMaxWidth: 1000
};

export default withRouter(PageContainer);


