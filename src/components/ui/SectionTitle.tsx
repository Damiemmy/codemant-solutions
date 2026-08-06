interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-gray-400">{description}</p> : null}
    </div>
  )
}
