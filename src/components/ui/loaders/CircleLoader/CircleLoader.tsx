import { StyledWrapper } from './CircleLoader.styled'

export type Color = 'blue' | 'orange'

interface CircleLoaderProps {
  color?: Color
}

function CircleLoader({ color }: CircleLoaderProps) {
  return (
    <StyledWrapper color={color}>
      <svg viewBox="25 25 50 50">
        <circle r={20} cy={50} cx={50} />
      </svg>
    </StyledWrapper>
  )
}

export default CircleLoader
