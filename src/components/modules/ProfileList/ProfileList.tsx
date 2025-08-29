import { Button, LinkButton } from '@/components/ui/button'
import {
  InfoItem,
  InfoLabel,
  InfoList,
  InfoText,
  LinksList,
} from './ProfileList.styled'
import type { RouteWithoutId } from '@/types'

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
  const infoItems = [
    { label: 'First Name', value: data.first_name },
    { label: 'Last Name', value: data.last_name },
    { label: 'Phone number', value: data.phone },
    { label: 'Address', value: data.address },
  ]

  const infoLinks: { link: RouteWithoutId; name: string }[] = [
    { link: 'editProfile', name: 'Edit Profile' },
    { link: 'cart', name: 'Cart' },
    { link: 'orderHistory', name: 'Order History' },
  ]

  return (
    <>
      <InfoList>
        {infoItems.map((obj) => (
          <InfoItem key={obj.label}>
            <InfoLabel>{obj.label}</InfoLabel>
            <InfoText>{obj.value}</InfoText>
          </InfoItem>
        ))}
      </InfoList>
      <LinksList>
        {infoLinks.map((obj) => (
          <li key={obj.name}>
            <LinkButton variant="blue" link={obj.link}>
              {obj.name}
            </LinkButton>
          </li>
        ))}
        <li>
          <Button variant="yellow">logout</Button>
        </li>
      </LinksList>
    </>
  )
}

export default ProfileList
