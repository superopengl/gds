// import 'App.css';
import HomeFooter from 'components/HomeFooter';
import React from 'react';
import styled from 'styled-components';
import { withRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import smoothscroll from 'smoothscroll-polyfill';
import MenusPage from './MenusPage';
import ProgramPage from './ProgramPage';
import HomePage from './HomePage';
import PhilosophyPage from './PhilosophyPage';
import TeamPage from './TeamPage';
import {Tag, Typography} from 'antd';

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

// .ant-pro-top-menu {
//   background: transparent !important;
// }

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

// .ant-pro-menu-item-title {
//   color: rgba(255,255,255,0.95);
//   font-weight: 400;
// }
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

  React.useEffect(() => {
    setCollapsed(false);
  }, [pathname]);

  const ROUTES = [

    {
      path: '/philosophy',
      name: 'Service Philosophy',
      visible: true,
    },
    {
      path: '/program',
      name: 'Educational Program',
      visible: true,
    },
    {
      path: '/team',
      name: 'Management Team',
      visible: true,
    },
    {
      key: 'menu',
      path: '/menus',
      name: 'Menus',
      visible: true,
    },
    {
      path: '/locations',
      name: 'Locations',
      routes: [
        {
          path: '/north_narrabeen',
          name: 'North Narrabeen',
        },
        {
          path: '/campsie',
          name: 'Campsie',
        },
        {
          path: '/auburn',
          name: <>Auburn <Tag color="#fdd715">coming soon</Tag></>,
          disabled: true
        },
      ]
    },
  ];

  const handleGoHome = () => {
      props.history.push('/');
      setCollapsed(false);
  }



  return   <StyledLayout
    logo="/images/logo2.png"
    title={null}
    // logo="/images/logo-transparent.png"
    onMenuHeaderClick={handleGoHome}
    onTopMixMenuHeaderClick={handleGoHome}
    collapsed={collapsed}
    onCollapse={setCollapsed}
    siderWidth={270}
    layout="top"
    navTheme="light"
    route={{ routes: ROUTES }}
    location={{ pathname }}
    fixedHeader={true}
    footerRender={() => <HomeFooter />}
    contentStyle={{
      padding: '48px 0 110px',
      // backgroundColor: '#00c1d5',
      height: '100%'
    }}
    // menuItemRender={(item, dom) => item.visible ? <div onClick={() => handleMenuClick(item.path)}>{dom}</div> : null}
    menuItemRender={(item, dom) => {
      if(item.disabled) {
        return <Text type="secondary">{dom}</Text>
      }
      return <Link to={item.path} onClick={() => {
        setPathname(item.path);
      }}>
        {dom}
      </Link>
    }}
  >
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/locations/north_narrabeen" exact component={MenusPage} />
      <Route path="/locations/campsie" exact component={MenusPage} />
      <Route path="/locations/auburn" exact component={MenusPage} />
      <Route path="/program" exact component={ProgramPage} />
      <Route path="/philosophy" exact component={PhilosophyPage} />
      <Route path="/team" exact component={TeamPage} />
      <Route path="/menus" exact component={MenusPage} />
      <Redirect to="/" />
    </Switch>
  </StyledLayout>
    
}

PageLayout.propTypes = {};

PageLayout.defaultProps = {};

export default withRouter(PageLayout);
