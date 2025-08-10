import styled from '@emotion/styled'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
import Title from '@/components/ui/Title'
import { Button } from '@/components/ui/button'
export const Section = styled.section`
  margin-top: ${responsiveSizing(30, 47, 320, 768)};
  padding: ${responsiveSizing(79, 110, 320, 768)}
    ${responsiveSizing(20, 30, 320, 768)} ${responsiveSizing(90, 120, 320, 768)};
  text-align: left;
  background-size: cover;
  background-image: image-set(
    url('/images/choose-the-best/choose-the-best-320-1x.avif')
      type('image/avif') 1x,
    url('/images/choose-the-best/choose-the-best-320-2x.avif')
      type('image/avif') 2x,
    url('/images/choose-the-best/choose-the-best-320-1x.webp')
      type('image/webp') 1x,
    url('/images/choose-the-best/choose-the-best-320-2x.webp')
      type('image/webp') 2x,
    url('/images/choose-the-best/choose-the-best-320-1x.jpg') 1x,
    url('/images/choose-the-best/choose-the-best-320-2x.jpg') 2x
  );
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    margin-top: ${responsiveSizing(47, 40, 768, 1440)};
    padding: ${responsiveSizing(100, 220, 768, 1440)} 30px
      ${responsiveSizing(120, 250, 768, 1440)};

    background-image: image-set(
      url('/images/choose-the-best/choose-the-best-768-1x.avif')
        type('image/avif') 1x,
      url('/images/choose-the-best/choose-the-best-768-2x.avif')
        type('image/avif') 2x,
      url('/images/choose-the-best/choose-the-best-768-1x.webp')
        type('image/webp') 1x,
      url('/images/choose-the-best/choose-the-best-768-2x.webp')
        type('image/webp') 2x,
      url('/images/choose-the-best/choose-the-best-768-1x.jpg') 1x,
      url('/images/choose-the-best/choose-the-best-768-2x.jpg') 2x
    );
  }

  @media screen and (min-width: 1440px) {
    margin-top: ${responsiveSizing(40, 58, 1440, 1920)};
    padding: 220px ${responsiveSizing(30, 260, 1440, 1920)} 250px;
    text-align: left;
    background-image: image-set(
      url('/images/choose-the-best/choose-the-best-1440-1x.avif')
        type('image/avif') 1x,
      url('/images/choose-the-best/choose-the-best-1440-2x.avif')
        type('image/avif') 2x,
      url('/images/choose-the-best/choose-the-best-1440-1x.webp')
        type('image/webp') 1x,
      url('/images/choose-the-best/choose-the-best-1440-2x.webp')
        type('image/webp') 2x,
      url('/images/choose-the-best/choose-the-best-1440-1x.jpg') 1x,
      url('/images/choose-the-best/choose-the-best-1440-2x.jpg') 2x
    );
    @media screen and (min-width: 1920px) {
      margin-top: 58px;
      padding: 220px 260px 250px;
      background-image: image-set(
        url('/images/choose-the-best/choose-the-best-1920-1x.avif')
          type('image/avif') 1x,
        url('/images/choose-the-best/choose-the-best-1920-2x.avif')
          type('image/avif') 2x,
        url('/images/choose-the-best/choose-the-best-1920-1x.webp')
          type('image/webp') 1x,
        url('/images/choose-the-best/choose-the-best-1920-2x.webp')
          type('image/webp') 2x,
        url('/images/choose-the-best/choose-the-best-1920-1x.jpg') 1x,
        url('/images/choose-the-best/choose-the-best-1920-2x.jpg') 2x
      );
    }
  }
`
export const StyledTitle = styled(Title)`
  margin-top: ${responsiveSizing(15, 30, 320, 768)};
  width: ${responsiveSizing(260, 380, 320, 768)};
  @media screen and (min-width: 768px) {
    width: ${responsiveSizing(380, 500, 768, 1440)};
    margin-top: 30px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`
export const StyledButton = styled(Button)`
  margin-top: 30px;
`
