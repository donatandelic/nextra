import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import cn from 'clsx'
import { Anchor } from './anchor'

const classes = {
  cards: cn('nextra-cards nx-mt-4 nx-gap-4 nx-grid'),
  card: cn(
    'nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200',
    'nx-text-current nx-no-underline dark:nx-shadow-none',
    'hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100',
    'active:nx-shadow-sm active:nx-shadow-gray-200',
    'nx-transition-all nx-duration-200 hover:nx-border-gray-300'
  ),
  title: cn(
    'nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900'
  ),
  description: cn(
    'nx-p-4 nx-pt-0 nextra-card-description nx-text-sm'
  ),
  icon: cn(
    'nextra-card-icon nx-text-primary-800 dark:nx-text-primary-500 nx-px-4 nx-pb-2.5 nx-pt-5',
    'nx-block'
  )
}

const arrowEl = (
  <span className="nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]">
    →
  </span>
)

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  description,
  href,
  ...props
}: {
  children: ReactNode
  title: string
  icon: ReactNode
  description?: string,
  image?: boolean
  arrow?: boolean
  href: string
}) {
  const animatedArrow = arrow ? arrowEl : null

  if (image) {
    return (
      <Anchor
        href={href}
        className={cn(
          classes.card,
          'nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700'
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            classes.title,
            'dark:nx-text-gray-300 dark:hover:nx-text-gray-100',
            description && 'nx-pb-0.5'
          )}
        >
          <span className="nx-flex nx-gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
        {description && <p className={classes.description}>
          {description}
        </p>}
      </Anchor>
    )
  }

  return (
    <Anchor
      href={href}
      className={cn(
        classes.card,
        'nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900'
      )}
      {...props}
    >
      {icon && 
        <div className={classes.icon}>
          {icon}
        </div>
      }
      <span
        className={cn(
          classes.title,
          'dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50',
          description && 'nx-pb-0.5',
          icon && 'nx-pt-0'
        )}
      >
        {title}
        {animatedArrow}
      </span>
      {description && <p className={classes.description}>
            {description}
      </p>}
    </Anchor>
  )
}

export function Cards({
  children,
  num = 3,
  className,
  style,
  ...props
}: { num?: number } & ComponentProps<'div'>) {
  return (
    <div
      className={cn(classes.cards, className)}
      {...props}
      style={
        {
          ...style,
          '--rows': num
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
