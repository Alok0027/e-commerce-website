import acmecorp from '../assets/acmecorp.svg';
import logoipsum from '../assets/logoipsum.svg';
import logoipsumcom from '../assets/logoipsumcom.svg';
import epicurious from '../assets/epicurious.svg';
import globalbank from '../assets/globalbank.svg';
import lightbox from '../assets/lightbox.svg';

const Trust = () => {
    return(
        <div className="bg-[#ebe2d9] py-10 h-96 px-10">
            <div>
                <p className="pl-20 text-lg " >Trusted By Worldwide Partner</p>
            </div>

            <div className="border-t-2 border-stone-300 mt-4 w-11/12 mx-auto pb-4">
                <p className="relative text-left w-10/12 pt-8 pl-96 ml-60">
                    At Vash, we take pride in being a trusted partner for leading brands and organizations worldwide. Our commitment to quality, innovation, and sustainability has earned us the confidence of industry leaders who share our passion for excellence in beauty and cosmetics.
                </p>
            </div>

            <div className="overflow-hidden mt-10">
                <div className="flex animate-scroll-horizontal gap-8 px-4 w-max">
                
                                    <div className="overflow-hidden">
                                        <img src={logoipsum} alt="haircream" className="w-40 h-36 filter grayscale"/>
                                    </div>
                                
                    
                                
                                    <div className="overflow-hidden">
                                        <img src={acmecorp} alt="handcream" className="w-40 h-36 filter grayscale" />
                                    </div>
                                
                    
                                
                                    <div className="overflow-hidden">
                                        <img src={epicurious} alt="foundation" className="w-40 h-36 filter grayscale" />
                                    </div>
                                   

                                <div className="overflow-hidden">
                                        <img src={globalbank} alt="foundation" className="w-40 h-36 filter grayscale" />
                                    </div>

                                <div className="overflow-hidden">
                                        <img src={lightbox} alt="foundation" className="w-40 h-36 filter grayscale" />
                                </div>

                                <div className="overflow-hidden">
                                        <img src={logoipsumcom} alt="foundation" className="w-40 h-36 filter grayscale" />
                                </div>        

                                
                                    <div className="overflow-hidden">
                                        <img src={logoipsum} alt="haircream" className="w-40 h-36 filter grayscale"/>
                                    </div>
                                
                    
                                
                                    <div className="overflow-hidden">
                                        <img src={acmecorp} alt="handcream" className="w-40 h-36 filter grayscale" />
                                    </div>
                                
                    
                                
                                    <div className="overflow-hidden">
                                        <img src={epicurious} alt="foundation" className="w-40 h-36 filter grayscale" />
                                    </div>
                                   

                                <div className="overflow-hidden">
                                        <img src={globalbank} alt="foundation" className="w-40 h-36 filter grayscale" />
                                    </div>

                                <div className="overflow-hidden">
                                        <img src={lightbox} alt="foundation" className="w-40 h-36 filter grayscale" />
                                </div>

                                <div className="overflow-hidden">
                                        <img src={logoipsumcom} alt="foundation" className="w-40 h-36 filter grayscale" />
                                </div>        

                            </div>
            </div>


        </div>
    )
};
export default Trust;