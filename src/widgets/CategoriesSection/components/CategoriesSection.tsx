import { getSectionId } from '@/shared/helpers/getSectionId'
import {
  StyledLink,
  Item,
  List,
  Section,
  StyledContainer,
} from './CategoriesSection.styled'

function CategoriesSection() {
  return (
    <Section id={getSectionId('categories')}>
      <StyledContainer>
        <List>
          <Item>
            <StyledLink href="#">Fruit Juice</StyledLink>
          </Item>
          <Item>
            <StyledLink href="#">Organic Food</StyledLink>
          </Item>
          <Item>
            <StyledLink href="#">Nuts Cookies</StyledLink>
          </Item>
        </List>
      </StyledContainer>
    </Section>
  )
}

export default CategoriesSection
