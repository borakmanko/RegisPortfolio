import "boxicons/css/boxicons.min.css";
const NavBar = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')
        // if it has hidden class remove, otherwise add
        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
    
        }
        else{
            mobileMenu.classList.add('hidden');
        }
    }
  return (
    //toggle visibility of Mobile Menu
    <header
      className="sticky top-0 flex justify-between items-center 
    py-4 px-4 lg:px-20 bg-black z-[50]"
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl
        font-light m-0"
      >
        Roi | Portfolio
      </h1>
      {/* {Desktop Navigation} */}
      {/* <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider
        transition-colors hover:text-gray-300"
          href="#"
        >
          WORK
        </a>
        <a
          className="text-base tracking-wider
        transition-colors hover:text-gray-300 "
          href="#"
        >
          EXPERIENCE
        </a>
        <a
          className="text-base tracking-wider
        transition-colors hover:text-gray-300 "
          href="#"
        >
          SKILLS
        </a>
        <a
          className="text-base tracking-wider
        transition-colors hover:text-gray-300 "
          href="#"
        >
          TESTIMONIALS
        </a>
      </nav> */}
      <button
        className="hidden md:block bg-[#a7a7a7] text-black py-3 
      px-8 rounded-full border-none font-medium transition-all duration-500
      hover:bg-white cursor-pointer "
      >
        Contact
      </button>
      {/* Mobile Menu Button */}
      <button onClick = {toggleMobileMenu} className="md:hidden text-3xl p-2">
        <i class="bx bx-menu"></i>
      </button>
      {/* Mobile Side Bar hidden */}
      <div id='mobileMenu'className='hidden fixed top-16 bottom-0 right-0 left-0
      p-5 md:hidden bg-black bg-opacity-70
      backdrop-blur- md'>
        <nav className='flex flex-col gap-6 items-center'>
          <a
            className="text-base tracking-wider
        transition-colors hover:text-gray-300"
            href="#"
          >
            WORK
          </a>
          <a
            className="text-base tracking-wider
        transition-colors hover:text-gray-300"
            href="#"
          >
            EXPERIENCE
          </a>
          <a
            className="text-base tracking-wider
        transition-colors hover:text-gray-300 "
            href="#"
          >
            SKILLS
          </a>
          <a
            className="text-base tracking-wider
        transition-colors hover:text-gray-300"
            href="#"
          >
            TESTIMONIALS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
