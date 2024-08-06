import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
  // CarouselNext,
} from "@/components/ui/carousel";
import { BiDonateHeart } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
// import { Progress } from "@/components/ui/progress";
import { BanknoteIcon, HeartIcon, QrCodeIcon } from "lucide-react";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import Autoplay from "embla-carousel-autoplay";
import FundraisedSection from "./components/ui/FundRaised";
import { RiParentLine } from "react-icons/ri";
import { MdOutlineLocalHospital } from "react-icons/md";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

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

  const messages = [
    { name: "Rahul Sharma", amount: "2300rs" },
    { name: "Priya Singh", amount: "2200rs" },
    { name: "Amit Kumar", amount: "2700rs" },
    { name: "Sneha Patel", amount: "2900rs" },
    { name: "Ravi Verma", amount: "3200rs" },
    { name: "Ananya Joshi", amount: "3100rs" },
    { name: "Vikram Reddy", amount: "2800rs" },
    { name: "Kavya Gupta", amount: "2600rs" },
    { name: "Arjun Nair", amount: "2400rs" },
    { name: "Meera Iyer", amount: "2500rs" },
    { name: "Sanjay Mehta", amount: "3500rs" },
    { name: "Nisha Chawla", amount: "3300rs" },
    { name: "Rohit Malhotra", amount: "3000rs" },
    { name: "Pooja Desai", amount: "2700rs" },
    { name: "Vivek Bhatia", amount: "2900rs" },
    { name: "Anjali Kapoor", amount: "3100rs" },
    { name: "Ashok Jain", amount: "2500rs" },
    { name: "Rekha Rao", amount: "3200rs" },
    { name: "Karan Singh", amount: "2800rs" },
    { name: "Ritu Shah", amount: "2600rs" },
  ];

  const showToast = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    toast.success(`${randomMessage.name} just donated ${randomMessage.amount}`);


  };

  useEffect(() => {
    // Set interval to show toast every minute
    const interval = setInterval(() => {
      showToast();

    }, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);



  return (

    <div className="flex flex-col min-h-screen bg-background">
      <Toaster position="bottom-left" />
      <header className="px-4 lg:px-6 h-14 flex items-center border-b justify-between">
        <a href="#" className="flex items-center justify-center">
          <HeartIcon className="size-6 text-primary" />
          <span className="sr-only">Fundraiser for Priyansh</span>
        </a>

        <span style={{ width: "100%" }} className="hidden md:block">
          {/* <MessageCarousel /> */}
        </span>

        <div className="flex items-center gap-2">
          {/* Desktop View */}

          <div className="hidden lg:flex lg:gap-2">
            <a
              href="#donate"
              style={{ backgroundColor: "#0A8537" }}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Donate
            </a>
            <a
              href="tel:+9182385109"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact
            </a>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#donate"
              style={{ backgroundColor: "#0A8537" }}
              className="inline-flex items-center justify-center p-2 rounded-md bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              aria-label="Donate Now"
            >
              <BiDonateHeart className="text-2xl" />
            </a>
            <a
              href="tel:+9182385109"
              className="inline-flex items-center justify-center p-2 rounded-md border border-input shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              aria-label="Contact"
            >
              <IoIosCall className="text-2xl" />
            </a>
          </div>
        </div>
      </header>
      {/*
      <div className="md:hidden text-xs ">
        <MessageCarousel />
      </div> */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-24 min-h-screen flex items-center ">
          <div className="container max-w-6xl grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Fundraiser for Priyansh
              </div>
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
                  style={{ backgroundColor: "#0A8537" }}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Donate Now
                </a>
                <a
                  href="#story"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Read Priyansh's Story
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
                      alt="Priyansh"
                      className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/timeline-2.png"
                      width="500"
                      height="500"
                      alt="Priyansh"
                      className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/timeline-5.png"
                      width="500"
                      height="500"
                      alt="Priyansh"
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
              Priyansh's story by his father Cherlapalli Sridhar Goud
            </div>

            <img
              src="https://demo.webbytemplate.com/html-templates/bootstrap/donation/images/help-2.png"
              width="500"
              height="500"
              alt="Priyansh"
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
              <div className="hidden sm:block rounded-lg bg-muted text-sm">
                Priyansh's story by his father Cherlapalli Sridhar Goud
              </div>

              <h2 className="text-xl font-bold tracking-tighter md:text-xl/tight lg:text-2xl">
                A Courageous Battle Against Blood Cancer
              </h2>
              <p className="max-w-[600px] text-muted-foreground text-sm ">
                I am writing to you with a heavy heart to share that my eldest
                son CH. Priyansh, has been bravely fighting leukaemia for the
                past year. This has been an incredibly challenging time for our
                family, both emotionally and financially, as we navigate through
                this difficult journey. over the past year, My son has undergone
                six chemotherapy sessions, showing remarkable strength and
                resilience throughout. We have already spent 13 lakhs on his
                treatment, and while his courage inspires us every day, we know
                that the road ahead is still long and demanding.
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm ">
                As we continue to fight alongside my kid, the financial burden
                has become increasingly overwhelming. We are reaching out to our
                community for support in raising funds to help cover the ongoing
                medical expenses and ensure he receives the best possible care.
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm ">
                We have set up a fund to assist with these costs, and any
                contribution, no matter how small, would be deeply appreciated.
                Your generosity will allow us to focus on what truly matters:
                supporting my son (Priyansh) through his treatment and giving
                him every chance to overcome this illness.
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm ">
                If you are unable to contribute financially, we kindly ask for
                your thoughts and prayers on my child.
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm ">
                The funds I raise are needed to help my chid to find better
                treatment and cures for blood cancer so, he can live better,
                longer lives.
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
                  necessary treatment and support for Priyansh. Your generosity
                  can give them a fighting chance.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BanknoteIcon
                    className="h-6 w-6 text-primary"
                    style={{ color: "#0A8537" }}
                  />
                  <div>
                    <p className="font-semibold">Bank Account Details</p>
                    <p className="text-muted-foreground">
                      Account Name: Cherlapalli Sridhar Goud
                      <br />
                      Account Number: 2498101064349
                      <br />
                      IFSC Code: CNRB0002498
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-col ">
                    <FaGooglePay
                      className="h-6 w-6 text-primary"
                      style={{ color: "#0A8537" }}
                    />
                    <SiPhonepe
                      className="h-6 w-6 text-primary"
                      style={{ color: "#0A8537" }}
                    />
                  </div>

                  {/* < className="h-6 w-6 text-primary" style={{color:"#0A8537"}}  /> */}
                  <div>
                    <p className="font-semibold">UPI Details</p>
                    <p className="text-muted-foreground">
                      Gpay/PhonePe Number: 8121646707
                      <br />
                      Gpay UPI Id: sridhargoud.cherlapalli-2@okicici
                      <br />
                      PhonePe UPI Id: 8121646707@ybl
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <QrCodeIcon
                    className="h-6 w-6 text-primary"
                    style={{ color: "#0A8537" }}
                  />
                  <div>
                    <p className="font-semibold">UPI Payments</p>
                    <p className="text-muted-foreground">
                      Scan the QR code to make payments
                    </p>
                    <div className="flex flex-col sm:flex-row gap-10">
                      <img
                        src="/gpay2.png"
                        width="150"
                        height="150"
                        alt="QR Code"
                        className="mt-2 rounded-md"
                        style={{ aspectRatio: "1/1", objectFit: "cover" }}
                      />
                      <img
                        src="/phonepe.png"
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
          </div>
        </section>

        <section
          id="details"
          className="w-full py-12 md:py-24 lg:py-32 flex items-center   bg-muted  justify-center min-h-screen"
        >
          <div className="container max-w-6xl px-4 md:px-6 lg:px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MdOutlineLocalHospital
                    className="h-6 w-6 text-primary"
                    style={{ color: "#0A8537" }}
                  />
                  <div>
                    <p className="font-semibold">
                      {" "}
                      Hospital and Doctor Details
                    </p>
                    <p className="text-muted-foreground">
                      Dr.Shirisha Rani
                      <br />
                      Paediatric Haematologist and Oncologist
                      <br />
                      Rainbow Children’s Hospital
                      <br />
                      Banjara Hills, Road no 2, Near Hotel Park Hyatt,
                      <br />
                      Hyderabad, Telangana, 500034
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-col ">
                    <RiParentLine
                      className="h-6 w-6 text-primary"
                      style={{ color: "#0A8537" }}
                    />
                  </div>


                  {/* < className="h-6 w-6 text-primary" style={{color:"#0A8537"}}  /> */}
                  <div>
                    <p className="font-semibold">Parent Details</p>
                    <div className="flex flex-col sm:flex-row gap-10">
                      <div>
                        <p className="font-semibold text-muted-foreground">Father</p>
                        <p className="text-muted-foreground">
                          Cherlapalli Sridhar Goud
                          <br />
                          Senior Software Engineer
                          <br />
                          AFC Digital Pvt Ltd
                          <br />
                          Mob: 9182385109
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-muted-foreground">Mother</p>
                        <p className=" text-muted-foreground">
                          Cherlapalli Manasa
                          <br />
                          Housewife
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Hospital and Doctor details
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Your Donation Can Make a Difference
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Every contribution, no matter the size, can help provide the
                  necessary treatment and support for Priyansh. Your generosity
                  can give them a fighting chance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FundraisedSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Fundraiser for Priyansh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
