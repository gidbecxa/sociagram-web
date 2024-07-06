'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { buttonVariants } from './ui/button'
import { Textarea } from './ui/textarea'

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ContactForm({ className, ...props }: ContactFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form
        action="https://formbold.com/s/6M8OA"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid gap-3">
          <div className="grid gap-1">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="subject" className="sr-only">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Subject"
              type="text"
              name="subject"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              name="message"
              placeholder="Please type your message here. If you are requesting account deletion, please specify the details."
              required
            />
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
