import Container from '@/components/ui/Container'
import {
  PositionedDiv,
  Section,
  StyledFormBackground,
  StyledFormButton,
  StyledFormText,
  StyledInput,
  StyledItem,
  StyledList,
  StyledMark,
  StyledName,
  StyledPicture,
  StyledSvg,
  StyledTextCard,
  StyledTitle,
  StyledTitleCard,
} from './NewsSection.styled'
import { Button } from '@/components/ui/button'
import userIcon from '@/assets/icons/user.svg'

function NewsSection() {
  return (
    <Section id="news">
      <Container>
        <div>
          <div>
            <StyledMark>News</StyledMark>
            <StyledTitle type="h2">
              Discover The Recent Content About Organic Products
            </StyledTitle>
          </div>
          <Button arrow variant="transparent" className="mb-10">
            More News
          </Button>
        </div>
        <StyledList>
          <StyledItem>
            <div className="relative">
              <StyledPicture name="salad" />
              <PositionedDiv>
                <p>14 Feb</p>
              </PositionedDiv>
            </div>
            <div className="p-[20px]">
              <div className="mb-[10px]">
                <div className="flex gap-[10px]">
                  <StyledSvg src={userIcon} alt="avatar" />
                  <StyledName>Kristina Castle</StyledName>
                </div>
              </div>
              <StyledTitleCard className="mb-[10px]">
                Everything You Need to Know About Organic
              </StyledTitleCard>
              <StyledTextCard>
                Organic farming is the only way that you still can experience
                the real world.
              </StyledTextCard>
              <Button
                arrow
                variant="transparent"
                className="border-none bg-transparent p-0 mt-[28px]"
              >
                View More
              </Button>
            </div>
          </StyledItem>

          <StyledItem>
            <div className="relative">
              <StyledPicture name="tomatoes" />
              <PositionedDiv>
                <p>20 Feb</p>
              </PositionedDiv>
            </div>
            <div className="p-[20px]">
              <div className="mb-[10px]">
                <div className="flex gap-[10px]">
                  <StyledSvg src={userIcon} alt="avatar" />
                  <StyledName>Alex Louis</StyledName>
                </div>
              </div>
              <StyledTitleCard className="mb-[10px]">
                Organic Fruits: Surprising Benefits and Facts
              </StyledTitleCard>
              <StyledTextCard>
                The world of nature has grown on the principles of health,
                ecology, and care.
              </StyledTextCard>
              <Button
                arrow
                variant="transparent"
                className="border-none bg-transparent p-0 mt-[28px]"
              >
                View More
              </Button>
            </div>
          </StyledItem>
        </StyledList>

        <StyledFormBackground>
          <StyledFormText type="h3-weight">
            Subscribe our Newsletter
          </StyledFormText>
          <form>
            <StyledInput type="text" placeholder="Enter Your Email Address" />
            <StyledFormButton>Subscribe</StyledFormButton>
          </form>
        </StyledFormBackground>
      </Container>
    </Section>
  )
}

export default NewsSection
