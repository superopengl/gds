// import 'App.css';
import HomeFooter from 'components/HomeFooter';
import React from 'react';
import styled from 'styled-components';
import { withRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import smoothscroll from 'smoothscroll-polyfill';
import PhotoGallery from '../components/PhotoGallery';
import ProgramPage from './ProgramPage';
import HomePage from './HomePage';
import PhilosophyPage from './PhilosophyPage';
import TeamPage from './TeamPage';
import {Tag, Typography} from 'antd';
import NorthNarrabeenPage from './locations/NorthNarrabeenPage';
import CampsiePage from './locations/CampsiePage';

smoothscroll.polyfill();

const {Text} = Typography;

const StyledLayout = styled(ProLayout)`
// .ant-layout {
//   background-color: white;
// }

// .ant-menu-item:hover {
//   .ant-pro-menu-item-title {
//     color: rgba(255,255,255, 0.7);
//     // font-weight: 500;
//   }
//   background-color: transparent !important;
// }

.ant-layout-content {
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

// .top-nav-menu {
//   display: flex;
//   justify-content: flex-end;
// }

.ant-pro-top-menu {
  background: #00c1d5dd !important;
}

// .ant-pro-top-nav-header {
//   // box-shadow: none;
// }

// .ant-pro-top-nav-header-logo, .ant-pro-top-nav-header-main-left {
//   min-width: 0;
// }

// .ant-pro-top-nav-header-main {
//   margin: auto;
//   // max-width: 1200px;
// }

// .ant-pro-global-header-layout-top, .ant-pro-top-nav-header {
//   background-color: #00c1d5dd;
// }

// .ant-pro-global-header-collapsed-button {
//   color: rgba(0,0,0,0.75);
// }

.ant-pro-menu-item-title {
  color: rgba(255,255,255,0.95);
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

function getSanitizedPathName(pathname) {
  const match = /\/[^/]+/.exec(pathname);
  return match ? match[0] ?? pathname : pathname;
}


const PageLayout = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [pathname, setPathname] = React.useState(getSanitizedPathName(props.location.pathname));

  const ROUTES = [

    {
      path: '/philosophy',
      name: 'Service Philosophy',
    },
    {
      path: '/program',
      name: 'Educational Program',
    },
    {
      path: '/team',
      name: 'Management Team',
    },
    // {
    //   key: 'menu',
    //   path: '/menus',
    //   name: 'Menus',
    //   visible: true,
    // },
    {
      name: 'Locations',
      routes: [
        {
          path: '/locations/north_narrabeen',
          name: 'North Narrabeen',
        },
        {
          path: '/locations/campsie',
          name: 'Campsie',
        },
        {
          path: '/locations/auburn',
          name: <>Auburn <Tag color="#fdd715">coming soon</Tag></>,
          disabled: true
        },
      ]
    },
  ];

  const handleGoHome = () => {
      props.history.push('/');
      setCollapsed(true);
  }

  return <StyledLayout
    logo="/images/logo/smile.png"
    title={null}
    // logo="/images/logo-transparent.png"
    onMenuHeaderClick={handleGoHome}
    onTopMixMenuHeaderClick={handleGoHome}
    collapsed={collapsed}
    onCollapse={setCollapsed}
    pageTitleRender={false}
    siderWidth={270}
    layout="top"
    navTheme="dark"
    route={{ routes: ROUTES }}
    location={{ pathname }}
    fixedHeader={true}
    // footerRender={() => <HomeFooter />}
    contentStyle={{
      padding: '0',
      backgroundColor: '#00c1d5',
      // height: '100%'
    }}
    // menuItemRender={(item, dom) => item.visible ? <div onClick={() => handleMenuClick(item.path)}>{dom}</div> : null}
    menuItemRender={(item, dom) => {
      if(item.disabled) {
        return <Text type="secondary">{dom}</Text>
      }
      return <Link to={item.path} onClick={() => {
        setCollapsed(true);
        setPathname(item.path);

      }}>

        {dom}
      </Link>
    }}
  >
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/locations/north_narrabeen" exact component={NorthNarrabeenPage} />
      <Route path="/locations/campsie" exact component={CampsiePage} />
      <Route path="/locations/auburn" exact component={PhotoGallery} />
      <Route path="/program" exact component={ProgramPage} />
      <Route path="/philosophy" exact component={PhilosophyPage} />
      <Route path="/team" exact component={TeamPage} />
      <Route path="/menus" exact component={PhotoGallery} />
      <Redirect to="/" />
    </Switch>
    {/* <HomeFooter /> */}
  </StyledLayout>
    
}

PageLayout.propTypes = {};

PageLayout.defaultProps = {};

export default withRouter(PageLayout);
