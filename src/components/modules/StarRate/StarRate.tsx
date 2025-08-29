import {
  StarRatingEmptySvg,
  StarRatingFillSvg,
  StarsWrapper,
} from './StarRate.styled'

interface StarRatingProps {
  rating: number
  size: string
  className?: string
}

const StarRate = ({ rating, size, className }: StarRatingProps) => {
  const widthPercent = (rating / 5) * 100

  return (
    <StarsWrapper size={size} className={className}>
      <StarRatingFillSvg widthPercent={widthPercent} />
      <StarRatingEmptySvg />
    </StarsWrapper>
  )
}

export default StarRate
