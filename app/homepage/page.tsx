import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AIRBDSEcosystem from './components/AIRBDSEcosystem';
import CoreCapabilities from './components/CoreCapabilities';
import TrustIndicators from './components/TrustIndicators';
import ProductTeaser from './components/ProductTeaser';
import FinalCTA from './components/FinalCTA';

export const metadata: Metadata = {
  title: 'Kahaasa - Engineering the AI-Driven Future | Digital Transformation',
  description:
    'Kahaasa empowers businesses to reimagine growth through AIRBDS technology—AI, IoT, RPA, Blockchain, Data Science, and Security. 5+ years of enterprise delivery experience.',
  keywords:
    'digital transformation, AI solutions, AIRBDS, enterprise software, cloud computing, SaaS, machine learning, blockchain, RPA, data science',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main>  
        <HeroSection />
        <AIRBDSEcosystem />
        <CoreCapabilities />
        <TrustIndicators />
        <ProductTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}