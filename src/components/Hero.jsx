import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
const Hero = () => {
  return (
    <main className="flex lg:mt-20 mx-20 flex-col lg:flex-row items-center
    justify-between min-h-[calc(90vh-6rem)]">
       <div className="flex-wrap flex-col max-w-2xl mt-10 lg:mt-0 z-10">

            {/* Tag box w/ gradient border */}
            <div className='relative w-[95%] sm:w-48 h-10
                bg-gradient-to-r from-[#656565] to-[#a7a7a7] shadow-[0_0_15px
                _rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full
                flex items-center justify-center gap-1' >
                    
                    COMPUTER ENGINEER<i class='bx bx-code' ></i>
                </div>
            </div>
            {/* Main Headline */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold tracking-wider my-8'>
                Hi! I'm Roi Regis.
            </h1>
            {/* Description */}
            <p className='text-base sm:text-lg tracking-wider text-gray-400
            max-w-[25rem] lg:max-w-[30rem]'>
                Innovative Engineer with a passion for designing efficient systems and developing scalable software solutions.
            </p>
            {/* Button */}
            <div className="flex gap-4 mt-12">
                <a className="border border-[#2a2a2a]
                py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg
                text-sm font-semibold tracking-wider transition-all
                duration-300 hover:bg-[#1a1a1a] bg-gray-300
                text-black hover:text-white"href="#">
                    See My Works
                </a>
            </div>
        </div>
        {/* 3D Model */}
         <Spline className="opacity-80 rounded-full absolute lg:top-20 bottom-0 lg:left-[25%]
         sm:left-[-2%] " scene="https://prod.spline.design/jYxMlvITY4AMqXLn/scene.splinecode" />
    </main>
    
  )
}

export default Hero
