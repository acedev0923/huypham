import Image from "next/image";
import { FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import { useState } from "react";
import { useTheme } from "next-themes";

Modal.setAppElement("#__next");

const Works = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    500: 1,
  };

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const portfolioData = [
    {
      id: 1,
      img: '/images/work_images/1.webp',
      imgSmall: '/images/work_images/1.webp',
      tag: 'Ecobased AI',
      title: 'AI-supported asset tokenization platform',
      description: 'This is an AI-powered asset tokenization platform built on Polygon. It enables regenerative projects to tokenize, launch, and trade assets on the platform. By leveraging Web3, AI, and climate technologies, it accelerates the transition to a regenerative impact economy. The platform simplifies impact investing by democratizing access to natural capital markets and utilizing AI. Key features include a launch pad, marketplace, and asset tokenization. It uses Chainlink’s POR protocol to connect real asset data to the blockchain.',
      link: 'https://muchbetter.ai/',
      linkText: 'muchbetter.ai',
      langages: ' Next.js, Tailwind CSS, Daisy UI, ExpressJs, Solidity, MongoDB, ChatGPT'
    },
    {
      id: 2,
      img: '/images/work_images/2.webp',
      imgSmall: '/images/work_images/2.webp',
      tag: 'Muchbetter AI',
      title: 'AI-based training system for salespeople',
      description: 'This is a training system for salespeople that offers simulations with AI-generated clients to enhance the training experience and improve sales performance. The system uses ChatGPT to simulate AI-powered clients and evaluate the salespeople based on their conversations with these virtual clients. It also helps salespeople practice adapting to various client contexts, needs, and personalities, as well as meet specific evaluation criteria. The system allows for the creation of custom clients, sales scenarios, evaluation stages, and criteria, enabling salespeople to train in a highly detailed and adaptive environment.',
      link: 'https://muchbetter.ai/',
      linkText: 'muchbetter.ai',
      langages: 'Next.js, Material Ui, FastAPI, ChatGPT, PostgreSQL, Redis, Azure'
    },
    {
      id: 3,
      img: '/images/work_images/3.webp',
      imgSmall: '/images/work_images/3.webp',
      tag: 'GemPad',
      title: 'Multi-chain decentralized lauchpad',
      description: 'Gempad stands as a premier multi-chain decentralized launchpad and crowdfund, offering a cutting-edge platform for user and project owners to initiate their project and tokens. Leveraging the capabilities inherent in ETH Diamond standard (EIP-2535), Gempad delivers a highly optimized decentralized application, positioning itself as a leader within the Web3 ecosystem.',
      link: 'https://educative.app/',
      linkText: 'educative.app',
      langages: 'Next.js, Material-Ui, Solidity, ExpressJs, MongoDB, Web3'
    },
    {
      id: 5,
      img: '/images/work_images/5.webp',
      imgSmall: '/images/work_images/5.webp',
      tag: 'GemPad',
      title: 'Multi-chain decentralized lauchpad',
      description: 'Gempad stands as a premier multi-chain decentralized launchpad and crowdfund, offering a cutting-edge platform for user and project owners to initiate their project and tokens. Leveraging the capabilities inherent in ETH Diamond standard (EIP-2535), Gempad delivers a highly optimized decentralized application, positioning itself as a leader within the Web3 ecosystem.',
      link: 'https://educative.app/',
      linkText: 'educative.app',
      langages: 'Next.js, Material-Ui, Solidity, ExpressJs, MongoDB, Web3'
    },
    {
      id: 6,
      img: '/images/work_images/6.webp',
      imgSmall: '/images/work_images/6.webp',
      tag: 'Kryptomon',
      title: 'Blockchain-Based Gaming Platform',
      description: 'A blockchain-based gaming platform where players can collect, train, and battle digital creatures called Kryptomons. Combining elements of Pokémon-style gameplay with blockchain technology, the platform offers an immersive experience where players can own, trade, and breed unique creatures, each with its own set of attributes and abilities. The game leverages NFTs (Non-Fungible Tokens) to ensure that each Kryptomon is one-of-a-kind and securely owned by the player.',
      link: 'https://kryptomon.co',
      linkText: 'kryptomon.co',
      langages: 'Express.js React.js MongoDB'
    },
    {
      id: 7,
      img: '/images/work_images/7.webp',
      imgSmall: '/images/work_images/7.webp',
      tag: 'Rallypoint',
      title: 'Military Networking Platform',
      description: 'A professional networking platform designed specifically for members of the military community. The platform connects service members, veterans, and military family members, providing a space for networking, career advancement, and sharing knowledge. Users can build profiles, connect with others, participate in discussions, and access career resources tailored to their military experience.',
      link: 'https://rallypoint.com/',
      linkText: 'rallypoint.com',
      langages: 'Node.js'
    },
    {
      id: 8,
      img: '/images/work_images/8.webp',
      imgSmall: '/images/work_images/8.webp',
      tag: 'Consent2Share',
      title: 'Healthcare Data Consent Management Platform',
      description: 'A professional networking platform designed specifically for members of the military community. The platform connects service members, veterans, and military family members, providing a space for networking, career advancement, and sharing knowledge. Users can build profiles, connect with others, participate in discussions, and access career resources tailored to their military experience.',
      // link: 'https://sewerratsocial.club/',
      // linkText: 'sewerratsocial.club',
      langages: 'Node.js'
    },
  ];

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {portfolioData.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" || theme === undefined ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModle(item?.id)}
          >
            <div className="overflow-hidden rounded-lg w-full h-40">
              <Image
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </Masonry>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
      >
        <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
              {singleData.tag} Project
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                  <FiFilePlus className="sm:text-lg hidden sm:block mr-2  md:text-xl" />
                  Project :&nbsp; <span className="font-medium "> Website</span>
                </p>

              </div>

              <div className="space-y-2">

                <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                  Preview :&nbsp;
                  <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                    <a
                      href={singleData?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleData?.linkText}
                    </a>
                  </span>
                </p>
                {/* <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                  Github :&nbsp;
                  <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                    <a
                      href={singleData?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleData?.githubText}
                    </a>
                  </span>
                </p> */}
              </div>
            </div>

            <p className="dark:text-white flex flex-row flex-wrap items-center text-[15px] sm:text-lg">
              <FiCode className="text-lg mr-2 hidden sm:block " />
              <span>Framework :&nbsp;</span>
              <span className="font-medium ">{singleData?.langages}</span>
            </p>

            <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm mt-2">
              {singleData?.description}
            </p>

            <Image
              className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog details image"
              width={620}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Works;
