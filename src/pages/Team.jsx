import explorearrow from '../assets/explorearrow.svg';
import marvin from '../assets/marvin.jpg';
import esther from '../assets/esther.jpg';
import annette from '../assets/annette.jpg';
import leader from '../assets/leader.jpg';

const Team = () => {
    return(
        <div>
            <div className="py-10 w-11/12 mx-auto px-1">
                    <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
                        <p className="text-sm font-normal mb-2">
                                <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                                    EXPERTS
                        </p>
                    Meet Our Team
                    </h1>
            </div>
            <div className="flex flex-nowrap justify-center gap-6 px-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-72">
                  <img className="rounded-lg w-full" src={marvin} alt="marvin" />
                </div>
                <div className="w-72 text-left px-2 py-2">
                  <div className="font-semibold">Marvin McKinney</div>
                  <div className="text-sm">Founder & CEO</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-72 text-center">
                  <img className="rounded-lg w-full" src={esther} alt="esther" />
                </div>
                <div className="w-72 text-left px-2 py-2">
                  <div className="font-semibold">Esther Howard</div>
                  <div className="text-sm">Marketing Head</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-72 text-center">
                  <img className="rounded-lg w-full" src={annette} alt="annette" />
                </div>
                <div className="w-72 text-left px-2 py-2">
                  <div className="font-semibold">Annette Black</div>
                  <div className="text-sm">Product Designer</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-72 text-center">
                  <img className="rounded-lg w-full" src={leader} alt="leader" />
                </div>
                <div className="w-72 text-left px-2 py-2">
                  <div className="font-semibold">Cody Fisher</div>
                  <div className="text-sm">Lead Developer</div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default Team;