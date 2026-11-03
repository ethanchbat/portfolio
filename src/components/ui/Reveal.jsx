import { useReveal } from '../../hooks/useReveal'

/**
 * Declarative wrapper around useReveal. Pass `group` to stagger direct
 * children instead of fading the whole block in at once. Children need
 * `data-reveal-item` when `group` is set.
 */
export function Reveal({
  as = 'div',
  group = false,
  className = '',
  children,
  options,
  ...rest
}) {
  const As = as
  const ref = useReveal(options)

  return (
    <As
      ref={ref}
      className={className}
      {...(group ? { 'data-reveal-group': true } : {})}
      {...rest}
    >
      {children}
    </As>
  )
}
