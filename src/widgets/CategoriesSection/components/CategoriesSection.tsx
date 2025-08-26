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
          <Item bg="yello-drink">
            <StyledLink href="#">Fruit Juice</StyledLink>
          </Item>
          <Item bg="green_cucumber">
            <StyledLink href="#">Organic Food</StyledLink>
          </Item>
          <Item bg="cookies">
            <StyledLink href="#">Nuts Cookies</StyledLink>
          </Item>
        </List>
      </StyledContainer>
    </Section>
  )
}

export default CategoriesSection
