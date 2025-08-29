function x(r){return`
      background-image: image-set(
      url('/Organic/images/${r}/${r}-320-1x.avif') type('image/avif') 1x,
      url('/Organic/images/${r}/${r}-320-2x.avif') type('image/avif') 2x,
      url('/Organic/images/${r}/${r}-320-1x.webp') type('image/webp') 1x,
      url('/Organic/images/${r}/${r}-320-2x.webp') type('image/webp') 2x,
      url('/Organic/images/${r}/${r}-320-1x.jpg') 1x,
      url('/Organic/images/${r}/${r}-320-2x.jpg') 2x
  );

  @media (min-width: 768px) {
    background-image: image-set(
      url('/Organic/images/${r}/${r}-768-1x.avif') type('image/avif') 1x,
      url('/Organic/images/${r}/${r}-768-2x.avif') type('image/avif') 2x,
      url('/Organic/images/${r}/${r}-768-1x.webp') type('image/webp') 1x,
      url('/Organic/images/${r}/${r}-768-2x.webp') type('image/webp') 2x,
      url('/Organic/images/${r}/${r}-768-1x.jpg') 1x,
      url('/Organic/images/${r}/${r}-768-2x.jpg') 2x
    );
  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url('/Organic/images/${r}/${r}-1440-1x.avif') type('image/avif') 1x,
      url('/Organic/images/${r}/${r}-1440-2x.avif') type('image/avif') 2x,
      url('/Organic/images/${r}/${r}-1440-1x.webp') type('image/webp') 1x,
      url('/Organic/images/${r}/${r}-1440-2x.webp') type('image/webp') 2x,
      url('/Organic/images/${r}/${r}-1440-1x.jpg') 1x,
      url('/Organic/images/${r}/${r}-1440-2x.jpg') 2x
    );
  }

  @media (min-width: 1920px) {
    background-image: image-set(
      url('/Organic/images/${r}/${r}-1920-1x.avif') type('image/avif') 1x,
      url('/Organic/images/${r}/${r}-1920-2x.avif') type('image/avif') 2x,
      url('/Organic/images/${r}/${r}-1920-1x.webp') type('image/webp') 1x,
      url('/Organic/images/${r}/${r}-1920-2x.webp') type('image/webp') 2x,
      url('/Organic/images/${r}/${r}-1920-1x.jpg') 1x,
      url('/Organic/images/${r}/${r}-1920-2x.jpg') 2x
    );
  }
    `}export{x as g};
