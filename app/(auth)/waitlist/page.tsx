import { Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { WaitlistForm } from '@/components/waitlist-form'

export const metadata: Metadata = {
  title: 'Join the Waitlist',
  description:
    "Sign up to be one of the first to get notified about Sociagram's updates",
}

export default function JoinWaitlistPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.appIcon className="mx-auto h-10 w-10" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Join the Waitlist
          </h1>
          <p className="text-sm text-muted-foreground">
            Get early premium access to Sociagram
          </p>
        </div>
        <WaitlistForm />
        <p className="hidden px-8 text-center text-sm text-muted-foreground">
          We&apos;re excited to have you on the waitlist!
        </p>
      </div>
    </div>
  )
}
