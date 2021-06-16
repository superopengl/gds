// import 'App.css';
import HomeCarouselArea from 'components/homeAreas/HomeCarouselArea';
import HomeServiceArea from 'components/homeAreas/HomeServiceArea';
import HomeFooter from 'components/HomeFooter';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import HomeContactArea from 'components/homeAreas/HomeContactArea.js';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const StyledLayout = styled(ProLayout)`
.ant-layout {
  background-color: white;
}

.ant-menu-item:hover {
  .ant-pro-menu-item-title {
    color: rgba(255,255,255, 0.7);
    // font-weight: 500;
  }
  background-color: transparent !important;
}

.ant-layout-content {
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.ant-pro-top-menu {
  background: transparent !important;
}

.ant-pro-top-nav-header {
  // box-shadow: none;
}

.ant-pro-top-nav-header-logo, .ant-pro-top-nav-header-main-left {
  min-width: 0;
}

.ant-pro-top-nav-header-main {
  margin: auto;
  // max-width: 1200px;
}

.ant-pro-global-header-layout-top, .ant-pro-top-nav-header {
  // background-color: rgba(19,194,194,0.7);
  background-color: #00474fdd;
  // background-color: rgba(0, 41, 61, 0.7); 
// background-image: linear-gradient(135deg, #00474f, #00474f 400px, rgba(255,255,255,0.0) 400px, rgba(255,255,255,0.0) 100%);
}

.ant-pro-global-header-collapsed-button {
  // color: rgba(255,255,255,0.75);
  color: rgba(0,0,0,0.75);
}

.ant-pro-menu-item-title {
  color: rgba(255,255,255,0.95);
  // color: rgba(0,0,0,0.75);
  font-weight: 400;
}
`;

const scrollToElement = (selector) => {
  document.querySelector(selector)?.scrollIntoView({
    behavior: 'smooth',
    block: "start",
    inline: "nearest"
  });
}


const HomePage = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const ROUTES = [
    {
      key: '0',
      path: '/slogan',
      name: 'Feature',
      visible: true,
    },
    {
      key: '3',
      path: '/locations',
      name: 'Branches',
      visible: true,
    },
    {
      key: '2',
      path: '/menu',
      name: 'Menu',
      visible: true,
    },
  ];

  const handleMenuClick = (path) => {
    const isAnchor = path.includes('#');
    if (isAnchor) {
      scrollToElement(path.replace(/\//, ''))
      setCollapsed(true);
    } else {
      props.history.push(path);
    }
  }

  return <StyledLayout
    logo="/images/logo.svg"
    title={null}
    // logo="/images/logo-transparent.png"
    collapsed={collapsed}
    onCollapse={setCollapsed}
    siderWidth={270}
    layout="top"
    navTheme="dark"
    route={{ routes: ROUTES }}
    location={{ pathname: '/non' }}
    fixedHeader={true}
    menuItemRender={(item, dom) => item.visible ? <div onClick={() => handleMenuClick(item.path)}>{dom}</div> : null}
  >

    <section>
      <HomeCarouselArea />
    </section>
    {/* <section>
      <HomeFeatureArea />
    </section> */}
    <section><HomeServiceArea /></section>
    <section><HomeContactArea bgColor="#142952"></HomeContactArea></section>
    {/* <section><HomeSearchArea /></section> */}
    {/* <section>
      <HomeServiceArea bgColor="#135200" />
    </section> */}

    <HomeFooter />
  </StyledLayout>
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withRouter(HomePage);
