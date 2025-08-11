import {
  Section,
  StyledText,
  StyledTitle,
  StyledOrganicIcon,
  StyledDiv,
  StyledIconQuality,
  StyledContainer,
  StyledButton,
  StyledDivText,
  StyledMainPart,
} from './AboutSection.styled'
import Picture from '@/components/ui/Picture'
import { Button } from '@/components/ui/button'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'

function AboutSection() {
  return (
    <Section id="about">
      <StyledContainer>
        <Picture name={'belive'} />

        <StyledMainPart>
          <Text type={'green'}>About Us</Text>
          <StyledTitle type="h2">
            We Believe in Organic Foods For Strong Health
          </StyledTitle>
          <StyledText type={'normal'}>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health, and
            care. We aim to give our customers a healthy chemical-free meal for
            perfect nutrition.
          </StyledText>

          <StyledDiv>
            <StyledOrganicIcon />
            <div>
              <Title type={'h3-thin'}>Organic Foods Only</Title>
              <StyledDivText type={'normal'}>
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </StyledDivText>
            </div>
          </StyledDiv>

          <StyledDiv>
            <StyledIconQuality />
            <div>
              <Title type={'h3-thin'}>Quality Standards</Title>
              <StyledDivText type={'normal'}>
                Once your product is packed it will be delivered to your nearby
                locality you can directly visit the to buy the product.
              </StyledDivText>
            </div>
          </StyledDiv>

          <StyledButton size={'flattened'} variant={'blue'} arrow={true}>
            Shop Now
          </StyledButton>
        </StyledMainPart>
      </StyledContainer>
    </Section>
  )
}

export default AboutSection
