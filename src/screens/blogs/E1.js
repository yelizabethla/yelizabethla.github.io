import { useEffect } from "react";
import { BlogPageSections } from "../../components/Blogs";
import Hero from '../../components/Hero';
import blogEntries from "../../entries/blogEntries";

function E1() {
  useEffect(() => {
    document.title = 'Ellie La - E1';
  });
  
  let data = blogEntries.filter((e) => e.name === 'E1')[0];

  return (
    <div className="App">
      <Hero src='/assets/portfolio/e1_cover.webp' alt={'e1 Cover'} height={300} />
      <div className="container">
        <div className="w-full pl-4 pr-4">
          <BlogPageSections blog={data.blog}/>
        </div>
      </div>
    </div>
  );
}

export default E1;