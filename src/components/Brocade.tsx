/** Faint repeating dot lattice for navy panels — a restrained nod to brocade/embroidered texture. */
export function Brocade({ className = '' }: { className?: string }) {
  return <div className={`brocade pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />
}
