import { StyledWrapper } from './CircleLoader.styled'

export type Color = 'blue' | 'orange'

interface CircleLoaderProps {
  color?: Color
  size?: string
  className?: string
}

function CircleLoader({ color, size, className }: CircleLoaderProps) {
  return (
    <StyledWrapper color={color} className={className}>
      <svg viewBox="25 25 50 50" width={size} height={size}>
        <circle r={20} cy={50} cx={50} />
      </svg>
    </StyledWrapper>
  )
}

export default CircleLoader
