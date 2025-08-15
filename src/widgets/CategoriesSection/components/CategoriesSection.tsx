import {
  StyledLink,
  Item,
  List,
  Section,
  StyledContainer,
} from './CategoriesSection.styled'

function CategoriesSection() {
  return (
    <Section id="categories">
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
