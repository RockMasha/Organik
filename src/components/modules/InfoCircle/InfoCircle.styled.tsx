import Text from '@/components/ui/Text'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 5px solid var(--color-green-200);
  padding: 6px;
  background-color: var(--color-white-100);
  box-sizing: border-box;
`

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--color-white-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BoldText = styled.p`
  color: var(--color-navy-100);
  text-align: center;
  font-size: ${responsiveSizing(38, 42, 768, 1440)};
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.36px;
`

export const StyledText = styled(Text)`
  color: var(--color-navy-100);
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 600;
  line-height: 1.8;
  letter-spacing: 0.36px;
`
