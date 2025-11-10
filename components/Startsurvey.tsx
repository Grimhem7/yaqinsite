import React from "react";
import Link from "next/link";
import Head from "next/head";

const Startsurvey = () => {
return (
    <div className=" flex items-center h-screen " style={{ backgroundImage: 'url("/images/bg.svg")' }}>
        <Head>
            <title>E-commerce</title>
            <meta name="description" content="E-commerce description" />
            <meta property="og:title" content="E-commerce" />
            <meta property="og:description" content="E-commerce survey" />
            <meta property="og:image" content="/images/preview.png" />
            <link rel="icon" href="/favicon.png" />
            <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ELRGRNPYZQ');
                `,
            }}
            ></script>
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ELRGRNPYZQ"
            ></script>
        </Head>
        <div className=" max-lg:h-full lg:rounded gap-16 flex justify-center flex-col items-center m-auto text-black w-[600px] px-8 py-16 shadow-2xl bgwhite ">
            <div className=" text-center flex text-xl font-light justify-center items-center flex-col">
                <h1 className=" font-bold text-center text-3xl my-6 ">
                Have you backed on Kickstarter ? 
                </h1>
            </div>
            <div className=" flex max-lg:flex-col gap-14 text-center ">
                <button className=" ">
                    <Link className="px-16 py-3 text-2xl font-light bg-blue-500 rounded-lg text-white hover:cursor-pointer" href="/backed">Yes</Link>
                </button>
                <button className=" ">
                    <Link className="px-16 py-3 text-2xl font-light bg-blue-500 rounded-lg text-white hover:cursor-pointer tracking-widest" href="/not-backed"> No </Link>
                </button>
            </div>
            <div className="w-full text-center">
                <p className="mb-4">
                Follow us on
                </p>
                <div className="flex justify-center gap-3">
                    <a href="https://www.instagram.com/E-commerce/" target="_blank" rel="noopener noreferrer">
                        <img src="./images/icon-insta.svg" alt="Instagram" width="32" height="32"></img>
                    </a>
                    <a href="https://www.facebook.com/E-commerceOfficial/" target="_blank" rel="noopener noreferrer">
                        <img src="./images/icon-fb.svg" alt="Instagram" width="32" height="32"></img>
                    </a>
                    <a href="https://www.youtube.com/@E-commerce" target="_blank" rel="noopener noreferrer">
                        <img src="./images/icon-ytb.svg" alt="Instagram" width="32" height="32"></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
);
};
export default Startsurvey;