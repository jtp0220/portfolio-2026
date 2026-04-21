import "../styles/index.css";

import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import BlogPost from "../components/blog/BlogPost";

import { BlogData } from "../lib/blogposts";

export default function Blog() {
  return (
    <div id="blog" className="font-outfit min-h-screen w-full font-normal md:pt-15">
      <Header />
      <main>
        <h1 className="text-text-primary py-20 text-center text-7xl font-bold">Blog</h1>
        <section>
          <div className="m-auto flex max-w-250 flex-col items-center justify-center gap-5 px-7 py-10">
            {BlogData.map((value, index) => (
              <BlogPost key={index} {...value} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
