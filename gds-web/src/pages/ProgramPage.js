// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Typography, Row } from 'antd';
import PageContainer from 'components/PageContainer';
import {MdOpenInNew} from 'react-icons/md';
import Icon from '@ant-design/icons';

const { Title, Text, Paragraph, Link } = Typography;
const StyledParagraph = styled(Paragraph)`
  // font-weight: 100;
`;

const StyledLink = styled(Link)`
  color: #ffd100 !important;
  word-break: break-all;

  &:hover {
    text-decoration: underline !important;
  }
`

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

  return <PageContainer 
  image="/images/home/3.jpg" 
  contentBgColor="#7782D7ee"
  bgColor="#7782D7"
  footerImage="/images/logo/balloon.png"
  >
    <Title style={{ textAlign: 'center' }}>Educational Program</Title>
    <StyledParagraph>
      Golden Seeds’ Educational Program is based on the ‘Being Belonging Becoming-Early Years Learning Framework’ for Early Childhood Education & Care services.
    </StyledParagraph>
    <StyledParagraph>
      Our program provides a variety of developmentally appropriate experiences and materials that are encouraged to foster the following goals and skills of:
      <ul>
        {content.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </StyledParagraph>

    <Title level={2} style={{ textAlign: 'center' }}>On Inclusion and Diversity</Title>
    <StyledParagraph>
      These goals are based on the learning outcomes within the framework, which educators strive to meet with the children as they embark on their early childhood journey throughout their time at Golden Seeds.
    </StyledParagraph>
    <StyledParagraph>
      For more information on the EYLF, please click the link below<br />
      <StyledLink href={urlLink} target="_blank">{urlLink} <Icon component={() => <MdOpenInNew />}/> </StyledLink>
    </StyledParagraph>
  </PageContainer>
}

ProgramPage.propTypes = {};

ProgramPage.defaultProps = {};

export default withRouter(ProgramPage);
