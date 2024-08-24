import { FaBolt, FaCashRegister, FaChartLine, FaPaintBrush, FaSync, FaWhatsapp } from "react-icons/fa";

const Features = () => {
    const features = [
        {
          title: "Fully Customizable",
          body: "Tailor your online store to match your brand with our flexible customization options.",
          icon: <FaPaintBrush/> // Suggestion: FaPaintBrush from react-icons/fa
        },
        {
          title: "Lifetime Free Updates",
          body: "Stay ahead of the curve with continuous improvements and new features at no extra cost.",
          icon: <FaSync/> // Suggestion: FaSync from react-icons/fa
        },
        {
          title: "High-Speed Performance",
          body: "Deliver a lightning-fast shopping experience to keep customers engaged and boost sales.",
          icon: <FaBolt/> // Suggestion: FaBolt from react-icons/fa
        },
        {
          title: "Powerful Dashboard Control",
          body: "Manage your entire e-commerce operation effortlessly from a single, intuitive dashboard.",
          icon: <FaChartLine/> // Suggestion: FaChartLine from react-icons/fa
        },
        {
          title: "Free POS/Billing Software",
          body: "Seamlessly integrate your online and offline sales with our complimentary point-of-sale system.",
          icon: <FaCashRegister/> // Suggestion: FaCashRegister from react-icons/fa
        },
        {
          title: "WhatsApp Order Option",
          body: "Expand your reach and simplify ordering with our WhatsApp integration feature.",
          icon: <FaWhatsapp/> // Suggestion: FaWhatsapp from react-icons/fa
        }
      ];
    return (
        <div className="bg-secondary/10 py-10">
            <h1 className="commonwidth text-2xl mb-6 text-center">Why Choose Cartex?</h1>
            <section className="commonwidth grid grid-cols-3 gap-8">
                {
                    features.map((feature, index) => (
                        <div key={index} 
                        className="fullcenter bg-white p-5 text-center duration-300 hover:ring-2 ring-primary
                         cursor-pointer hover:shadow-xl group ">
                            <div className="h-16 w-16 bg-primary group-hover:bg-secondary text-white 
                             fullcenter mb-2 text-2xl duration-300">
                                {feature.icon}</div>
                            <h1 className="text-lg font-bold text-secondary">{feature.title}</h1>
                            <p className="text-sm text-gray-400">
                                {feature.body}
                            </p>
                            </div>
                            ))
                }
            </section>
        </div>
    );
}

export default Features;