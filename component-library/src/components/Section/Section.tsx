/**
 * Component: Section
 *
 * Props (SectionProps):
 * - title: string                The Bootstrap styling to use
 *                                when rendering the AlertBox.
 *                                Also signals which Bootstrap
 *                                Icon to display.
 *
 * - children?: React.ReactNode   Any children passed from the
 *                                parent component.
 * 
 * Usage:
 * - To render, invoke `Section` with at least prop
 *   `title` of type `string`.
 * 
 * - `title` indicates the heading of the `Section`.
 * 
 * - To pass content in the body of the `Section`, pass that
 *   content as children of the parent Component.
 * 
 * - See ../../App.tsx for demo implementation.
 */

import { type ReactNode } from "react"

import { type SectionProps } from "../../types"

export default function Section({ title, children }: SectionProps): ReactNode {
  return (
    <section className="mb-5">
      <h2 className="my-4 text-center">{title}</h2>
      {children}
    </section>
  )
}
