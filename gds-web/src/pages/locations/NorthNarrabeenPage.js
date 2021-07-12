import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, Carousel, Space, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { Logo } from 'components/Logo';
import ImageCarousel from 'components/ImageCarousel';
import PageContainer from 'components/PageContainer';
import MenuTable from 'components/MenuTable';
import PhotoGallery from 'components/PhotoGallery';
import { Descriptions } from 'antd';
import { HomeOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';
import ContactPanel from 'components/ContactPanel';

const { Title, Paragraph } = Typography;


const menuList = [
  {
    title: 'Morning Tea',
    mon: {
      content: 'Wholemeal Corn Thins with Cottage Cheese and Tomato',
      strong: 'Mixed Fruit & Vegetable Platter',
    },
    tue: {
      content: 'Wholemeal Rice Crackers  with Cheese',
      strong: 'Mixed Fruit & Vegetable Platter',
    },
    wed: {
      content: 'Wholemeal Turkish Breads with Roasted Sweet Potato Hummus',
      strong: 'Mixed Fruit & Vegetable Platter',
    },
    thu: {
      content: 'Pineapple & Coconut Bliss Balls',
      strong: 'Mixed Fruit & Vegetable Platter',
    },
    fri: {
      content: 'Toasted Wholemeal English Muffins with Spreads',
      strong: 'Mixed Fruit & Vegetable Platter',
    },
  },
  {
    title: 'Lunch',
    mon: {
      content: 'Pumpkin & Lentil Soup  with Wholemeal Croutons',
      strong: 'Sliced Oranges & Water',
    },
    tue: {
      content: 'Moroccan Chicken with Capsicum, Carrot & Pumpkin Cous Cous',
      strong: 'Water',
    },
    wed: {
      content: 'Chow Mein with Cabbage, Carrots, Water Chestnuts & Rice',
      strong: 'Water',
    },
    thu: {
      content: 'Pineapple & Coconut Bliss Balls',
      strong: 'Water',
    },
    fri: {
      content: 'Salmon Fish Cakes with Tomato & Cucumber side Salad',
      strong: 'Water',
    },
  },
  {
    title: 'Afternoon Tea',
    mon: {
      content: 'Cheesy Herb, Homemade Rolls',
      strong: 'Mixed Fruit, Sultanas & Vegetable Platter Milk or Water',
    },
    tue: {
      content: 'Vanilla Yogurt with Banana & Muesli',
      strong: 'Mixed Fruit & Vegetable Platter Milk or Water',
    },
    wed: {
      content: 'Baked Apple & Cinnamon Pockets',
      strong: 'Mixed Fruit & Vegetable Platter Milk or Water',
    },
    thu: {
      content: 'Wholemeal Mixed Sandwiches',
      strong: 'Mixed Fruit & Vegetable Platter Milk or Water',
    },
    fri: {
      content: 'Vegemite & Cheese Scrolls',
      strong: 'Mixed Fruit, Sultanas & Vegetable Platter Milk or Water',
    },
  },
  {
    title: 'Late Snack',
    mon: {
      content: 'Vegetable Platter, Rice crackers & Cheese',
    },
    tue: {
      content: 'Vegetable Platter, Rice crackers & Cheese',
    },
    wed: {
      content: 'Vegetable Platter, Rice crackers & Cheese',
    },
    thu: {
      content: 'Vegetable Platter, Rice crackers & Cheese',
    },
    fri: {
      content: 'Vegetable Platter, Rice crackers & Cheese',
    },
  }
]

const NorthNarrabeenPage = () => {

  return (
    <PageContainer
      image="/images/home/2.jpg"
      contentMaxWidth={1600}
      footerImage="/images/logo/happy.png"
      bgColor="#00c1d5"
      contentBgColor="#00c1d5ee"
      title={<Title style={{ textAlign: 'center', color:'#280071ee' }}>
        North Narrabeen
      </Title>}
    >
      <Paragraph>
        We imagine every child to be like a little seed - they are born with everything they need to thrive. We support children to unlock their full potential by providing them with a welcoming environment and the loving guidance they need to flourish. We place developing and maintaining meaningful relationships at the heart of all we do.
      </Paragraph>
      <Title level={2} style={{ marginTop: 20 }}>Menu</Title>
      <MenuTable data={menuList} notice={[
        'Water is freely available throughout the day',
        'Please see the notice board in reception for any daily menu changes'
      ]} />
      <Title level={2} style={{ marginTop: 60 }}>Gallery</Title>
      <PhotoGallery
        images={[
          'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          'https://source.unsplash.com/Dm-qxdynoEc/800x799',
          'https://source.unsplash.com/qDkso9nvCg0/600x799',
          'https://source.unsplash.com/iecJiKe_RNg/600x799',
          'https://source.unsplash.com/epcsn8Ed8kY/600x799',
          'https://source.unsplash.com/NQSWvyVRIJk/800x599',
          'https://source.unsplash.com/zh7GEuORbUw/600x799',
          'https://source.unsplash.com/PpOHJezOalU/800x599',
          'https://source.unsplash.com/I1ASdgphUH4/800x599',
          'https://source.unsplash.com/XiDA78wAZVw/600x799',
          'https://source.unsplash.com/x8xJpClTvR0/800x599',
          'https://source.unsplash.com/u9cG4cuJ6bU/4927x1000',
          'https://source.unsplash.com/qGQNmBE7mYw/800x599',
          'https://source.unsplash.com/NuO6iTBkHxE/800x599',
          'https://source.unsplash.com/pF1ug8ysTtY/600x400',
          'https://source.unsplash.com/A-fubu9QJxE/800x533',
          'https://source.unsplash.com/5P91SF0zNsI/740x494'
        ]}
      />
      <Title level={2} style={{ marginTop: 60 }}>Contact</Title>
      <ContactPanel
        address="26 Troy St, Campsie NSW 2194"
        phone="02 8580 9588"
        email="narrabeen@goldenseeds.com.au"
        website="https://www.goldenseeds.com.au"
      />
    </PageContainer>
  );
}

NorthNarrabeenPage.propTypes = {};

NorthNarrabeenPage.defaultProps = {};

export default withRouter(NorthNarrabeenPage);
