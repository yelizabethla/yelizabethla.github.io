import { useEffect } from "react";
import { BlogPageSections } from "../../components/Blogs";
import Hero from '../../components/Hero';
import blogEntries from "../../entries/blogEntries";

function Render() {
  useEffect(() => {
    document.title = 'Ellie La - Render';
  })

  let data = blogEntries.filter((e) => e.name === 'Render')[0];

  return (
    <div className="App">
      <Hero src='/assets/portfolio/Render_cover.webp' alt={'Render Cover'} height={300} />
      <div className="container">
        <div className="w-full pl-4 pr-4">
          <BlogPageSections blog={data.blog}/>
        </div>
      </div>
    </div>
  );
}

export default Render;