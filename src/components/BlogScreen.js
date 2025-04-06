import { useEffect, useState } from "react";
import { BlogPageSections } from "./Blogs";
import Hero from './Hero';
import PasswordModal from "./PasswordModal";

function BlogScreen({ blogData }) {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(blogData.isPasswordProtected);
  
  useEffect(() => {
    document.title = 'Ellie La - ' + blogData.name;
  });

  return (
    <div className="App">
      {isPasswordModalOpen ? <PasswordModal isOpen={isPasswordModalOpen} setIsOpen={setIsPasswordModalOpen} /> : <>
        <Hero src={blogData.heroImage?.uri || '/assets/default-fallback-image.png'} alt={blogData.heroImage?.alt || 'Hero Image'} height={blogData.heroImage?.height || 300} />
        <div className="container">
          <div className="w-full pl-4 pr-4">
            <BlogPageSections blog={blogData.blog}/>
          </div>
        </div>
      </>}
    </div>
  );
}

export default BlogScreen;