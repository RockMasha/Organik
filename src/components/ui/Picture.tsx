import type { Image } from '@/types'

interface PictureProps {
  name: Image
}

const Picture = ({ name }: PictureProps) => {
  return (
    <picture>
      <source
        srcSet={`/images/${name}/${name}-1920-1x.avif 1x, /images/${name}/${name}-1920-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 1920px)"
      />
      <source
        srcSet={`/images/${name}/${name}-1920-1x.webp 1x, /images/${name}/${name}-1920-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 1920px)"
      />
      <source
        srcSet={`/images/${name}/${name}-1920-1x.jpg 1x, /images/${name}/${name}-1920-2x.jpg 2x`}
        media="(min-width: 1920px)"
      />

      <source
        srcSet={`/images/${name}/${name}-1440-1x.avif 1x, /images/${name}/${name}-1440-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`/images/${name}/${name}-1440-1x.webp 1x, /images/${name}/${name}-1440-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`/images/${name}/${name}-1440-1x.jpg 1x, /images/${name}/${name}-1440-2x.jpg 2x`}
        media="(min-width: 1440px)"
      />

      <source
        srcSet={`/images/${name}/${name}-768-1x.avif 1x, /images/${name}/${name}-768-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`/images/${name}/${name}-768-1x.webp 1x, /images/${name}/${name}-768-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`/images/${name}/${name}-768-1x.jpg 1x, /images/${name}/${name}-768-2x.jpg 2x`}
        media="(min-width: 768px)"
      />

      <source
        srcSet={`/images/${name}/${name}-320-1x.avif 1x, /images/${name}/${name}-320-2x.avif 2x`}
        type="image/avif"
        media="(max-width: 767.9px)"
      />
      <source
        srcSet={`/images/${name}/${name}-320-1x.webp 1x, /images/${name}/${name}-320-2x.webp 2x`}
        type="image/webp"
        media="(max-width: 767.9px)"
      />
      <source
        srcSet={`/images/${name}/${name}-320-1x.jpg 1x, /images/${name}/${name}-320-2x.jpg 2x`}
        media="(max-width: 767.9px)"
      />

      <img
        src={`/images/${name}/${name}-320-1x.jpg`}
        alt="picture"
        loading="lazy"
      />
    </picture>
  )
}

export default Picture
