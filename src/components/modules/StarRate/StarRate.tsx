import {
  StarRatingEmptySvg,
  StarRatingFillSvg,
  StarsWrapper,
} from './StarRate.styled'

interface StarRatingProps {
  rating: number
  size: string
}

const StarRate = ({ rating, size }: StarRatingProps) => {
  const widthPercent = (rating / 5) * 100

  return (
    <StarsWrapper size={size}>
      <StarRatingFillSvg widthPercent={widthPercent} />
      <StarRatingEmptySvg />
    </StarsWrapper>
  )
}

export default StarRate
