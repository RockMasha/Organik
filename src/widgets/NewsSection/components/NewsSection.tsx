import Container from '@/components/ui/Container'
import {
  Section,
  FormBackground,
  FormButton,
  StyledInput,
  List,
  StyledTitle,
  TitleWrapper,
  FormTitle,
} from './NewsSection.styled'
import { Button } from '@/components/ui/button'
import Text from '@/components/ui/Text'
import Item from './NewsItem'

function NewsSection() {
  return (
    <Section id="news">
      <Container>
        <TitleWrapper>
          <div>
            <Text type="green">News</Text>
            <StyledTitle type="h2">
              Discover weekly content about organic food, & more
            </StyledTitle>
          </div>
          <Button arrow variant="transparent" className="bg-white-100">
            More News
          </Button>
        </TitleWrapper>
        <List>
          <Item
            date="25 Nov"
            name="By Rachi Card"
            title="The Benefits of Vitamin D & How to Get It"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            picture="salad"
          />

          <Item
            date="25 Nov"
            name="By Rachi Card"
            title="Our Favourite Summertime Tommeto"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            picture="tomatoes"
          />
        </List>

        <FormBackground>
          <FormTitle type="h3-weight">Subscribe our Newsletter</FormTitle>
          <form>
            <StyledInput
              variant="transparent"
              size="lg"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <FormButton>Subscribe</FormButton>
          </form>
        </FormBackground>
      </Container>
    </Section>
  )
}

export default NewsSection
