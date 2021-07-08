
import React from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'antd';

export const Logo = (props) =>
  <Link to="/">
    <Image src="/images/logo2.png" preview={false} width={props.size || 80} />
  </Link>
