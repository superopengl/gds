// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Table, Row, Space, Image, Typography } from 'antd';
import PropTypes from 'prop-types';
const { Paragraph, Text } = Typography;

const renderCell = (value, item) => {
  return <><Paragraph>
    {value.content}
  </Paragraph>
    <Paragraph strong>{value.strong}
    </Paragraph>
  </>
}

const columns = [
  {
    title: '',
    align: 'center',
    dataIndex: 'title',
    width: 150,
    fixed: 'left',
    render: value => <Text strong>{value}</Text>
  },
  {
    title: 'Monday',
    dataIndex: 'mon',
    align: 'center',
    width: 200,
    render: renderCell,
  },
  {
    title: 'Tuesday',
    dataIndex: 'tue',
    align: 'center',
    width: 200,
    render: renderCell,
  },
  {
    title: 'Wednesday',
    dataIndex: 'wed',
    align: 'center',
    width: 200,
    render: renderCell,
  },
  {
    title: 'Thursday',
    dataIndex: 'thu',
    align: 'center',
    width: 200,
    render: renderCell,
  },
  {
    title: 'Friday',
    dataIndex: 'fri',
    align: 'center',
    width: 200,
    render: renderCell,
  }
]

const MenuTable = (props) => {

  const { data, notice } = props;

  return <>
    <Table
      scroll={{ x: true  }}
      dataSource={data}
      columns={columns}
      pagination={false}
      rowKey={item => item.title}
      footer={() => {
        return <>
          {(notice || []).map(n => <Paragraph style={{marginBottom: 0}}>* {n}</Paragraph>)}
        </>
      }}
    />
  </>

}

MenuTable.propTypes = {
  data: PropTypes.array.isRequired,
  notice: PropTypes.array,
};

MenuTable.defaultProps = {
  data: []
};

export default withRouter(MenuTable);


