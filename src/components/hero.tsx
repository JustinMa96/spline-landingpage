import Spline from "@splinetool/react-spline";

const Hero = () => {
    return (
      <section className="flex w-full">
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">Get to know Vancouver from here</h1>
          <p className="text-lg mb-6">Welcome to Venture! Explore detailed information about various cities in Vancouver. Easily discover population counts, average rent, and the number of parks and recreational areas in each city. Dive in and uncover more about Vancouver with us!</p>
          <a href="https://venture-gamma.vercel.app/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Learn More</a>
        </div>
  
        <div className="w-1/2 bg-gray-200">
            <Spline scene="https://prod.spline.design/TIz4PIbJkDxWN3ID/scene.splinecode" />
        </div>
      </section>
    );
};

export default Hero;
