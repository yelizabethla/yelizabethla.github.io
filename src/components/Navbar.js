import { useState } from 'react';
import Menu from './Sidebar';
import NavLink from './NavLink';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FolderIcon from '@mui/icons-material/Folder';
import FileOpenRoundedIcon from '@mui/icons-material/FileOpenRounded';

function Hamburger() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  
  function toggleActive() {
    if(hamburgerActive) {
      document.body.style = '';
      setTimeout(() => {
        document.querySelector('.menu').classList.replace('z-50', '-z-10');
      }, 500);
    } else {
      document.body.style.overflowY = 'hidden';
      document.querySelector('.menu').classList.replace('-z-10', 'z-50');
    }

    setHamburgerActive(!hamburgerActive);
    
    document.querySelector('.sidebar').classList.toggle('right-0');
    document.querySelector('.sidebar').classList.toggle('-right-full');
    document.querySelector('.backdrop').classList.toggle('opacity-100');
    document.querySelector('.backdrop').classList.toggle('opacity-0');
  }

  return (
    <div className='hamburger'>
      <svg className='svg'>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div tabIndex={2} className={`plate plate4${hamburgerActive ? ' active' : ''}`} onClick={toggleActive}>
        <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path className="line line1" d="M 50,35 H 30" />
          <path className="line line2" d="M 50,35 H 70" />
          <path className="line line3" d="M 50,50 H 30" />
          <path className="line line4" d="M 50,50 H 70" />
          <path className="line line5" d="M 50,65 H 30" />
          <path className="line line6" d="M 50,65 H 70" />
        </svg>
        <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </div>
  );
}


function NavLinks(params) {
  return ( 
    params.desktopMode
    ?
      <div className='flex gap-6'>
        <NavLink href='/' tabIndex={2} ><FolderIcon/> PORTFOLIO</NavLink>
        <NavLink href='/thrifted' tabIndex={3} ><CheckroomIcon/> THRIFTED</NavLink>
        <NavLink href='/about' tabIndex={4} ><AutoAwesomeIcon/> ABOUT</NavLink>
        <NavLink href='/assets/Elizabeth (Ellie) La, Resume.pdf' target="_blank" rel='noreferrer' tabIndex={5} ><FileOpenRoundedIcon/> RESUME</NavLink>
      </div>
    :
      <Hamburger />
  );
}


function Navbar() {
  const [desktopMode, setDesktopMode] = useState(window.matchMedia('(min-width: 1160px)').matches);
  window.matchMedia('(min-width: 1160px)').addEventListener('change', (e) => {
    setDesktopMode(e.matches);
  });
  
  return(
    <>
      <nav className='bg-ellie-white sticky top-0 left-0 right-0 z-50'>
        <div className="max-w-[96rem] mx-auto flex justify-between items-center h-16 py-2 pl-4 pr-0 lg2:px-8">
          <a tabIndex={1} href='/' className='flex items-center flex-wrap gap-2 py-2 px-1' title="Take Me Home">
            <img className="h-8 pointer-events-none" alt='LE logo' src="/assets/le.webp" height="32"></img>
            <div className="text-[2rem] leading-none whitespace-nowrap pointer-events-none text-ellie-pink">ELLIE LA</div>
          </a>
          <NavLinks desktopMode={desktopMode}/>
        </div>
      </nav>
      {!desktopMode ? <Menu/> : null}
    </>
  );
}

export default Navbar;