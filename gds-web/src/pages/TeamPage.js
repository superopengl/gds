// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row, Col, List, Card, Image } from 'antd';

const { Title, Text, Paragraph, Link } = Typography;
const Container = styled.div`

`;

const content = [
  {
    name: 'Song Yang',
    position: 'Owner/Approved Provider',
    location: '',
    photoUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Licien Batista',
    position: 'Operations Manager',
    location: '',
    photoUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Michelle Webb',
    position: 'Director/Nominated Supervisor',
    location: 'North Narrabeen',
    photoUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Vicky Hayes',
    position: 'Assistant Director/Educational Leader',
    location: 'North Narrabeen',
    photoUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]

const urlLink = 'https://www.acecqa.gov.au/sites/default/files/2018-02/belonging_being_and_becoming_the_early_years_learning_framework_for_australia.pdf';

const TeamPage = (props) => {

  return <Container>
    <Title style={{ textAlign: 'center' }}>Management Team</Title>
    <List
      grid={{
        gutter: [32, 32],
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      dataSource={content}
      renderItem={item => <List.Item>
        <Card
          hoverable
          bodyStyle={{ textAlign: 'center' }}
          cover={<Image
            preview={false}
            src={item.photoUrl}
          />}
        >
          <Card.Meta title={item.name} description={<>{item.position} {item.location}</>} />
        </Card>
      </List.Item>}
    />
  </Container>
}

TeamPage.propTypes = {};

TeamPage.defaultProps = {};

export default withRouter(TeamPage);
