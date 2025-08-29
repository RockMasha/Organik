import Text from '@/components/ui/Text'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const LinksList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 50px;
`

export const InfoItem = styled.li`
  margin: 0 auto;
  width: 100%;
  padding: ${responsiveSizing(14, 25)};
  border: 2px solid var(--color-gray-300);
  border-radius: 25px;
  background-color: var(--color-white-100);

  @media (min-width: 500px) {
    width: ${responsiveSizing(300, 500, 500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
`

export const InfoText = styled(Text)`
  font-size: ${responsiveSizing(16, 24)};
`

export const InfoLabel = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-200);
  margin-bottom: 4px;
`
