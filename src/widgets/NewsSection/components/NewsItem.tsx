import { UserIcon } from 'lucide-react'
import {
  InfoWrapper,
  ItemTitleDescription,
  ItemText,
  ItemTitle,
  ListPicture,
  StyledItem,
  WrapperForDate,
} from './NewsSection.styled'
import { Button } from '@/components/ui/button'

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
      <InfoWrapper className="p-[20px]">
        <div className="mb-[10px]">
          <div className="flex gap-[10px]">
            <UserIcon className="w-[18px] h-[20px]" />
            <ItemTitleDescription>{name}</ItemTitleDescription>
          </div>
        </div>
        <ItemTitle type="h3-weight" className="mb-[10px] ">
          {title}
        </ItemTitle>
        <ItemText>{text}</ItemText>
        <Button arrow variant="yellow" className="mt-[28px]">
          Read More
        </Button>
      </InfoWrapper>
    </StyledItem>
  )
}

export default Item
