import { type AlertBoxProps } from "../../types"
import { type BootstrapIconClassOptions } from "../../types"

export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  let bootstrapIconClass: BootstrapIconClassOptions

  switch (type) {
    case "success":
      bootstrapIconClass = "check-circle-fill"
      break
    case "danger":
    case "warning":
      bootstrapIconClass = "exclamation-triangle-fill"
      break
    case "info":
      bootstrapIconClass = "info-circle-fill"
      break
  }

  return (
    <div className={`alert alert-dismissible alert-${type}`} role="alert">
      <h3 className="alert-heading fs-5">
        <i className={`bi bi-${bootstrapIconClass}`}></i> {message}
      </h3>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}></button>
      {children && (
        <>
          <hr />
          {children}
        </>
      )}
    </div>
  )
}
