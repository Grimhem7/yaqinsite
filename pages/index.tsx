import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Video from "../components/video";
import Particles from "./particles";
import dynamic from "next/dynamic";
import { red } from "@mui/material/colors";
import PricingTab, { PricingTable } from "@/components/pricing-table";
import AvantagesTab from "@/components/avantages";
import Link from "next/link";
import Form from "@/components/forms/forms";
import Presentation from "@/components/presentation";
export default function Home() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  useEffect(() => {
    // Function to dynamically load scripts
    const loadScript = (src: string) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript("https://fast.wistia.com/embed/medias/jgb3pqs49i.jsonp");
    loadScript("https://fast.wistia.com/assets/external/E-v1.js");
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>YAQINE</title>
        <meta name="description" content="E-commerce description" />
        <meta property="og:title" content="E-commerce" />
        <meta property="og:description" content="E-commerce survey" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Noto+Sans+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Particles
        className="absolute inset-0 z-[-5] animate-fade-in"
        quantity={100}
      />
      <section className="flex w-full flex-col items-center justify-between">
        <div className="relative z-[25] flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6  md:px-8 ">
              <div className="mb-8 flex justify-center">
                <a href="flex size-auto items-center justify-start bg-none">
                  <img
                    src="/images/ECOMSIN.png"
                    width={250}
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-900 to-white bg-clip-text text-xl font-bold uppercase leading-8 text-transparent mt-[-10px]">
                  YAQINE PROGRAM
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-50 w-[80%] mx-auto">
                Your gateway to the e-commerce success in Europe.
                </h1>
                <div className="rounded mt-12">
                  <Video videoId="jgb3pqs49i" />
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-400">
               Yaqine LLC is a U.S. registered digital marketing and e-commerce consulting company helping international brands build online stores, create product videos, and scale their sales with paid advertising.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2 mb-[-40px]">
                  <Link href="#partner" className="button-33" scroll={true}>
                    Become a Partner
                  </Link>
                  <Link href="#pricing" className="button-34" scroll={true}>
                  Book a Consultation
                  </Link>
                </div>
                {/*<div className="relative mt-20 flex flex-col items-center justify-center gap-5">
                  <div className="flex w-full flex-row items-center justify-center">
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/1.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/2.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/3.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/4.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/5.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/6.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/you.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <p className="max-w-md text-sm text-gray-400">
                    يسعدنا أن نرحب بك في مجتمع رواد الأعمال المغربي الذين يحدثون
                    ثورة في نماذج أعمال الدفع عند الاستلام في أوروبا.
                  </p>
                </div>*/}
              </div>
            </div>
            <div
              className="absolute top-[calc(100%-13rem)] -transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-x-0 -top-40 -transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 flex w-full flex-col items-center justify-between md:mt-20">
        <div className="relative z-[5] flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto mt-10 w-full max-w-7xl rounded-3xl px-4 sm:mb-10 sm:px-6 md:px-8">
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-lg font-bold uppercase leading-6 text-transparent md:text-2xl">
                    The YAQINE Master Program
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  The current e-commerce model is struggling.{" "}
                  <span className="broken text-3xl font-bold sm:text-[2.75rem]"></span>
              
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Say goodbye to high costs and overcrowded markets.
                </p>
              </div>
              <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 py-10 md:grid md:grid-cols-2 lg:grid-cols-4">
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8  size-16 items-center justify-center rounded-xl bg-gray-900 mx-auto">
                    <img
                      className="rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/Flag_of_Algeria_Flat_Round_Corner-64x64.png"
                      alt=""
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white text-left">
                   The high e-commerce fees in Europe
                  </h3>
                  <p className="text-gray-400 text-left">
                    80% of e-commerce services rely on reselling without private warehouses, leading to high fees that make profitability difficult.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8  size-16 items-center justify-center rounded-xl bg-gray-900 mx-auto">
                    <img
                      className="rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/Flag_of_African_Union_Flat_Round_Corner-64x64.png"
                      alt=""
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white text-left">
                   The high e-commerce fees in Europe
                  </h3>
                  <p className="text-gray-400 text-left">
              With the markets in Western Europe becoming increasingly crowded, we’re opening new horizons with the YAQINE Program, targeting the fast-growing opportunities in Eastern Europe.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8  size-16 items-center justify-center rounded-xl bg-gray-900 mx-auto">
                    <img
                      className="rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/Flag_of_Saudi_Arabia_Flat_Round_Corner-64x64.png"
                      alt=""
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white text-left">
                    Are you tired of traditional methods?
                  </h3>
                  <p className="text-gray-400 text-left">
                    Get ready for complete control with your own team and call center achieving deliveries for less than €4 per shipment.
Make your business not only profitable, but also enjoyable to run.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8  size-16 items-center justify-center rounded-xl bg-gray-900 mx-auto">
                    <img
                      className="rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/Flag_of_Morocco_Flat_Round_Corner-64x64.png"
                      alt=""
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white text-left">
                    The Secrets of Success in e-commerce
                  </h3>
                  <p className="text-gray-400 text-left">
                Discover what’s really happening inside the e-commerce business model and learn how to use it to your advantage for lasting success.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 --translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              ></div>
            </div>
            <div
              className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 --translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <AvantagesTab />
      </section>
      <section className="mt-5 flex w-full flex-col items-center justify-between md:mt-20 hidden">
        <div className="relative z-[5] flex  w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-0 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8">
              <div className="mb-2 flex justify-center">
              <div className="flex flex-col place-content-center place-items-center items-center justify-center pt-10 sm:pb-10">
                <div className="flex h-full md:grid md:grid-cols-2 lg:grid-cols-2 gap-4 flex-col text-right justify-start overflow-hidden rounded-[22px] border border-gray-800/50 bg-gray-950/50 p-4 lg:p-7 shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="my-1 w-full items-center hidden">
                    <Video videoId="jgb3pqs49i" />
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 flex w-full flex-col items-center justify-between md:mt-20">
        <div className="relative z-[5] flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8">
              <div className="mb-8 flex justify-center">
                <a
                  href="#"
                  className="z-20 flex size-auto items-center justify-start bg-none"
                >
                  <img
                    className="size-16 rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                    width={64}
                    height={64}
                    src="images/yq.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-lg font-bold uppercase leading-6 text-transparent md:text-2xl">
                </div>
                  The YAQINE Master Program
              </div>
              <div className="flex w-full flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  Master the secrets of successful e-commerce in Europe.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
                  Are you ready to master e-commerce strategies and gain complete control over your business?
Our program teaches you how to test your ideas, scale smart, and reach profits exceeding $10,000 with ease.
With all the resources and support we provide, you’ll be fully equipped to build sustainable success in the e-commerce market across Europe.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                  <Link href="#partner" className="button-33" scroll={true}>
                    Become a Partner
                  </Link>
                  <Link href="#pricing" className="button-34" scroll={true}>
                    Book a Consultation
                  </Link>
                </div>
              </div>
              <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 pt-10 sm:pb-10 md:grid md:grid-cols-2 lg:grid-cols-2">
                <div className="flex h-full flex-col text-left justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7  shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    The latest methods and structures
                  </h3>
                  <p className="text-gray-400">
                  As a member of the YAQINE Program, you’ll gain exclusive access to over 35 video updates covering the latest e-commerce methods and structures.
Stay ahead with up-to-date insights and learn the essential frameworks you need to successfully build and scale your business.
                  </p>
                  <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                    <img
                      className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/image-1.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex h-full flex-col text-left justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Daily One-on-One Training
                  </h3>
                  <p className="text-left text-gray-400 ">
                    In the YAQINE Program, we work side by side with our coaches and your dedicated team to help you build your own e-commerce business model.
Through daily communication and one-on-one training sessions on your private Slack channel, we provide the easiest and most practical way to learn by doing.
                  </p>
                  <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                    <img
                      className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/image-2.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10 sm:py-24 md:py-32">
        <Presentation />
      </section>

      <section className="w-full py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                Frequently Asked Questions
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Got questions? We’ve got the answers
                <br />
                Do you have any questions?
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-400">
                Got questions? We’ve got the answers.
              </p>
            </div>
          </div>
          <div>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center py-8 font-medium text-left transition-all">
                  What is the YAQINE Program?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400 text-left">
                  The YAQINE Program is a complete system designed to help entrepreneurs succeed with the Cash-on-Delivery model in Europe.
It combines advanced logistics, powerful digital tools, and step-by-step mentorship everything you need to build and scale a profitable e-commerce business.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center py-8 font-medium text-left transition-all">
                 Do I need experience to join the program?

                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400 text-left">
                 YNo prior experience is required.
The program is structured to guide both beginners and experienced sellers from setting up your first store to optimizing and scaling to consistent daily profits.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center  py-8 font-medium text-left transition-all">
                  How long does it take to see results?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400 text-left">
                  Most members begin seeing tangible results within the first 30 to 60 days, depending on their consistency and commitment.
The daily one-on-one coaching ensures you stay on track and overcome challenges quickly.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center py-8 font-medium text-right transition-all">
                 Is the profit really guaranteed by contract?

                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400 text-left">
                 Yes the YAQINE Program is the first paid training that guarantees profits through a legal contract.
This ensures full transparency and mutual trust while giving you complete peace of mind during your journey.

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center  py-8 font-medium text-left transition-all">
                What support do I get after joining?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400 text-left">
                  You’ll get direct access to our private Slack channel, where you can ask questions daily, attend live Q&A sessions, watch training videos on Loom, and book one-on-one calls with your dedicated coaches.
Our team is with you every step of the way.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section id="pricing" className="container mx-auto text-center md:px-20">
        <PricingTable />
      </section>
      <section className="mb-20 flex w-full flex-col items-center justify-between relative z-20">
        <div className="relative flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate px-4 sm:px-8 lg:px-24">
            <div className="container relative mx-auto my-10 w-full max-w-7xl rounded-3xl border border-gray-800/50 bg-gray-950/50 px-4 py-4 backdrop-blur-lg sm:px-8 sm:py-8 md:px-16 lg:px-24 lg:py-15">
              <div className="mb-8 flex justify-center">
                <a
                  href=""
                  className=" flex size-auto items-center justify-start bg-none"
                >
                  <img
                    src="/images/ECOMSIN.png"
                    width={250}
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  Launch Your Dream
                </div>
              </div>
              <div className="relative text-center">
                <h2 className="py-3 text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  Master the e-commerce of the future. Available today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover the roadmap to e-commerce success and watch success unfold before your eyes.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                  <Link href="#partner" className="button-33" scroll={true}>
                    Become a Partner
                  </Link>
                  <Link href="#pricing" className="button-34" scroll={true}>
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="absolute inset-x-0 -top-40 -transform-gpu overflow-hidden blur-3xl sm:-top-80 z-[-5])">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto relative mt-20 flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-4 text-center sm:px-6 md:px-8">
        <div className="z-20 flex w-full flex-row items-center justify-center">
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/1.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/2.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/3.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/4.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/5.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/6.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/you.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
        </div>
        <p className="cairo max-w-md text-sm text-gray-400">
    In a market worth over €717 billion, can’t you claim even a $1,000-a-day slice of it?
We’re the first paid program with legally guaranteed profits protected by a binding contract.
On top of that, we handle everything for you from product sourcing and logistics to shipping and money transfers.
Every detail is taken care of, so you can focus entirely on growth and results.
        </p>
      </section>
      <section id="contact" className="w-full pt-24 sm:pt-28">
        {/*<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-md">
            <div className="mb-8 flex justify-start">
              <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                Submit Your Application
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Start Your Journey with Us Now
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-400">
                Complete the form to get started. If you meet our criteria, one
                of our dedicated agents will reach out to you promptly. Let's
                take the first step together towards a promising opportunity.
              </p>
            </div>
          </div>
          <div className="relative flex h-auto w-full flex-col items-start justify-start">
            <div className="w-full text-white">
              <form className="w-full space-y-6" action="">
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=""
                  >
                    Full Name
                  </label>
                  <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
                    <input
                      placeholder="Yassine Fallahi"
                      name="fullname"
                      type="text"
                      className="flex h-10 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We need your full name to address you properly.
                  </p>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
                    <input
                      type="phone"
                      name="phoneNumber"
                      placeholder="+212 XXX XXX XXX"
                      className="flex h-10 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We need your phone number to contact you.
                  </p>
                </div>
              
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Do you have experience in e-commerce?
                  </label>
                  <div
                    className="gap-2 flex flex-col space-y-1"
                    role="radiogroup"
                  >
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option1"
                          checked={selectedOption2 === "option1"}
                          onChange={handleOptionChange2}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option2"
                          checked={selectedOption2 === "option2"}
                          onChange={handleOptionChange2}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    What is your budget range?
                  </label>
                  <div
                    className="gap-2 flex flex-col space-y-1"
                    role="radiogroup"
                  >
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option1"
                          checked={selectedOption3 === "option1"}
                          onChange={handleOptionChange3}
                        />
                        1K$ to 2.5K$
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option2"
                          checked={selectedOption3 === "option2"}
                          onChange={handleOptionChange3}
                        />
                        2.5K$ to 5K$
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option3"
                          checked={selectedOption3 === "option3"}
                          onChange={handleOptionChange3}
                        />
                        5K$
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <button className="button-33">
                  إعادة تعيين
                  </button>
                  <button className="button-34">
                  أرسل طلبك
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>*/}
        <div className="relative flex h-auto bg-slate-900 rounded-xl w-full flex-col items-start max-lg:px-6 p-8 justify-start max-w-[620px] mx-auto">
          <div className="mx-auto pb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              Contact Form
            </h2>
          </div>
          <div className="w-full text-white">
            <Form />
          </div>
        </div>

        <img className="centerImage" src="images/picbas.avif" alt="" />
      </section>
      <div className="relative flex h-auto w-full flex-col flex-wrap items-center justify-center gap-20 border-t border-blue-950 bg-gray-950 px-20 py-5 text-center md:flex-row">
        <div className="flex size-auto flex-1 flex-col items-center justify-start gap-10 md:flex-row">
          <a
            href=""
            className="z-20 flex size-auto items-center justify-start bg-none"
          >
            <img
              src="images/ECOMSIN.png"
              height={24}
              width={150}
              alt=""
            />
          </a>
          <div className="w-auto text-sm font-normal leading-snug text-gray-500/75">
            © 2025 Yaqine LLC All rights reserved  
Registered in Wyoming, USA  
Email: contact@fallahiyassine.com
          </div>
        </div>
      </div>
    </div>
  );
}
