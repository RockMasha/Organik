import { getRoute } from '@/shared/helpers/getRoute'
import { Navigate } from 'react-router-dom'

function ProfilePage() {
  return (
    <main>
      <Navigate to={getRoute('editProfile')} replace />
    </main>
  )
}

export default ProfilePage
