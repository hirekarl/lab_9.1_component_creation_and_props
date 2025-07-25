/**
 * Component: AlertBox
 *
 * Props (AlertBoxProps):
 * - type: AlertType              The Bootstrap styling to use
 *                                when rendering the AlertBox.
 *                                Also signals which Bootstrap
 *                                Icon to display.
 *
 * - message: string              The message that is displayed
 *                                at the top of the AlertBox,
 *                                as a heading.
 *
 * - onClose?: () => void         Code to run when the AlertBox
 *                                is closed.
 *
 * - children?: React.ReactNode   Any children passed from the
 *                                parent component.
 * 
 * Usage:
 * - To render, invoke `AlertBox` with at least props
 *   `type` (of type AlertType) and `message`.
 * 
 * - `type` specifies "success" | "danger" | "warning" | "info",
 *    as specified and implemented by Bootstrap.
 * 
 * - `message` indicates the heading of the alert box.
 * 
 * - `onClose` runs code passed down from parent Component
 *   when the alert box is closed with the Close button.
 * 
 * - To include content in the body of the alert box, pass that
 *   content as children of the parent Component.
 * 
 * - See ./AlertBox.test.tsx for demo implementation.
 */

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
