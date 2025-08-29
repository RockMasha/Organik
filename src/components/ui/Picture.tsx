import type { Image } from '@/types'

interface PictureProps {
  name: Image
  className?: string
  lazy?: boolean
}

const Picture = ({ name, className, lazy }: PictureProps) => {
  return (
    <picture className={className}>
      <source
        srcSet={`/Organic/images/${name}/${name}-1920-1x.avif 1x, /Organic/images/${name}/${name}-1920-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 1920px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-1920-1x.webp 1x, /Organic/images/${name}/${name}-1920-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 1920px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-1920-1x.jpg 1x, /Organic/images/${name}/${name}-1920-2x.jpg 2x`}
        media="(min-width: 1920px)"
      />

      <source
        srcSet={`/Organic/images/${name}/${name}-1440-1x.avif 1x, /Organic/images/${name}/${name}-1440-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-1440-1x.webp 1x, /Organic/images/${name}/${name}-1440-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-1440-1x.jpg 1x, /Organic/images/${name}/${name}-1440-2x.jpg 2x`}
        media="(min-width: 1440px)"
      />

      <source
        srcSet={`/Organic/images/${name}/${name}-768-1x.avif 1x, /Organic/images/${name}/${name}-768-2x.avif 2x`}
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-768-1x.webp 1x, /Organic/images/${name}/${name}-768-2x.webp 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-768-1x.jpg 1x, /Organic/images/${name}/${name}-768-2x.jpg 2x`}
        media="(min-width: 768px)"
      />

      <source
        srcSet={`/Organic/images/${name}/${name}-320-1x.avif 1x, /Organic/images/${name}/${name}-320-2x.avif 2x`}
        type="image/avif"
        media="(max-width: 767.9px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-320-1x.webp 1x, /Organic/images/${name}/${name}-320-2x.webp 2x`}
        type="image/webp"
        media="(max-width: 767.9px)"
      />
      <source
        srcSet={`/Organic/images/${name}/${name}-320-1x.jpg 1x, /Organic/images/${name}/${name}-320-2x.jpg 2x`}
        media="(max-width: 767.9px)"
      />

      <img
        src={`/Organic/images/${name}/${name}-320-1x.jpg`}
        alt="picture"
        loading={getLoading(lazy)}
      />
    </picture>
  )
}

const getLoading = (lazy: boolean | undefined) => {
  switch (lazy) {
    case true:
      return 'lazy'
    case false:
      return 'eager'
    default:
      return 'lazy'
  }
}

export default Picture
