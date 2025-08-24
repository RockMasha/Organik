import {
  Section,
  StyledContainer,
  Description,
  Wrapper,
  List,
  DescriptionAuthor,
  StyledStarRate,
} from './TestimonialSection.styled'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import InfoCircle from '@/components/modules/InfoCircle/InfoCircle'

function TestimonialSection() {
  return (
    <Section id="testimonial">
      <StyledContainer>
        <Wrapper>
          <Text type="green">Testimonial</Text>
          <Title className="text-center mb-[40px]" type="h2">
            What Our Customer Saying?
          </Title>
          <picture>
            <source
              srcSet="
                  /images/woman/woman-320-1x.avif 1x,
                  /images/woman/woman-320-2x.avif 2x
                "
              type="image/avif"
            />
            <source
              srcSet="
                  /images/woman/woman-320-1x.webp 1x,
                  /images/woman/woman-320-2x.webp 2x
                "
              type="image/webp"
            />
            <img
              src="/images/woman/woman-320-1x.jpg"
              alt="picture"
              loading="lazy"
            />
          </picture>
          <StyledStarRate rating={5} size={responsiveSizing(27, 30)} />
          <Description>
            The quality of organic produce is extremely high, the service is
            second to none and the taste of the food takes me back to my
            childhood when we were growing our own.
          </Description>
          <Title type="h3-thin">Sara Taylor</Title>
          <DescriptionAuthor>Consumer</DescriptionAuthor>
        </Wrapper>

        <List>
          <li>
            <InfoCircle number="100%" text="Organic" />
          </li>
          <li>
            <InfoCircle number="285" text="Active Product" />
          </li>
          <li>
            <InfoCircle number="385+" text="Organic Orchads" />
          </li>
          <li>
            <InfoCircle number="25+" text="Years of Farming" />
          </li>
        </List>
      </StyledContainer>
    </Section>
  )
}

export default TestimonialSection
