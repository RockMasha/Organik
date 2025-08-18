import {
  MarkedText,
  Section,
  StyledContainer,
  StyledDescript,
  StyledDiv,
  StyledList,
  StyledName,
  StyledNameDescrp,
  StyledStarRate,
  StyledTitle,
} from './TestimonialSection.styled'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Circle from '@/components/ui/Circle'
import IconArrowCart from '@/assets/icons/cart-arrow.svg?react'

function TestimonialSection() {
  return (
    <Section id="testimonial">
      <StyledContainer>
        <StyledDiv>
          <IconArrowCart className="arrow arrow-left" />
          <div className="testimonial-content">
            <MarkedText>Testimonial</MarkedText>
            <StyledTitle type="h2">What Our Customer Saying?</StyledTitle>
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
            <StyledDescript>
              The quality of organic produce is extremely high, the service is
              second to none and the taste of the food takes me back to my
              childhood when we were growing our own.
            </StyledDescript>
            <StyledName type="h3-thin">Sara Taylor</StyledName>
            <StyledNameDescrp>Consumer</StyledNameDescrp>
          </div>
          <IconArrowCart className="arrow arrow-right" />
        </StyledDiv>

        <StyledList>
          <li>
            <Circle number="100%" text="Organic" />
          </li>
          <li>
            <Circle number="285" text="Active Product" />
          </li>
          <li>
            <Circle number="385+" text="Organic Orchads" />
          </li>
          <li>
            <Circle number="25+" text="Years of Farming" />
          </li>
        </StyledList>
      </StyledContainer>
    </Section>
  )
}

export default TestimonialSection
