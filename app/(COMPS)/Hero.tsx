import Link from "next/link";

const Hero = () => {
    return (
        <main className="h-[85vh] commonwidth grid lg:grid-cols-2 gap-x-20">
            <section className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold" data-aos="fade-right">Launch Your Dream <br /> 
                <span className="text-primary z-50">E-Commerce</span>  Empire
                </h1>

                <p className="py-2 text-gray-500 text-sm" 
                data-aos="fade-right" data-aos-delay="300">Empower your business with Cartex, the all-in-one e-commerce solution. 
                    Create a fully customized online store with your own domain, 
                    designed for shop owners who dream big. Start selling today with our user-friendly 
                    platform and watch your digital presence soar.</p>
                <div className="flex gap-x-2" data-aos="fade-up" data-aos-delay="500">
                <Link href={''} className="hero-link bg-primary">Get Started</Link>
                    <Link href={'https://demo.cartex.ziqx.cc'} 
                    className="hero-link bg-secondary">View Demo</Link>
                </div>
            </section>

            <section className="fullcenter">
                <img src="/images/hero.webp" className="updown" alt="" />
            </section>
        </main>
    );
}

export default Hero;
