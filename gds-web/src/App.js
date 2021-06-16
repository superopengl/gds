import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { ConfigProvider } from 'antd';
import antdLocaleEN from 'antd/lib/locale/en_US';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  // const Initalize = async () => {
  //   const user = await getAuthUser();
  //   ReactDOM.unstable_batchedUpdates(() => {
  //     setUser(user);
  //     setLoading(false);
  //   })
  // }


  return (
      <ConfigProvider locale={antdLocaleEN}>
          <BrowserRouter basename="/">
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </BrowserRouter>
      </ConfigProvider>
  );
}

export default App;
