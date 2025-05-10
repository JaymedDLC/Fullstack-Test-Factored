import Header from "../components/Header";

const Landing = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Header />

            <div className="px-8 py-16 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Imagen */}
                <div className="flex-1">
                    <img
                        src="https://cdn.prod.website-files.com/673e584365dc85b813c0e0d7/67ad1c6721049400479f279e_All_In_One.avif"
                        alt="Factored All In One"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>

                {/* Texto */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        The industry's most effective community of engineers
                    </h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Factored was founded in 2019 in Palo Alto, California, by Israel Niezen
                        and a team of experienced engineers, educators, and AI researchers.
                    </p>
                    <p className="text-lg text-gray-700">
                        With our co-founding advisor, Dr. Andrew Ng, we set out to address the significant
                        shortage of qualified AI, machine learning and data engineers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
