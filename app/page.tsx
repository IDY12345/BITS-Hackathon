'use client'
import StarsCanvas from "@/components/Stars";
import EarthCanvas from "@/components/Earth";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoPlayer from "@/components/VideoPlayer";
import { slideIn } from "@/components/utils/motion";
import Repeat from "@/components/Repeat";
import CarCanvas from "@/components/Cars";
import Artificial from "@/components/Artificial";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <main className="min-h-screen">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="text-5xl font-bold text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0080] from-20% via-[#FF8C00] via-50% to-[#40E0D0] to-100%"
        >
          Welcome to the World of Animation.
        </motion.h1>
        <div className="grid grid-rows-1 grid-flow-col grid-col-5 px-12 py-20">
          <div>
            <video src="/short-clip4.mp4" width={800} height="1400px" autoPlay muted loop />

          </div>
          <video src="/short-clip6.mp4" width={800} height={1400} autoPlay muted loop />
          {/* <video src="/Anime.mp4" width={800} height={1400} autoPlay muted loop/> */}
          {/* <video src="/Anime.mp4" width={800} height={1400} autoPlay muted loop/> */}
          {/* <video src="/Anime.mp4" width={800} height={1400} autoPlay muted loop/> */}

        </div>
        <div className="flex justify-center items-center py-8">
          <video src="/short-clip.mp4" width={800} height="1400px" autoPlay muted loop />
        </div>
        <Artificial />
        <div></div>
        <h3>Generate the Animations easily and with your own story and Characters.</h3>
        <h4>One Stop Destination for all Animation Creation.</h4>
      </main>
    </>
  );
}
