import { useEffect, useState } from 'react';
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';

function App () {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(( )=> {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopPage(true);
      if (window.scrollY !== 0) setIsTopPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage = {isTopOfPage} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
        <div className='w-5/6 mx-auto md:h-full'>
          {isAboveMediumScreens && (
            <DotGroup 
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage} />
          )}
          <Landing setSelectedPage={ setSelectedPage} />

        </div>
    </div>
  );
}

export default App;
