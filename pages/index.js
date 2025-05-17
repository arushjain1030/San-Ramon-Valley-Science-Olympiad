import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Button from '@components/Button';
import { GiBookCover, GiHumanPyramid } from 'react-icons/gi';
import { IoPeopleCircle } from 'react-icons/io5';
import Carousel from 'nuka-carousel';
import sponsors from './sponsors';
import Sponsors from './sponsors';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — SRVSO</title>
        <meta
          name="description"
          content="SRVSO provides students with the chance to explore the world of STEM in a competitive setting. Science Olympiad prepares the young generation for success in future years of middle school, high school, and beyond."
        />
      </Head>
      <h1 className="mt-16 text-white text-l heading">
        San Ramon Valley Science Olympiad
      </h1>
      <p className="mt-6 text-2xl text-center">est. 2018</p>

      {/* <Link href="https://drive.google.com/file/d/1ZsDxSCHf9rr1JEX77iWQtXbkgVak3I8S/view?usp=sharing">
        <a>
          <Button className="mx-auto mt-20 text-lg">
            Click Here to View the 2025 SRVSO Brochure
          </Button>
        </a>
      </Link> */}
      <div className="flex max-w-3xl mx-auto mt-20 gap-x-3">
        <div className="w-3 bg-green-600" />
        <div>
          <h2 className="mb-4">Welcome to SRVSO!</h2>
          <p className="leading-relaxed">
            SRVSO provides students with the chance to explore the world of STEM
            in a competitive setting. Science Olympiad prepares the young
            generation for success in future years of middle school, high
            school, and beyond.
          </p>
        </div>
      </div>

      <section>
        <Carousel
          className="relative mt-36 sm:mt-10"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0089_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0207_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0232_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0238_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0309_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0315_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0320_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0483_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
      </section>

      <section className="flex justify-between max-w-3xl mx-auto mt-32 gap-x-12 sm:flex-col sm:gap-y-8 sm:mt-8">
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 cursor-default hover:scale-105 gap-y-4 sm:hover:scale-95 sm:scale-90">
          <GiBookCover className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Curriculum aligned with Common Core and Next generation science
            standards.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 cursor-default hover:scale-105 gap-y-4 sm:hover:scale-95 sm:scale-90">
          <IoPeopleCircle className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Promotes life skills such as organization, leadership, confidence,
            team work and more.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 cursor-default hover:scale-105 gap-y-4 sm:hover:scale-95 sm:scale-90">
          <GiHumanPyramid className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Work in a team of peers to be rewarded for the pursuit of scientific
            achievement.
          </p>
        </div>
      </section>

      <Sponsors />
    </>
  );
}
