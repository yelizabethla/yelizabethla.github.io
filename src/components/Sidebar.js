import NavLink from './NavLink';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FolderIcon from '@mui/icons-material/Folder';
import FileOpenRoundedIcon from '@mui/icons-material/FileOpenRounded';

function Backdrop() {
  return (
    <div className="backdrop w-screen h-screen bg-black/50 transition-opacity duration-500 opacity-0" />
  );
}

function Sidebar() {
  return (
    <div className="sidebar absolute top-0 -right-full w-full max-w-screen-xs h-screen bg-ellie-white transition-all duration-500">
      <div className="p-4 xs:p-6 flex flex-col gap-1">
        <NavLink href='/' tabIndex={2} customClasses='!font-bold' ><FolderIcon/> PORTFOLIO</NavLink>
        <NavLink href='/thrifted' tabIndex={3} customClasses='!font-bold' ><CheckroomIcon/> THRIFTED</NavLink>
        <NavLink href='/about' tabIndex={4} customClasses='!font-bold' ><AutoAwesomeIcon/> ABOUT</NavLink>
        <NavLink href='/assets/La, Elizabeth_Resume23.pdf' target="_blank" rel='noreferrer' tabIndex={5} customClasses='!font-bold'><FileOpenRoundedIcon/> RESUME</NavLink>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <div className="menu fixed top-16 left-0 right-0 w-screen h-screen -z-10">
      <Backdrop/>
      <Sidebar/>
    </div>
  )
}

export default Menu;