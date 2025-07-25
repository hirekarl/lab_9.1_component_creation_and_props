import { type UserProfileCardProps } from "../../types"

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  const profilePhotoAltText = `${user.name}'s profile photo.`
  const emailMailtoUrl = `mailto:${user.email}`
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-4">
              {user.avatarUrl && (
                <img
                  className="img-fluid rounded-circle"
                  src={user.avatarUrl}
                  alt={profilePhotoAltText}
                />
              )}
            </div>
            <div className="col-8">
              <h2 className="card-title fs-5">{user.name}</h2>
              <div className="card-text">
                <ul className="list-unstyled">
                  {showEmail && (
                    <li>
                      <a href={emailMailtoUrl}>{user.email}</a>
                    </li>
                  )}
                  {showRole && <li>{user.role}</li>}
                </ul>
              </div>
            </div>
          </div>
          {children && (
            <div className="row">
              <div className="col text-center">{children}</div>
            </div>
          )}
          {onEdit && (
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => {
                    onEdit(user.id)
                  }}>
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
