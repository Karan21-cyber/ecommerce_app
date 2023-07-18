import React from 'react'
import ImageSlider from "./ImageSlider";
import CategorySection from './CategorySection';
import TrandingSection from './TrandingSection';
import AdveritseSection from './AdveritseSection';
import BestSales from './BestSales';
import LatestBlog from './LatestBlog';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='w-full h-[92vh] relative top-11 md:top-20  overflow-x-hidden overflow-y-scroll no-scrollbar' >
     <ImageSlider />
     <CategorySection />
     <TrandingSection />
     <AdveritseSection />
     <BestSales />
     <LatestBlog />
     <Footer />
    </div>
  )
}

export default HomePage