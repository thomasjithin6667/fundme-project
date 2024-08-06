import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
  // CarouselNext,
} from "@/components/ui/carousel";
import { BiDonateHeart } from "react-icons/bi";
import {  toast, Toaster } from 'sonner';
import { IoIosCall } from "react-icons/io";
// import { Progress } from "@/components/ui/progress";
import { BanknoteIcon, HeartIcon, QrCodeIcon } from "lucide-react";
 
import Autoplay from "embla-carousel-autoplay";
import FundraisedSection from "./components/ui/FundRaised";
import { useEffect } from "react";
import DonateButton from "./components/ui/GpayButton";
 
export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}



 
export default function Component() {
  const showToast = () => {
   
    toast.success('Smitha just donated $30')
  
  };
  
  useEffect(() => {
    // Set interval to show toast every minute
    const interval = setInterval(() => {
      showToast();
      
    },5000); 

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const recipientPhoneNumber =9895605077
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <div>
       <Toaster position="bottom-left"/>
     
    </div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b justify-between">
        <a href="#" className="flex items-center justify-center">
          <HeartIcon className="size-6 text-primary" />
          <span className="sr-only">Fundraiser for Rahul</span>
        </a>
        <div className="flex items-center gap-2">
        
          <div className="hidden lg:flex lg:gap-2">
            <a
              href="#donate"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Donate Now
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact
            </a>
          </div>
 
          {/* Mobile View */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#donate"
              className="inline-flex items-center justify-center p-2 rounded-md bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              aria-label="Donate Now"
            >
              <BiDonateHeart className="text-2xl" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center p-2 rounded-md border border-input shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              aria-label="Contact"
            >
              <IoIosCall className="text-2xl" />
            </a>
          </div>
        </div>
      </header>
 
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-24 min-h-screen flex items-center">
          <div className="container max-w-6xl grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Fundraiser for Rahul
              </div>
              <DonateButton/>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Help Provide a Fighting Chance
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                Your donation can make all the difference for a courageous child
                battling blood cancer. Every contribution brings them one step
                closer to a full recovery.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="#donate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Donate Now
                </a>
                <a
                  href="#story"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Read Rahul's Story
                </a>
              </div>
            </div>
 
            <div className="w-full flex justify-center">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full max-w-md"
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/help-2.png"
                      width="500"
                      height="500"
                      alt="Rahul"
                      className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/timeline-2.png"
                      width="500"
                      height="500"
                      alt="Rahul"
                      className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/timeline-5.png"
                      width="500"
                      height="500"
                      alt="Rahul"
                      className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
 
        <section
          id="story"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted min-h-screen flex items-center"
        >
          <div className="container max-w-6xl grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="block sm:hidden rounded-lg bg-muted px-3 py-1 text-sm">
              Rahul's Story
            </div>
 
            <img
              src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/help-2.png"
              width="500"
              height="500"
              alt="Rahul"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              style={{
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.filter = "grayscale(0%)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.filter = "grayscale(100%)")
              }
            />
 
            <div className="space-y-4">
              <div className="hidden sm:block rounded-lg bg-muted px-3 py-1 text-sm">
                Rahul's Story
              </div>
 
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                A Courageous Battle Against Blood Cancer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At just 8 years old, Rahul has been bravely fighting blood
                cancer for the past year. Despite the challenges, they remain
                resilient and determined to overcome this battle. Your support
                can make all the difference in their journey to recovery.
              </p>
            </div>
          </div>
        </section>
 
        <section
          id="donate"
          className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center min-h-screen"
        >
          <div className="container max-w-6xl px-4 md:px-6 lg:px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Donate Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Your Donation Can Make a Difference
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Every contribution, no matter the size, can help provide the
                  necessary treatment and support for Rahul. Your generosity can
                  give them a fighting chance.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BanknoteIcon className="h-6 w-6 text-primary" />
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
                  <QrCodeIcon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">UPI Payments</p>
                    <p className="text-muted-foreground">
                      Scan the QR code or use the UPI ID: [UPI ID]
                    </p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zIx1vxRCDEofesRnFE7NkXeq-D41DhPF-LGaUyCNcboDJu10L0f3XqPt-98huSAtSgo&usqp=CAU"
                      width="150"
                      height="150"
                      alt="QR Code"
                      className="mt-2 rounded-md"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FundraisedSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Fundraiser for Rahul. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
 