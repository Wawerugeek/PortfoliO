import Anchorlink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 
    before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <Anchorlink
      href='#home'
        className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />

      <Anchorlink
      href='#skills'
        className={`${selectedPage === 'skills' ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('skills')}
      />

      <Anchorlink
      href='#projects'
        className={`${selectedPage === 'projects' ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projects')}
      />

      <Anchorlink
      href='#testimonials'
        className={`${selectedPage === 'testimonials' ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('testimonials')}
      />
      <Anchorlink
       href='#contact'
        className={`${selectedPage === 'contact' ? selectedPage : 'bg-dark-grey'}
        w-3 h-3 rounded-full`}
  
        onClick={() => setSelectedPage('contact')}
      />

    </div>
  );
};

export default DotGroup;
