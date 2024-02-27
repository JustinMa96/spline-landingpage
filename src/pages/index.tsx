import Image from "next/image";
import Head from 'next/head';
import Header from "@/components/header";
import Hero from "@/components/hero";
import PricingCard from "@/components/pricingcard";
import NewsletterSubscription from "@/components/newsletter";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Head>
        <title>Venture Landing Page</title>
        <meta name="description" content="Your Landing Page Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Venture
        </h1>

        <Hero />



        {/* Pricing Cards */}
        <div className="flex justify-center mt-8 gap-5">
          <PricingCard
            title="Average Rent"
            description="Access detailed insights into rental prices for each city with the Average Rent feature."
            price="$1.99/month"
            splineUrl="https://prod.spline.design/btYvAE4sDxIyu6qb/scene.splinecode"
            color="#364EC0"
          />
          <PricingCard
            title="City Density"  
            description="Explore population density and related statistics for each city with the Density feature."
            price="$2.99/month"
            splineUrl="https://prod.spline.design/tQFxL8bMCL5SRBsn/scene.splinecode"
            color="#C73E1D"
          />
            <PricingCard
            title="City Parks"
            description="Discover the number and locations of parks and recreational areas in each city with the Parks feature."
            price="$3.99/month"
            splineUrl="https://prod.spline.design/6U6hLYwxUbezjGOD/scene.splinecode"
            color="#008E6F"
          />

        </div>

        <NewsletterSubscription />
      </main>

      <footer className="mt-auto bg-gray-200 py-4">
        <div className="max-w-4xl mx-auto text-center">
          Create by Justin Ma © 2024
        </div>
        <a href="https://github.com/lance-malaga/venture" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
      </footer>
    </div>
  );
}
