import PriceText from '@/components/ui/PriceText'
import {
  ModalWrapper,
  Modal,
  ModalCross,
  ModalImageBox,
  ModalBadge,
  ModalImage,
  MainContentBox,
  ModalTitle,
  ModalStarRate,
  ModalPriceBox,
  ModalText,
  ModalInCartText,
  ModalContainer,
} from './ProductModal.styled'
import { useNavigate, useParams } from 'react-router-dom'
import { getPriceWithDiscount } from '@/shared/helpers/getPriceWithDiscount'
import { getRoute } from '@/shared/helpers/getRoute'
import ProductModalSkeleton from './ProductModalSkeleton'
import { useProductData } from '../hooks/useProductData'
import { useAddToCart } from '../hooks/useAddToCart'
import AddToCartForm from './AddToCartForm'
import { useEffect } from 'react'

export default function ProductModal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, cartProduct } = useProductData(id)
  const { addToCart, loading } = useAddToCart({
    productId: Number(id),
    quantityInCart: cartProduct?.quantity ?? 0,
  })

  const closeModal = () => navigate(getRoute('home'))

  const ScrollToModal = () => {
    const el = document.getElementById('product-modal')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  useEffect(() => ScrollToModal())

  if (!product) {
    return <ProductModalSkeleton />
  }

  const { name, price, description, discount, img, category, rate } = product

  return (
    <ModalWrapper>
      <Modal id="product-modal">
        <ModalContainer>
          <ModalCross onClick={closeModal}>X</ModalCross>
          <ModalImageBox>
            <ModalBadge size="md">{category.name}</ModalBadge>
            <ModalImage src={img} />
          </ModalImageBox>
          <MainContentBox>
            <ModalTitle>{name}</ModalTitle>
            <ModalStarRate rating={rate} size="20px" />
            <ModalPriceBox>
              <PriceText
                type={discount !== 0 ? 'crossed' : 'normal'}
                minWidth={15}
                maxWidth={20}
              >
                ${price}
              </PriceText>
              {discount !== 0 && (
                <PriceText minWidth={20} maxWidth={25}>
                  ${getPriceWithDiscount(price, discount)}
                </PriceText>
              )}
            </ModalPriceBox>
            <ModalText>{description}</ModalText>
            <AddToCartForm
              onSubmit={(data) => addToCart(data.quantity)}
              loading={loading}
            />
            {cartProduct && (
              <ModalInCartText>
                In your cart: <span>{cartProduct.quantity}</span>
              </ModalInCartText>
            )}
          </MainContentBox>
        </ModalContainer>
      </Modal>
    </ModalWrapper>
  )
}
