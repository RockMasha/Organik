import { useEffect, useState } from 'react'
import { Section, TitleStyled } from './ProfileSection.styled'
import ProfileList from '@/components/modules/ProfileList/ProfileList'
import { refreshUser } from '@/api/refreshUser'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import useLoading from '@/shared/hooks/useLoading'
import type { User } from '@/types'
import ProductListSkeleton from '@/components/modules/ProfileList/ProductListSkeleton'

function ProfileSection() {
  const [loading, startLoading] = useLoading()
  const [data, setData] = useState<User | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    startLoading(async () => {
      const user = await dispatch(refreshUser()).unwrap()
      setData(user)
    })
  }, [dispatch, useLoading])

  return (
    <Section>
      <TitleStyled type="h1" className="text-center">
        Profile
      </TitleStyled>
      {loading && <ProductListSkeleton />}
      {data && <ProfileList data={data} />}
    </Section>
  )
}

export default ProfileSection
