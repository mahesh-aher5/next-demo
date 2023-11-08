// AboutSection.js
import React from 'react';
import About from '@/components/about/About';


export default function AboutSection() {
  return (
    <article className="lg:mt-[20rem] py-10 mb-[10rem] lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer"id="about">
          <About/>
        </article>
  );
}
