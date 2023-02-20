import { useEffect } from "react";
import { BlogPageSections } from "../../components/Blogs";
import Hero from '../../components/Hero';
import blogEntries from "../../entries/blogEntries";

function AerialMetrics() {
  useEffect(() => {
    document.title = 'Ellie La - Aerial Metrics';
  });
  
  let data = blogEntries.filter((e) => e.name === 'Aerial Metrics')[0];

  return (
    <div className="App">
      <Hero src='/assets/portfolio/aerial_metrics_cover.webp' alt={'Aerial Metrics Cover'} height={300} />
      <div className="container">
        <div className="w-full pl-4 pr-4">
          <BlogPageSections blog={data.blog}/>
        </div>
      </div>
    </div>
  );
}

export default AerialMetrics;