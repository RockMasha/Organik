import {
  Section,
  StyledText,
  StyledTitle,
  StyledContainer,
  StyledButton,
  StyledMainPart,
  StyledAdvantageList,
} from './AboutSection.styled'
import Picture from '@/components/ui/Picture'
import Text from '@/components/ui/Text'
import AdvantageItem from './AdvantageItem'
import IconQuality from '@/assets/icons/quality-icon.svg?react'
import IconOrganicFood from '@/assets/icons/organic-food-icon.svg?react'

function AboutSection() {
  return (
    <Section id="about">
      <StyledContainer>
        <Picture name="belive" />
        <StyledMainPart>
          <Text type="green">About Us</Text>

          <StyledTitle type="h2">
            We Believe in Organic Foods For Strong Health
          </StyledTitle>

          <StyledText type="normal">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health, and
            care. We aim to give our customers a healthy chemical-free meal for
            perfect nutrition.
          </StyledText>

          <StyledAdvantageList>
            <AdvantageItem
              Icon={IconOrganicFood}
              title="Organic Foods Only"
              description="The Product that you ordered will be verified that we have
                    or not if have we will start to move on with the next step."
            />
            <AdvantageItem
              Icon={IconQuality}
              title="Quality Standards"
              description="Once your product is packed it will be delivered to your
                    nearby locality you can directly visit the to buy the
                    product."
            />
          </StyledAdvantageList>

          <StyledButton size="default" variant="blue" arrow={true}>
            Shop Now
          </StyledButton>
        </StyledMainPart>
      </StyledContainer>
    </Section>
  )
}

export default AboutSection
