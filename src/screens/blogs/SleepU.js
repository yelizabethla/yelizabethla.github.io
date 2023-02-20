import { useEffect } from "react";
import { BlogPageSections } from "../../components/Blogs";
import Hero from '../../components/Hero';
import blogEntries from "../../entries/blogEntries";

function SleepU() {
  useEffect(() => {
    document.title = 'Ellie La - sleepU';
  });
  
  let data = blogEntries.filter((e) => e.name === 'sleepU')[0];

  return (
    <div className="App">
      <Hero src='/assets/portfolio/sleepU_cover.webp' alt={'sleepU Cover'} height={300} />
      <div className="container">
        <div className="w-full pl-4 pr-4">
          <BlogPageSections blog={data.blog}/>
        </div>
      </div>
    </div>
  );
}

export default SleepU;