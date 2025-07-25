/**
 * Component: UserProfileCard
 *
 * Props (UserProfileCardProps):
 * - user: User                           The User whose
 *                                        UserProfileCard to
 *                                        render.
 *
 * - showEmail?: boolean                  Indicates whether to
 *                                        display user's email
 *                                        address.
 *
 * - showRole?: boolean                   Indicates whether to
 *                                        display user's role.
 *
 * - onEdit?: (userId: string) => void    Code to run when
 *                                        "Edit" button is
 *                                        clicked.
 *
 * - children?: React.ReactNode           Any children passed
 *                                        from the parent Com-
 *                                        ponent.
 *
 * Usage:
 * - To render, invoke `UserProfileCard` with at least prop
 *   `user` (of type User).
 *
 * - `showEmail` indicates whether to display user's email
 *   address on the card.
 *
 * - `showRole` indicates whether to display user's role
 *   on the card.
 *
 * - Pass `children` from parent Component to add more detail.
 *
 * - Component must be rendered under a <div class="row"> in
 *   the parent component to display correctly.
 *
 * - See ./UserProfileCard.test.tsx for demo implementation.
 */

import { type ReactNode } from "react"

import { type User, type UserProfileCardProps } from "../../types"

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps): ReactNode {
  const { id, name, email, role, avatarUrl }: User = user

  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-4">
              {avatarUrl && (
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
                  {showRole && <li>{role}</li>}
                  {showEmail && (
                    <li>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  )}
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
