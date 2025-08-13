import StarRate from '@/components/modules/StarRate/StarRate'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Text from '@/components/ui/Text'
import responsiveSizing from '@/styles/helpers/resonsiceSizing'
import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-white-opacity);
  z-index: 10;
`

export const Modal = styled.div`
  width: 100%;
  padding-top: ${responsiveSizing(48, 96)};
  padding-bottom: ${responsiveSizing(72, 144)};
  background-color: var(--color-white-100);
`

export const ModalContainer = styled.div`
  position: relative;
  padding: 0 ${responsiveSizing(30, 100, 320, 768)};
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${responsiveSizing(22, 88, 768)};
    padding: 0 ${responsiveSizing(50, 100, 768, 1440)};
  }
  @media (min-width: 1440px) {
    padding: 0 ${responsiveSizing(200, 260, 1440)};
  }
`

export const ModalCross = styled.button`
  padding-top: ${responsiveSizing(6, 11)};
  padding-bottom: ${responsiveSizing(6, 11)};
  padding-left: ${responsiveSizing(12, 25)};
  padding-right: ${responsiveSizing(12, 25)};
  position: absolute;
  right: ${responsiveSizing(30, 100, 320, 768)};
  top: 0;
  color: var(--color-white-100);
  background-color: var(--color-navy-100);
  border-radius: 16px;
  z-index: 20;
`

export const ModalImageBox = styled.div`
  margin-bottom: ${responsiveSizing(20, 30, 320, 768)};
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const ModalBadge = styled(Badge)`
  position: absolute;
  top: ${responsiveSizing(20, 35)};
  left: ${responsiveSizing(20, 35)};
`

export const ModalImage = styled.img`
  min-width: ${responsiveSizing(250, 400, 320, 768)};
  min-height: ${responsiveSizing(250, 400, 320, 768)};
  max-width: ${responsiveSizing(250, 400, 320, 768)};
  max-height: ${responsiveSizing(250, 400, 320, 768)};
  background-color: var(--color-white-200);
  border-radius: 30px;
  @media (min-width: 768px) {
    min-width: ${responsiveSizing(300, 600, 768)};
    min-height: ${responsiveSizing(300, 600, 768)};
    max-width: ${responsiveSizing(300, 600, 768)};
    max-height: ${responsiveSizing(300, 600, 768)};
  }
`

export const MainContentBox = styled.div``

export const ModalTitle = styled.h2`
  font-size: ${responsiveSizing(25, 30, 320, 768)};
  color: var(--color-navy-100);
  font-weight: 600;
  margin-bottom: ${responsiveSizing(4, 9)};
  @media (min-width: 768px) {
    font-size: ${responsiveSizing(25, 40, 768)};
  }
`

export const ModalStarRate = styled(StarRate)`
  transform: translateX(-9%);
`

export const ModalPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${responsiveSizing(4, 9)};
  margin-bottom: ${responsiveSizing(10, 25)};
`

export const ModalText = styled(Text)`
  margin-bottom: ${responsiveSizing(17, 35)};
  font-size: ${responsiveSizing(14, 18)};
  @media (min-width: 1920px) {
    width: 658px;
  }
`

export const ModalCartForm = styled.form`
  display: flex;
  gap: ${responsiveSizing(10, 21)};
`

export const ModalCartLabel = styled.label`
  position: relative;
  align-items: center;
  display: flex;
  gap: ${responsiveSizing(10, 21)};
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(14, 20)};
  font-weight: 700;
  white-space: nowrap;
`

export const ModalCartInput = styled('input')<{ symbolNumb: number }>`
  width: ${({ symbolNumb }) => {
    const maxSymbol = Math.max(symbolNumb, 1)
    return `${Math.min(maxSymbol, 3)}ch`
  }};
  padding-top: ${responsiveSizing(12, 28)};
  padding-bottom: ${responsiveSizing(12, 28)};
  padding-left: ${responsiveSizing(12, 60)};
  padding-right: ${responsiveSizing(12, 60)};
  box-sizing: content-box;
  border: 2px solid var(--color-navy-100);
  border-radius: 16px;
`

export const ModalCartError = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  color: var(--color-red-100);
  font-size: ${responsiveSizing(12, 18)};
`

export const ModalBtn = styled(Button)`
  padding-top: ${responsiveSizing(10, 24)};
  padding-bottom: ${responsiveSizing(10, 24)};
  padding-left: ${responsiveSizing(16, 40)};
  padding-right: ${responsiveSizing(16, 40)};
  font-size: ${responsiveSizing(12, 20)};
`

export const ModalInCartText = styled(Text)`
  margin-top: ${responsiveSizing(17, 25)};
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(14, 20)};
  font-weight: 600;
  span {
    font-size: ${responsiveSizing(16, 22)};
    font-weight: 800;
    color: var(--color-green-100);
  }
`
