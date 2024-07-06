import * as React from 'react'

/* import { siteConfig } from '@/config/site'; */
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/mode-toggle'

export function NewSiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, 'border-t border-gray-300')}>
      <div className="container flex flex-col items-center justify-around gap-4 py-10 md:h-24 md:flex-row md:gap-6 md:py-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-10 md:px-0">
          <Icons.appIcon className="h-12 w-12" />
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Sociagram. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-4 border-0 border-gray-300 md:flex-row md:gap-6">
          <a
            href="/privacy"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Privacy Policy
          </a>
          <a
            href="/waitlist"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Join the Waitlist
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Contact Us
          </a>
        </nav>
        <ModeToggle />
      </div>
    </footer>
  )
}
