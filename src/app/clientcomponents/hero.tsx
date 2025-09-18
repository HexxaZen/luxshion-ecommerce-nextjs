"use client";

import Link from 'next/link';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3S7378eZQIXSWI7BLfdEGH81yPy02QZWxnn6tXWusPKIvgjg9JC7D9R2Kxq5fhMOVRAicVnQsp8fL_Uyboddgf205nHWwNrC5nYuuT5EwI1DRVwRrjXGhsU-5WDCb87uZclwf5w?key=4jUDKM9Pz53LFmVVuqANzUZl')"
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
                        Lux<span className="text-gray-300">Shion</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
                        Discover Premium Fashion That Defines You
                    </p>
                    <Link
                        href="#products"
                        className="cta-button bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    );
};
