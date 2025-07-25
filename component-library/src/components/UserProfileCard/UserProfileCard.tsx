import { type UserProfileCardProps } from "../../types"

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  const { id, name, email, role, avatarUrl } = user
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-4">
              {user.avatarUrl && (
                <img
                  className="img-fluid rounded-circle"
                  src={avatarUrl}
                  alt={`${name}'s profile photo.`}
                />
              )}
            </div>
            <div className="col-8">
              <h3 className="card-title fs-5">{name}</h3>
              <div className="card-text">
                <ul className="list-unstyled">
                  {showEmail && (
                    <li>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  )}
                  {showRole && <li>{role}</li>}
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
                  data-id={id}
                  onClick={() => {
                    onEdit(id)
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
