// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row, Col, List, Card, Image, Avatar } from 'antd';
import PageContainer from 'components/PageContainer';

const { Title, Text, Paragraph, Link } = Typography;

const content = [
  {
    name: 'Song Yang',
    position: 'Owner/Approved Provider',
    location: '',
    photoUrl: '/images/team/team3.jpg',
  },
  {
    name: 'Licien Batista',
    position: 'Operations Manager',
    location: '',
    photoUrl: '/images/team/team1.jpg',
  },
  {
    name: 'Michelle Webb',
    position: 'Director/Nominated Supervisor',
    location: 'North Narrabeen',
    photoUrl: '/images/team/team2.jpg',
  },
  {
    name: 'Vicky Hayes',
    position: 'Assistant Director/Educational Leader',
    location: 'North Narrabeen',
    photoUrl: '/images/team/team4.jpg',
  },
]

const urlLink = 'https://www.acecqa.gov.au/sites/default/files/2018-02/belonging_being_and_becoming_the_early_years_learning_framework_for_australia.pdf';

const TeamPage = (props) => {

  return <PageContainer 
  image="/images/home/2.jpg" 
  bgColor="#ED9CB3"
  contentBgColor="#ED9CB3ee"
  footerImage="/images/logo/pray.png"
  >
    <Title style={{ textAlign: 'center' }}>Management Team</Title>
    <List
      grid={{
        gutter: [48, 48],
        xs: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 2,
        xxl: 2,
      }}
      dataSource={content}
      renderItem={item => <List.Item>
        <Card
          hoverable
          bodyStyle={{ textAlign: 'center' }}
          cover={
          <Image
            preview={false}
            src={item.photoUrl}
          />
          // <Row justify="center" align="middle">
          // <Avatar src={item.photoUrl} size={300}/>
          // </Row>
          }
        >
          <Card.Meta title={item.name} description={<>{item.position} {item.location}</>} />
        </Card>
      </List.Item>}
    />
  </PageContainer>
}

TeamPage.propTypes = {};

TeamPage.defaultProps = {};

export default withRouter(TeamPage);
