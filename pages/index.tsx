import Head from 'next/head'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import Showcase from '@/components/Showcase'
import StatsByThemes from '@/components/layouts/StatsByThemes'
import StatsByProvince from '@/components/layouts/StatsByProvince'
import News from '@/components/layouts/News'


// Notes for GIST

// A home page is a page that is the first page a user sees when they visit your site.
// It is also the page that is most likely to be indexed by search engines.
// It is important to make sure that your home page is optimized for search engines.
// This means that you should include keywords that are relevant to your site in the title and meta description.
// You should also include a sitemap and robots.txt file.
// You should also make sure that your home page is fast and easy to navigate.
// You can use the Google PageSpeed Insights tool to check the speed of your home page.
// You can also use the Google Search Console to check the indexing status of your home page.

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <div className="bg-gradient-to-tr from-slate-50 to-gray-100 "> 
          <Showcase/>
        </div>
      </div>
        <div className="container mx-auto max-w-5xl">
          <StatsByThemes/>
        </div>
        <div className="bg-cyan-50 py-20">
          <StatsByProvince/>
        </div>
        <div className="container mx-auto max-w-5xl">
          <News/>
        </div>
        <div className="bg-indigo-900 p-5">
          <Footer/>
      </div>
    </>
  )
}
