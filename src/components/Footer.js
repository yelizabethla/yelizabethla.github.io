function Footer() {
  return(
    <div className='footer w-full h-36 pb-6 bg-ellie-lightPink flex items-center justify-center gap-8'>
      <a tabIndex={101} className='link flex p-1' href='https://www.linkedin.com/in/elizabeth-la-590685156/' target="_blank" rel='noreferrer'> 
        <img src="/assets/icons/linkedin.svg" width = "32" height="32" alt='LinkedIn Logo' />
      </a>
      <a tabIndex={102} className='link flex p-1' href='https://medium.com/@ela_71699' target="_blank" rel='noreferrer'>
        <img src="/assets/icons/medium.svg" width = "32" height="32" alt='Medium Logo' />
      </a>
      <a tabIndex={103} className='link flex p-1' href='https://www.instagram.com/la.atellier/' target="_blank" rel='noreferrer'>
        <img src="/assets/icons/instagram.svg" width = "32" height="32" alt='Instagram Logo' />
      </a>
      <a tabIndex={104} className='link flex p-1' href='https://open.spotify.com/user/yelizabethla?si=C3k9mVsCSDeih4rF_ATNfg' target="_blank" rel='noreferrer'>
        <img src="/assets/icons/spotify.svg" width = "32" height="32" alt='Spotify Logo' />
      </a>
    </div>
  );
}

export default Footer;