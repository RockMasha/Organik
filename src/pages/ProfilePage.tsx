import { Navigate } from 'react-router-dom'

function ProfilePage() {
  return (
    <main>
      <Navigate to="/profile/edit" replace />
    </main>
  )
}

export default ProfilePage
