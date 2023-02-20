import Hero from '../components/Hero';
import { BlogsDisplay } from '../components/Blogs';

function Home() {
  return (
    <div className="App">
      <main className='flex-grow'>
        <Hero src="./assets/cover.webp" alt="homepage hero" animation="typewrite" centering={'right'}>Designer. | Researcher. | Creator. | Designer. Researcher. Creator.</Hero>
        <BlogsDisplay />
      </main>
    </div>
  );
}

export default Home;
