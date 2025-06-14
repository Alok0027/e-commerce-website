import lastvid from '../assets/lastvid.mp4';

const Lastvid = () => {
    return(
    <div className="relative w-full h-screen overflow-hidden bg-oklch(83.7% 0.128 66.29) flex items-center justify-between px-16">
      <video 
        autoPlay
        muted
        loop
        playsInline
        className="w-5/12 h-5/6 object-cover z-0"
      >
        <source src={lastvid} type="video/mp4" />
      </video>

      <div className="w-6/12 text-black z-10 pl-12">
        <h1 className="text-5xl font-thin mb-4 drop-shadow-lg">
            PARTNER IN SHINE
          </h1>
        <p>
          You’ve never been one to shy away from the spotlight. Well, now it’s your time to own it! SUGAR Partner In Shine Transferproof Lip Gloss is here to deliver a shine that won’t quit. Picture vibrant, long-lasting pigment that combines the glossy finish of a lip gloss with the staying power of a liquid lipstick. This beauty marvel is transferproof, waterproof and gives you a flawless, glass-like gloss that lasts up to 24 hours. The lightweight, non-sticky formula feels weightless on your lips, while ceramides, collagen and vitamin E hydrate and plump. With 15 stunning shades to complement every Indian skin tone, you’re ready to turn heads and shine all day. Unstoppable shine? It’s yours! Ready to take the spotlight and make it yours forever?
        </p>
      </div>
    </div>
    )
};
export default Lastvid;