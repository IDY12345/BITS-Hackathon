'use client'
import React from 'react'
import { slideIn } from "@/components/utils/motion";
import { motion } from "framer-motion";
import EarthCanvas from "@/components/Earth";
import Link from 'next/link';

const Navabr = () => {
    return (
        <section className='flex justify-between items-center'>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='w-[200px]'>
                <EarthCanvas />
            </motion.div>
            <Link href='/'>
            <h1 className='text-xl px-8 bg-clip-text text-transparent bg-gradient-to-r  from-[#FF8C00] from-0% to-[#40E0D0] to-100%'>Manga2Anime</h1>
            </Link>
        </section>
    )
}

export default Navabr