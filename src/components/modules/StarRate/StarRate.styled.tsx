import styled from '@emotion/styled'
import StarRatingSvg from '@/assets/icons/star-rating.svg?react'

export const StarsWrapper = styled.div<{ size: string }>`
  position: relative;
  height: ${({ size }) => size};
  aspect-ratio: 5 / 1;
  display: inline-block;
`

export const StyledStarRatingSvg = styled(StarRatingSvg)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const StarRatingFillSvg = styled(StyledStarRatingSvg)<{
  widthPercent: number
}>`
  color: var(--color-orange-100);
  z-index: 3;
  clip-path: ${({ widthPercent }) => `inset(0 ${100 - widthPercent}% 0 0)`};
`

export const StarRatingEmptySvg = styled(StyledStarRatingSvg)`
  color: var(--color-gray-400);
  z-index: 2;
`
