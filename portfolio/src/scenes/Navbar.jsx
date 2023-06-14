import { useState } from 'react';
import Anchorlink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedpage, setSelectedpage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <Anchorlink
      className={`${selectedpage === lowerCasePage ? 'text-orange-600' : ""}
        hover:text-orange-600 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedpage(lowerCasePage)}
    > {page}

    </Anchorlink>
  );
};

const Navbar = ({ isTopOfPage, selectedpage, setSelectedpage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'> Top </h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens
          ? (
            <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
              <Link
                page='Home'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Skills'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Projects'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Testimonials'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Contact'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />
            </div>
            )
          : (<button
              className='rounded-full bg-red p-2'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
             >
            <img alt='Menu' src='../assets/menu-icon.svg' />
             </button>)}
             
             {/* mobile menu pop-up */}

             {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'> 
                
                {/* {CLOSE ICON} */}

                <div className='flex justify-end p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img alt="close-icon" src="../assets/close-icon.svg"/>
                    </button>

                </div>

                {/* {MENU ITEMS} */}
                <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                <Link
                page='Home'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Skills'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Projects'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Testimonials'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />

              <Link
                page='Contact'
                selectedpage={selectedpage}
                setSelectedpage={setSelectedpage}
              />
                </div>
                </div>
             )}

      </div>

    </nav>
  );
};
export default Navbar;
