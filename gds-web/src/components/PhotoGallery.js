// import 'App.css';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from 'prop-types';


const Container = styled.div`

`;



const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 1,
    height: 1,
  }
];

const PhotoGallery = (props) => {
  const {images} = props;

  const photos = React.useMemo(() => {
    return images.map(x => ({
      src: x,
      width: 1,
      height: 1,
    }))
  }, [images]);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = React.useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return <Container>
    <Gallery photos={photos} onClick={openLightbox}  />

    <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    {/* <ImageGallery items={images} 
    showBullets={true}
    showIndex={true}
    autoPlay={true}
    showPlayButton={false}
    /> */}
  </Container>
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

PhotoGallery.defaultProps = {
  images: []
};

export default withRouter(PhotoGallery);
