const Aboutus = () => {
    return (
        <section className="bg-[#faf8f6] py-8 border-t border-gray-200 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-16">
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <div className="uppercase text-base tracking-widest text-gray-700 font-normal mt-2">Who we are</div>
                        <a href="#" className="text-sm font-normal text-gray-900 flex items-center gap-1 hover:text-cyan-700 transition-colors duration-200 pt-32">
                            About us <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-6">
                        <h2 className="text-3xl md:text-3xl font-normal text-gray-900 leading-tight mb-2">
                            Our commitment is to celebrate individuality, with products that suit every skin type, tone, and personal style.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base">
                            <div>
                                Our mission is to provide high-quality, luxurious beauty products that enhance your natural allure.
                            </div>
                            <div>
                                We carefully source and develop our cosmetics to ensure they meet the highest standards of quality, so you can trust every product you use.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  pt-10">
                    <div>
                        <div className="text-sm text-gray-700 mb-2 font-medium border-b border-gray-200">Global Reach</div>
                        <div className="flex flex-row items-start gap-8 py-4 border-b border-gray-200">
                                <div className="text-5xl font-normal text-gray-900 mb-1">20+</div>
                                <div className="text-sm text-gray-700">Serving customers in over 20+ countries worldwide.</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-700 mb-2 font-medium border-b border-gray-200">Customer Satisfaction</div>
                            <div className="flex flex-row items-start gap-8 py-4 border-b border-gray-200">
                                <div className="text-5xl font-normal text-gray-900 mb-1">95%</div>
                                <div className="text-sm text-gray-700">Trusted by thousands for exceptional results.</div>
                            </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-700 mb-2 font-medium border-b border-gray-200">High-Quality Ingredients</div>
                            <div className="flex flex-row items-start gap-8 py-4 border-b border-gray-200">
                                <div className="text-5xl font-normal text-gray-900 mb-1">80%</div>
                                <div className="text-sm text-gray-700">Made with premium ingredients for maximum impact.</div>
                                </div>
                    </div>
                </div>    
            </div>
        </section>
    )
};

export default Aboutus;