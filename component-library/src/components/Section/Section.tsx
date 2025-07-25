import React from "react"

interface SectionProps {
  title: string
  children?: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-5">
      <h2 className="my-4 text-center">{title}</h2>
      {children}
    </section>
  )
}
