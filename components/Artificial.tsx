'use client'
import React from 'react'
import Repeat from './Repeat'
import Image from 'next/image'

const Artificial = () => {
  return (
    <section className='min-h-screen py-20'>
        <div className='text-4xl font-bold text-center py-8'>
            <Repeat word={"Artificial Intelligence Revolutionizing The Field Of Animation..."} />
        </div>
        <div className='px-20 pt-20 bg-ai bg-cover w-full h-screen'>
            <h1 className='text-3xl text-green-400 py-4'>Artificial Intelligence [AI] </h1>
            <p className='w-[700px] text-xl'>Artificial Intelligence refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence. AI encompasses various techniques and approaches, including machine learning, deep learning, natural language processing, computer vision, and more. AI systems learn from data, identify patterns, and make decisions or predictions based on that information.</p>
            <h1 className='py-12 text-3xl text-purple-500'>AI in Practice:</h1>
            <p className='w-[700px] text-xl'>Industry Applications: AI is being used across various industries, including healthcare (diagnosis and treatment planning), finance (fraud detection and risk assessment), transportation (autonomous vehicles), and retail (personalized recommendations).</p>
            <p className='w-[700px] text-xl py-8'>Research and Development: AI research is ongoing in areas such as unsupervised learning, explainable AI, federated learning, and quantum machine learning. These advances aim to address challenges such as data privacy, model interpretability, and scalability.</p>
        </div>
    </section>
  )
}

export default Artificial