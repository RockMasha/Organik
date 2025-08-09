import styled from '@emotion/styled'
import Text from '@/components/ui/Text'
import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
export const Section = styled.section`
  margin-top: 30px;
  padding: ${responsiveSizing(60, 100, 768, 1440)} 20px
    ${responsiveSizing(70, 115, 768, 1440)};
  text-align: center;
  background-size: cover;
  background-image: image-set(
    url('/images/404/404-320-1x.avif') type('image/avif') 1x,
    url('/images/404/404-320-2x.avif') type('image/avif') 2x,
    url('/images/404/404-320-1x.webp') type('image/webp') 1x,
    url('/images/404/404-320-2x.webp') type('image/webp') 2x,
    url('/images/404/404-320-1x.jpg') 1x,
    url('/images/404/404-320-2x.jpg') 2x
  );
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    padding: ${responsiveSizing(100, 160, 768, 1440)};
    ${responsiveSizing(20, 30, 768, 1440)};
    ${responsiveSizing(115, 170, 768, 1440)};
    ${responsiveSizing(20, 840, 768, 1440)};

    background-image: image-set(
    url('/images/404/404-768-1x.avif') type('image/avif') 1x,
    url('/images/404/404-768-2x.avif') type('image/avif') 2x,
    url('/images/404/404-768-1x.webp') type('image/webp') 1x,
    url('/images/404/404-768-2x.webp') type('image/webp') 2x,
    url('/images/404/404-768-1x.jpg') 1x,
    url('/images/404/404-768-2x.jpg') 2x
  );
  }

  @media screen and (min-width: 1440px) {
    padding: 160px ${responsiveSizing(30, 307, 1440, 1920)} 170px
      ${responsiveSizing(840, 1105, 1440, 1920)};
    text-align: left;
    background-image: image-set(
    url('/images/404/404-1440-1x.avif') type('image/avif') 1x,
    url('/images/404/404-1440-2x.avif') type('image/avif') 2x,
    url('/images/404/404-1440-1x.webp') type('image/webp') 1x,
    url('/images/404/404-1440-2x.webp') type('image/webp') 2x,
    url('/images/404/404-1440-1x.jpg') 1x,
    url('/images/404/404-1440-2x.jpg') 2x
  );
  @media screen and (min-width: 1920px){
    background-image: image-set(
    url('/images/404/404-1920-1x.avif') type('image/avif') 1x,
    url('/images/404/404-1920-2x.avif') type('image/avif') 2x,
    url('/images/404/404-1920-1x.webp') type('image/webp') 1x,
    url('/images/404/404-1920-2x.webp') type('image/webp') 2x,
    url('/images/404/404-1920-1x.jpg') 1x,
    url('/images/404/404-1920-2x.jpg') 2x
  );
  }
  }
`
export const StyledText = styled(Text)`
  font-family: 'Open Sans';
  font-weight: 400;
  letter-spacing: 0.36px;
  margin-top: 10px;
`
export const StyledButton = styled(Button)`
  margin-top: 30px;
`
export const StyledTitle = styled.h1`
  color: var(--color-green-100);
  line-height: 0.8;
  font-size: ${responsiveSizing(100, 220, 320, 768)};
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: ${responsiveSizing(220, 300, 768, 1440)};
  }

  @media screen and (min-width: 1440px) {
    font-size: 300px;
  }
`
