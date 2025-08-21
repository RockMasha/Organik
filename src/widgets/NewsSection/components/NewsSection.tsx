import Container from '@/components/ui/Container'
import {
  WrapperForDate,
  Section,
  FormBackground,
  FormButton,
  StyledInput,
  StyledItem,
  List,
  ItemName,
  ListPicture,
  ItemText,
  StyledTitle,
  ItemTitle,
  TitleWrapper,
  FormTitle,
  PositionedWrapper,
} from './NewsSection.styled'
import { Button } from '@/components/ui/button'
import UserIcon from '@/assets/icons//user.svg?react'
import Text from '@/components/ui/Text'

type ItemProps = {
  date: string
  name: string
  title: string
  text: string
  picture: string
}

const Item = ({ date, name, title, text, picture }: ItemProps) => {
  return (
    <StyledItem>
      <div className="relative">
        <ListPicture name={picture} />
        <WrapperForDate variant="transparent">
          <p className="md:[&>span]:block text-center">
            {date.split(' ').map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </p>
        </WrapperForDate>
      </div>
      <PositionedWrapper className="p-[20px]">
        <div className="mb-[10px]">
          <div className="flex gap-[10px]">
            <UserIcon className="w-[18px] h-[20px]" />
            <ItemName>{name}</ItemName>
          </div>
        </div>
        <ItemTitle type="h3-weight" className="mb-[10px] ">
          {title}
        </ItemTitle>
        <ItemText>{text}</ItemText>
        <Button arrow variant="yellow" className="mt-[28px]">
          Read More
        </Button>
      </PositionedWrapper>
    </StyledItem>
  )
}

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
            <StyledInput type="text" placeholder="Enter Your Email Address" />
            <FormButton>Subscribe</FormButton>
          </form>
        </FormBackground>
      </Container>
    </Section>
  )
}

export default NewsSection
