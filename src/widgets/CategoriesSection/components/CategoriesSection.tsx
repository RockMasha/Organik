import {
  Link,
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
            <Link href="#">Fruit Juice</Link>
          </Item>
          <Item>
            <Link href="#">Organic Food</Link>
          </Item>
          <Item>
            <Link href="#">Nuts Cookies</Link>
          </Item>
        </List>
      </StyledContainer>
    </Section>
  )
}

export default CategoriesSection
