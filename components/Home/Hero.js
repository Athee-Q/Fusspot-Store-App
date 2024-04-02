import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {    
    return (
        <section className="block md:grid grid-cols-2 place-content-center place-items-center bg-radial-gradient-yellow pt-[15vh] px-24 min-h-[100vh]">
            <div className="py-8 text-center md:text-left">
                <h1 className="text-4xl font-semibold">
                    <span className="text-primary">Welcome to FusspoT!</span><br />Elevate Your Day with Our Exquisite Juices
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Indulge in the essence of pure refreshment with our meticulously crafted juice blends. 
                    Let us brighten your day and elevate your mood with our premium selection of flavors.
                </p>
                <div className="sm:flex gap-4 text-sm justify-center md:justify-start">
                    <button className="bg-primary uppercase flex items-center justify-center gap-2 text-white px-4 py-2 rounded-full text-sm">Order now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 items-center font-semibold border-0">Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative hidden md:block">
                <Image className="shadow-3xl  rounded-3xl" src="/HeroOrange.png" width={300} height={300} alt="Juice" />
            </div>
        </section>
    );
};

export default Hero;
