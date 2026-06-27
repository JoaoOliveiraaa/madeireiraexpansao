import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Madeireira Expansão — página inicial"
      className={className}
    >
      <Image
        src="/images/logo-expansao.png"
        alt="Madeireira Expansão"
        width={760}
        height={264}
        priority
        className="h-auto w-full"
      />
    </Link>
  )
}
