import Image from 'next/image'
import Link from 'next/link'
import HomePageMockup from '@/public/images/1-dark.png'
import GetItOnGooglePlay from '@/public/images/google-play-badge.png'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default async function IndexPage() {
  return (
    <>
      {/* hero */}
      <section className="space-y-6 border-0 border-white pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow us on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your Ultimate Companion for Viral Social Media Success
          </h1>
          <p className="max-w-[44rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Whether you&apos;re a content creator, influencer, business owner,
            or simply love sharing moments, Sociagram provides all you need to
            boost your engagement and expand your audience.
          </p>
          <div className="mt-2 space-y-4 md:space-x-4">
            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  className: 'text-md font-semibold',
                })
              )}
            >
              Get Started
            </Link>
            <Link
              // href={siteConfig.links.productHunt}
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'text-md font-semibold',
                })
              )}
            >
              Upvote on Product Hunt
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-8 border-0 border-white bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-5 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover a couple of the essential tools Sociagram offers to help
            you engage with your audience and grow your social media presence.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-5 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">Engaging Captions</h3>
                <p className="text-md text-muted-foreground">
                  Find captivating captions for every occasion that resonate
                  with your content.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  d="M10.6923 6L7.69231 19M6.38462 9.5H18.8847M16.1924 6L13.1924 19M5 15.5H17.5001"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">Trending Hashtags</h3>
                <p className="text-md text-muted-foreground">
                  Boost your reach with curated trending hashtags for diverse
                  topics and platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  d="M12.0016 21.9292C6.96156 21.9292 2.85156 17.8292 2.85156 12.7792V10.8992C2.85156 10.5092 3.17156 10.1992 3.55156 10.1992C3.93156 10.1992 4.25156 10.5192 4.25156 10.8992V12.7792C4.25156 17.0492 7.72156 20.5192 11.9916 20.5192C16.2616 20.5192 19.7316 17.0492 19.7316 12.7792V10.8992C19.7316 10.5092 20.0516 10.1992 20.4316 10.1992C20.8116 10.1992 21.1316 10.5192 21.1316 10.8992V12.7792C21.1516 17.8292 17.0416 21.9292 12.0016 21.9292Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  d="M11.9984 2C8.63844 2 5.89844 4.74 5.89844 8.1V12.79C5.89844 16.15 8.63844 18.89 11.9984 18.89C15.3584 18.89 18.0984 16.15 18.0984 12.79V8.1C18.0984 4.74 15.3584 2 11.9984 2ZM14.1784 10.59C14.1084 10.86 13.8584 11.04 13.5884 11.04C13.5384 11.04 13.4784 11.03 13.4284 11.02C12.4084 10.74 11.3284 10.74 10.3084 11.02C9.97844 11.11 9.64844 10.92 9.55844 10.59C9.46844 10.27 9.65844 9.93 9.98844 9.84C11.2184 9.5 12.5184 9.5 13.7484 9.84C14.0784 9.93 14.2684 10.26 14.1784 10.59ZM15.0284 7.82C14.9384 8.07 14.7084 8.22 14.4584 8.22C14.3884 8.22 14.3184 8.21 14.2484 8.18C12.7184 7.62 11.0384 7.62 9.50844 8.18C9.18844 8.3 8.83844 8.14 8.71844 7.82C8.60844 7.51 8.76844 7.16 9.08844 7.04C10.8884 6.39 12.8684 6.39 14.6584 7.04C14.9784 7.16 15.1384 7.51 15.0284 7.82Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">Content Discovery</h3>
                <p className="text-md text-muted-foreground">
                  Stay updated with the latest trends, viral challenges, and
                  popular audios.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  d="M16.9358 13.1007C17.804 12.7969 18.8834 12.756 21.1392 12.7508H22.7242C22.7167 12.859 22.7348 12.6434 22.7242 12.7508C22.6895 13.1321 22.5227 13.4894 22.2526 13.7608L13.7454 22.3107C13.4821 22.5754 13.1241 22.7242 12.7508 22.7242C12.6434 22.7348 12.859 22.7167 12.7508 22.7242V21.1392C12.756 18.8834 12.7969 17.804 13.1007 16.9358C13.7289 15.1405 15.1405 13.7289 16.9358 13.1007Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5515 16.8809C11.2763 17.9436 11.2521 19.2445 11.2501 21.22V22.7243C5.66292 22.3393 1.25 17.685 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.685 1.25 22.3393 5.66292 22.7243 11.2501H21.22C18.9634 11.2524 17.587 11.2837 16.4403 11.6849C14.6151 12.3236 13.1098 13.6152 12.1975 15.2866C12.1782 15.2885 12.1589 15.2911 12.1396 15.2945C11.0656 15.4824 10.0235 15.4383 9.09494 15.2056C8.69315 15.1049 8.2858 15.349 8.1851 15.7508C8.0844 16.1526 8.32847 16.5599 8.73026 16.6606C9.61622 16.8827 10.5717 16.9615 11.5515 16.8809ZM14.8977 11.2234C15.4311 11.0805 15.6898 10.3159 15.4754 9.51572C15.2609 8.71552 14.6547 8.18271 14.1212 8.32565C13.5877 8.4686 13.3291 9.23316 13.5435 10.0334C13.7579 10.8336 14.3642 11.3664 14.8977 11.2234ZM9.10225 12.7764C9.63571 12.6335 9.89436 11.8689 9.67994 11.0687C9.46553 10.2685 8.85925 9.73569 8.32579 9.87863C7.79232 10.0216 7.53368 10.7861 7.74809 11.5863C7.9625 12.3865 8.56878 12.9194 9.10225 12.7764Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">Pre-designed Templates</h3>
                <p className="text-md text-muted-foreground">
                  Filters, meme packs, effects, stickers, and text overlays to
                  create eye-catching content.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">Explore Videos</h3>
                <p className="text-md text-muted-foreground">
                  Get practical tips and see videos to create your viral post
                  and grow your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background p-2">
            <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                <path
                  d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  d="M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  d="M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z"
                  fill="currentColor"
                ></path>{' '}
                <path
                  d="M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold md:text-lg">
                  Social Media Integration
                </h3>
                <p className="text-md text-muted-foreground">
                  Connect with your social media accounts, manage your profiles,
                  track your growth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We&apos;re working hard to bring you a suite of powerful tools and
            features designed to help you become a social media star!
          </p>
        </div>
      </section>

      <section id="download" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Create. Share. Grow.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Take the thrilling step to go viral on social media with Sociagram
          </p>

          {/* Banner Section */}
          <div className="container relative my-4 flex flex-col items-center rounded-xl bg-accent p-4 md:my-6 md:flex-row md:items-stretch md:gap-4 md:p-6 lg:p-8">
            {/* CTA Text and Download Button */}
            <div className="flex w-full items-center justify-center border-0 border-gray-500">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md p-3"
              >
                <Image
                  src={GetItOnGooglePlay}
                  alt="Get it on Google Play"
                  width={200}
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
            {/* Mockup Image */}
            <div className="mt-4 flex w-full max-w-sm justify-center border-0 border-gray-500 md:mt-0 lg:max-w-md">
              <Image
                src={HomePageMockup}
                alt="Get it on Google Play"
                height={480}
                style={{ objectFit: 'contain' }}
                className="relative md:right-2"
              />
            </div>
          </div>

          <div className="hidden">
            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
              <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                {1000} people on waitlist
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
