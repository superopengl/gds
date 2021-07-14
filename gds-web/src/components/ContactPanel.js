// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Table, Row, Space, Image, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';
import { HomeOutlined, PhoneOutlined, QrcodeOutlined, GlobalOutlined } from '@ant-design/icons';
import { HomeFilled, PhoneFilled, MailFilled } from '@ant-design/icons';

const { Paragraph, Text, Link } = Typography;

const StyledDescriptions = styled(Descriptions)`
  a {
    color: rgba(255,255,255,0.8);

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }

  .ant-descriptions-item-label {
    .ant-space {
      width: 96px;
    }
  }
`;

const ContactPanel = (props) => {

  const { address, phone, email, website, qr } = props;

  return <StyledDescriptions column={1} size="small">
    <Descriptions.Item label={<Space><HomeFilled />Address</Space>}>
      <Link href={`https://maps.google.com/?q=${address}`} target="_blank">{address}</Link>
    </Descriptions.Item>
    <Descriptions.Item label={<Space><PhoneFilled />Phone</Space>}>
      <Link href={`tel:${phone}`} target="_blank">{phone}</Link>
    </Descriptions.Item>
    <Descriptions.Item label={<Space><MailFilled />Email</Space>}>
      <Link href={`mailto:${email}`} target="_blank">{email}</Link>
    </Descriptions.Item>
    <Descriptions.Item label={<Space><GlobalOutlined />Website</Space>}>
      <Link href={website} target="_blank">{website}</Link>
    </Descriptions.Item>
    {qr && <Descriptions.Item label={<Space><QrcodeOutlined />QR</Space>}>
      <Image preview={true} src={qr} width={150} />
    </Descriptions.Item>}
  </StyledDescriptions>
}

ContactPanel.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  qr: PropTypes.string,
};

ContactPanel.defaultProps = {
};

export default withRouter(ContactPanel);


