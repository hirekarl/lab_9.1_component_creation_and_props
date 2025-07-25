import { type User } from "../../types"
import UserProfileCard from "./UserProfileCard"

export default function UserProfileCardTest() {
  const user: User = {
    id: "9a54d337-8b45-4bb2-a840-a79cc553c186",
    name: "Karl Johnson",
    email: "hirekarl@proton.me",
    role: "Software Engineer",
    avatarUrl: "https://i.ibb.co/4g1jzTrm/karl-johnson-webfriendly.jpgx",
  }

  function handleEditButtonClicked() {
    alert(`You clicked the "Edit" button.`)
  }

  return (
    <div className="row">
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={handleEditButtonClicked}>
        <p className="text-success">
          <small>This candidate is extremely qualified.</small>
        </p>
      </UserProfileCard>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={false}
        onEdit={handleEditButtonClicked}>
        <p className="text-muted">
          <small>A user profile card without role.</small>
        </p>
      </UserProfileCard>
      <UserProfileCard
        user={user}
        showEmail={false}
        showRole={true}
        onEdit={handleEditButtonClicked}>
        <p className="text-muted">
          <small>A user profile card without email.</small>
        </p>
      </UserProfileCard>
      <UserProfileCard user={user} showEmail={true} showRole={true}>
        <p className="text-muted">
          <small>A user profile card without Edit button.</small>
        </p>
      </UserProfileCard>
    </div>
  )
}
