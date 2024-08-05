import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { BanknoteIcon, HeartIcon, QrCodeIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a href="#" className="flex items-center justify-center" >
          <HeartIcon className="size-6 text-primary" />
          <span className="sr-only">Fundraiser for Brave Child</span>
        </a>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fundraiser for Brave Child</div>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Help Provide a Fighting Chance
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your donation can make all the difference for a courageous child battling blood cancer. Every
                contribution brings them one step closer to a full recovery.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                >
                  Donate Now
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                >
                  Read Their Story
                </a>
              </div>
            </div>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Brave Child"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Brave Child"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Brave Child"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="story" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="Brave Child"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Their Story</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                A Courageous Battle Against Blood Cancer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At just 8 years old, [Child's Name] has been bravely fighting blood cancer for the past year. Despite
                the challenges, they remain resilient and determined to overcome this battle. Your support can make all
                the difference in their journey to recovery.
              </p>
            </div>
          </div>
        </section>
        <section id="donate" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Donate Now</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Your Donation Can Make a Difference
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every contribution, no matter the size, can help provide the necessary treatment and support for
                [Child's Name]. Your generosity can give them a fighting chance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BanknoteIcon className="size-6 text-primary" />
                  <div>
                    <p className="font-semibold">Bank Account Details</p>
                    <p className="text-muted-foreground">
                      Account Name: [Account Name]
                      <br />
                      Account Number: [Account Number]
                      <br />
                      IFSC Code: [IFSC Code]
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <QrCodeIcon className="size-6 text-primary" />
                  <div>
                    <p className="font-semibold">UPI Payments</p>
                    <p className="text-muted-foreground">Scan the QR code or use the UPI ID: [UPI ID]</p>
                    <img
                      src="/placeholder.svg"
                      width="150"
                      height="150"
                      alt="QR Code"
                      className="mt-2 rounded-md"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Progress</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Funds Raised So Far</h2>
              <Progress value={60} className="h-4 bg-primary rounded-full" />
              <div className="flex justify-between text-muted-foreground">
                <span>₹200,000 raised</span>
                <span>₹300,000 needed</span>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
        <p className="text-xs text-muted-foreground">&copy; 2024 Fundraiser for Brave Child. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-primary" >
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-primary" >
            Terms of Service
          </a>
        </nav>
      </footer>
    </div>
  )
}

