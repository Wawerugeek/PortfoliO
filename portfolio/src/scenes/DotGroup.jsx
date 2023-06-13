import Anchorlink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 
    before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <Anchorlink
        className={`${selectedPage === 'home' ? selectedPage : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href='#home'
        onClick={() => setSelectedPage('home')}
      />

      <Anchorlink
        className={`${selectedPage === 'skills' ? selectedPage : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href='#skills'
        onClick={() => setSelectedPage('skills')}
      />

      <Anchorlink
        className={`${selectedPage === 'projects' ? selectedPage : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href='#projects'
        onClick={() => setSelectedPage('projects')}
      />

      <Anchorlink
        className={`${selectedPage === 'testimonials' ? selectedPage : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href='#testimonials'
        onClick={() => setSelectedPage('testimonials')}
      />
      <Anchorlink
        className={`${selectedPage === 'contact' ? 'bg-dark-grey' : selectedStyles}
        w-3 h-3 rounded-full`}
        href='#contact'
        onClick={() => setSelectedPage('contact')}
      />

    </div>
  );
};

export default DotGroup;
