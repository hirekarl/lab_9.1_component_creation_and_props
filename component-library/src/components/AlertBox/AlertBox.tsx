import { type AlertBoxProps } from "../../types"

export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  return (
    <div className={"alert alert-dismissible alert-" + type} role="alert">
      <h3 className="alert-heading fs-5">{message}</h3>
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
