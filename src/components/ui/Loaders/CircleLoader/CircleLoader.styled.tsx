import styled from '@emotion/styled'
import type { Color } from './CircleLoader'

interface ColorProps {
  color?: Color | undefined
}

function getLoaderColor(type: Color | undefined) {
  switch (type) {
    case 'blue':
      return 'var(--color-navy-100)'
    case 'orange':
      return 'var(--color-orange-300)'
    default:
      return 'var(--color-orange-300)'
  }
}

export const StyledWrapper = styled.div<ColorProps>`
  svg {
    transform-origin: center;
    animation: rotate4 1s linear infinite;
  }

  circle {
    fill: none;
    stroke: ${({ color }) => getLoaderColor(color)};
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`
