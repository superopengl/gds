// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row } from 'antd';

const { Title, Text, Paragraph, Link } = Typography;
const Container = styled.div`

`;

const content = `
Fostering a positive self-concept and self-esteem
Developing and supporting social skills
Building independence and resilience
Developing and supporting children’s cognitive skills such as the ability to think, reason, question, and experiment
Supporting language development and emergent literacy skills
Enhancing physical development and skills
Supporting sound health and safety, personal hygiene, and nutritional practices
Encouraging creative expressions
Supporting respect for cultural and gender diversity of adults and children
Confidently approaching tasks
Demonstrating an understanding of age-appropriate knowledge and skills (colours, shapes, as well as numeracy and literacy recognition etc.)
Participating in group times and collaborative work/play
Developing a positive approach to learning
`.split('\n').map(x => x.trim()).filter(x => x);

const urlLink = 'https://www.acecqa.gov.au/sites/default/files/2018-02/belonging_being_and_becoming_the_early_years_learning_framework_for_australia.pdf';

const ProgramPage = (props) => {

  return <Container>
    <Title style={{ textAlign: 'center' }}>Educational Program</Title>
    <Paragraph>
      Golden Seeds’ Educational Program is based on the ‘Being Belonging Becoming-Early Years Learning Framework’ for Early Childhood Education & Care services.
    </Paragraph>
    <Paragraph>
      Our program provides a variety of developmentally appropriate experiences and materials that are encouraged to foster the following goals and skills of:
      <ul>
        {content.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </Paragraph>

    <Title level={2} style={{ textAlign: 'center' }}>On Inclusion and Diversity</Title>
    <Paragraph>
      These goals are based on the learning outcomes within the framework, which educators strive to meet with the children as they embark on their early childhood journey throughout their time at Golden Seeds.
    </Paragraph>
    <Paragraph>
      For more information on the EYLF, please click the link below<br />
      <Link href={urlLink}>{urlLink}</Link>
    </Paragraph>
  </Container>
}

ProgramPage.propTypes = {};

ProgramPage.defaultProps = {};

export default withRouter(ProgramPage);
