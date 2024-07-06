import { Metadata } from 'next'

import { Icons } from '@/components/icons'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the Sociagram Team',
}

export default function JoinWaitlistPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.contact className="mx-auto h-16 w-16" />
          <h1 className="text-2xl font-semibold tracking-tight">Contact Us</h1>
          <p className="text-sm text-muted-foreground">
            Send us a message and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
        <ContactForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          You can also email us directly at <br />{' '}
          <a href="mailto:beyuppie365@gmail.com">beyuppie365@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
