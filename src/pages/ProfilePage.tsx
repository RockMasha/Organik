import { getRoute } from '@/shared/helpers/getRoute'
import { Navigate } from 'react-router-dom'

function ProfilePage() {
  return <Navigate to={getRoute('editProfile')} />
}

export default ProfilePage
