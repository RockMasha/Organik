import Container from '@/components/ui/Container'
import {
  Section,
  VegetablesList,
  VegetablesSignature,
  VegetablesTitle,
} from './VegetablesSection.styled'
import { useEffect, useState } from 'react'
import type { Product } from '@/types'
import { getVegetables } from '../api/getVegetables'
import { processingRequestResult } from '@/shared/helpers/processingRequestHandlers/processingRequestResult'
import { ProductCard, ProductCardSkeleton } from '@/features/ProductCard'

function VegetablesSection() {
  const [vegetables, setVegetables] = useState<Product[]>([])

  useEffect(() => {
    const setVegetablesData = async () => {
      const answer = await getVegetables()
      const result = processingRequestResult(answer)
      if (result) setVegetables(result.data)
    }
    setVegetablesData()
  }, [])

  return (
    <Section id="vegetables">
      <Container>
        <VegetablesSignature type="green">Offer</VegetablesSignature>
        <VegetablesTitle type="h2">We Offer Organic For You</VegetablesTitle>
        <VegetablesList>
          {vegetables.length > 0 &&
            vegetables.map((data) => <ProductCard data={data} key={data.id} />)}
          {vegetables.length === 0 &&
            new Array(4)
              .fill(0)
              .map((data) => <ProductCardSkeleton key={data.id} />)}
        </VegetablesList>
      </Container>
    </Section>
  )
}

export default VegetablesSection
