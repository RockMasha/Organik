import Container from '@/components/ui/Container'
import {
  BackgroundPicture,
  Section,
  List,
  ListTitle,
  StyledTitle,
  Wrapper,
} from './EcoFriendlySection.styled'
import Text from '@/components/ui/Text'
import { getSectionId } from '@/shared/helpers/getSectionId'

function EcoFriendlySection() {
  return (
    <Section id={getSectionId('ecoFriendly')} className="relative">
      <BackgroundPicture />
      <Container>
        <Wrapper>
          <Text type="green" className="mt-[40px]">
            Eco Friendly
          </Text>
          <StyledTitle type="h2">
            Econis is a Friendly Organic Store
          </StyledTitle>
          <List>
            <li>
              <ListTitle type="h3-thin">Start with Our Company First</ListTitle>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </Text>
            </li>
            <li>
              <ListTitle type="h3-thin">Learn How to Grow Yourself</ListTitle>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </Text>
            </li>
            <li>
              <ListTitle type="h3-thin">Farming Strategies of Today</ListTitle>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </Text>
            </li>
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default EcoFriendlySection
