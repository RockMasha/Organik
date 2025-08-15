import {
  Button,
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
            <Button>Fruit Juice</Button>
          </Item>
          <Item>
            <Button>Organic Food</Button>
          </Item>
          <Item>
            <Button>Nuts Cookies</Button>
          </Item>
        </List>
      </StyledContainer>
    </Section>
  )
}

export default CategoriesSection
