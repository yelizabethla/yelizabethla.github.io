import { useEffect } from "react";
import { BlogPageSections } from "../../components/Blogs";
import Hero from '../../components/Hero';
import blogEntries from "../../entries/blogEntries";

function AutoRefi() {
  useEffect(() => {
    document.title = 'Ellie La - autoRefi';
  });
  
  let data = blogEntries.filter((e) => e.name === 'Auto Refi')[0];

  return (
    <div className="App">
      <Hero src='/assets/portfolio/autoRefi_cover.webp' alt={'autoRefi Cover'} height={300} />
      <div className="container">
        <div className="w-full pl-4 pr-4">
          <BlogPageSections blog={data.blog}/>
        </div>
      </div>
    </div>
  );
}

export default AutoRefi;