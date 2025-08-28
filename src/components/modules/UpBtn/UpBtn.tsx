import { useEffect, useState } from 'react'
import { UpBtnStyled } from './UpBtn.styled'
import ArrowIcon from '@/assets/icons/arrow.svg?react'

const getIsEnoughBottom = () =>
  document.body.scrollTop > 100 || document.documentElement.scrollTop > 100

function UpBtn() {
  const [isEnoughBottom, setIsEnoughBottom] = useState(getIsEnoughBottom())

  useEffect(() => {
    window.onscroll = () => setIsEnoughBottom(getIsEnoughBottom())
    return () => {
      window.onscroll = null
    }
  }, [getIsEnoughBottom()])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isEnoughBottom && (
        <UpBtnStyled onClick={scrollUp} size="icon">
          <ArrowIcon />
        </UpBtnStyled>
      )}
    </>
  )
}

export default UpBtn
