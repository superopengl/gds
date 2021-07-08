// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row } from 'antd';

const { Title, Text, Paragraph } = Typography;
const Container = styled.div`

`;

const content = [
  {
    title: 'Our Children',
    list: `
    Children have their own knowledge, ideas and interests
    Respectful and caring relationships
    Play based program
    Holistic approach
    Life-skills, collaborative learning and self-regulation
    Environment as the third teacher
    Being connected to our world (natural world)
    Develop in their own time at their own pace
    Belonging, Being and Becoming
    `,
  },
  {
    title: 'Our Families',
    list: `
    Open communication and reciprocal partnerships
    Recognised and respected as child’s first and foremost teacher
    Empowered to share in decision making about their child’s learning and wellbeing
    Encouraged to participate in their child’s learning journey
`,
  },
  {
    title: 'Our Educators',
    list: `
    Respectful, timely and professional communication 
    Ongoing professional development – lifelong learning
    Co-learners with children 
    Advocate for the rights of children
    `,
  },
  {
    title: 'Our Community',
    list: `
    Partner with local primary schools
    Develop relationships with local services & businesses
    Be an integral member of and resource to our community
    Offer help and support to families in our community
    `,
  }
];

const ContentSection = props => {
  const { title, list } = props;

  return <section>
    <Row justify="center">
      <Title level={2}>{title}</Title>
    </Row>
    <Row justify="center">

      <Paragraph>
        <ul>
          {list.split('\n').map(x => x.trim()).filter(x => x).map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
      </Paragraph>
    </Row>
  </section>
}

const PhilosophyPage = (props) => {

  return <Container>
    <Title style={{ textAlign: 'center' }}>GOLDEN SEEDS SERVICE PHILOSOPHY</Title>
    {content.map((c, i) => <ContentSection key={i} title={c.title} list={c.list} />)}

    <Title level={2} style={{ textAlign: 'center' }}>On Inclusion and Diversity</Title>
    <Paragraph>
      Each individual child, family and team member have the right to learn and are encouraged to develop and grow to their full potential. This is true regardless of gender, ethnicity, religion, abilities or social cultural background. Differences and individuality amongst educators, children and families are valued and considered in all interactions, programs, and service delivery.
    </Paragraph>
    <Paragraph type="danger">
      *Please also see our Acknowledgement of Country.
    </Paragraph>
    <Paragraph>
      Revised: August 2020
    </Paragraph>
  </Container>
}

PhilosophyPage.propTypes = {};

PhilosophyPage.defaultProps = {};

export default withRouter(PhilosophyPage);


