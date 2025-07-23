import { type AlertBoxProps } from "../../types"

export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  let iconClass
  switch (type) {
    case "success":
      iconClass = "check-circle-fill"
      break
    case "danger":
    case "warning":
      iconClass = "exclamation-triangle-fill"
      break
    case "info":
      iconClass = "info-circle-fill"
      break
  }
  return (
    <div className={"alert alert-dismissible alert-" + type} role="alert">
      <h3 className="alert-heading fs-5"><i className={"bi bi-" + iconClass}></i> {message}</h3>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}></button>
      {children ? <hr /> : null}
      {children ? children : null}
    </div>
  )
}
