const path = window.location.pathname;
function NavLink({ href, children, customClasses, ...props }) {
  return (
    <a className={`link transition-all duration-200 font-medium py-2 px-1 flex items-center gap-3 ${path === href ? 'text-ellie-pink !opacity-100' : 'text-ellie-black'}${customClasses ? ' ' + customClasses : ''}`} href={href} {...props}>{children}</a>
  );
}

export default NavLink;