'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Checkbox } from './ui/checkbox'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

interface WaitlistFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WaitlistForm({ className, ...props }: WaitlistFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form
        action="https://formbold.com/s/3NLVX"
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
          <div className="grid gap-2">
            <Label htmlFor="userType" className="sr-only">
              I am a...
            </Label>
            <Select name="userType" required defaultValue="regular">
              <SelectTrigger>
                <SelectValue placeholder="I am a ..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="creator">
                  Influencer/Content Creator
                </SelectItem>
                <SelectItem value="business">Business Owner</SelectItem>
                <SelectItem value="regular">
                  Regular Social Media User
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-2 text-center text-sm text-muted-foreground">
            We’ll notify you via your email about updates and announcements.
          </div>
          <div className="mb-2 flex items-center space-x-2">
            <Checkbox id="agree" name="agree" required />
            <Label htmlFor="agree" className="text-sm">
              I agree to the{' '}
              <Link href="/privacy" className="text-indigo-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            Join the Waitlist
          </button>
        </div>
      </form>
    </div>
  )
}
