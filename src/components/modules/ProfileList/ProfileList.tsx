import { LinkButton } from '@/components/ui/button'
import {
  InfoItem,
  InfoLabel,
  InfoList,
  InfoText,
  LinksList,
} from './ProfileList.styled'

interface ProfileData {
  phone: string | null
  first_name: string | null
  last_name: string | null
  address: string | null
}

type ProfileProps = {
  data: ProfileData
}

function ProfileList({ data }: ProfileProps) {
  return (
    <>
      <InfoList>
        <InfoItem>
          <InfoLabel>First Name</InfoLabel>
          <InfoText>{data.first_name}</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Last Name</InfoLabel>
          <InfoText>{data.last_name}</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Phone number</InfoLabel>
          <InfoText>{data.phone}</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Address</InfoLabel>
          <InfoText>{data.address}</InfoText>
        </InfoItem>
      </InfoList>
      <LinksList>
        <li>
          <LinkButton variant="blue" link="editProfile">
            Edit Profile
          </LinkButton>
        </li>
        <li>
          <LinkButton variant="blue" link="cart">
            Cart
          </LinkButton>
        </li>
        <li>
          <LinkButton variant="blue" link="home">
            Order History
          </LinkButton>
        </li>
      </LinksList>
    </>
  )
}

export default ProfileList
