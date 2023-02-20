import { waitForElm, TxtType } from "../helpers";

function Hero({src, alt, children, animation, centering, height }) {
  if (height === undefined) height = 350;
  
  waitForElm('.typewrite').then(elm => {
    var toRotate = elm.getAttribute('data-type');
    var period = elm.getAttribute('data-period');
    if (toRotate) {
      new TxtType(elm, JSON.parse(toRotate), period);
    }
  });

  function hoverText() {
    const entries = JSON.stringify(children.split(' | '));
    return (
      <div className="absolute w-full inset-0 grid place-items-center text-center">
        {animation
            ? <div className={`h1 ${animation}`} data-period="2000" data-type={entries}></div>
            : <div className="h1">{children}</div>}
      </div>
    );
  }

  return(
    <div className="w-full relative">
      <img className={`w-full object-cover object-${centering ? centering : 'bottom'}`} src={src} alt={alt || 'hero'} style={{height: height}}/>
      {children ? hoverText() : null}
    </div>
  );
}

export default Hero;