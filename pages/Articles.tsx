import Navbar from '../components/Navbar';
import Head from 'next/head'
import Article from '../components/Article';
import Footer from '../components/Footer';
import { getSortedPostsData } from '../lib/Articles';

export default function Articles({allArticlesData}) {
    return (
        <div>
            <Head>
                <title>Neuropsico blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                {/* presentation */}
                <div className="relative px-20 py-40 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
                    <div className="absolute inset-0">
                        <Navbar/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-sans text-gray-50 text-4xl lg:text-5xl p-2 font-bold">
                            Articles
                        </h1>
                    </div>
                </div>
                <div className="px-4 space-y-2 mt-10 lg:grid lg:space-y-0 lg:grid-cols-3 2xl:flex 2xl:flex-col 2xl:max-w-2xl 2xl:mx-auto">
                    <ul>
                        {allArticlesData.map(({id, date, title}) => (
                            <li key={id}>
                                <Article
                                    title={title}
                                    date={date}
                                    id={id}
                                />
                            </li>    
                        ))}
                    </ul>
                </div> 
            </main>
            
            <Footer/>
        </div>
    );
};

export async function getStaticProps() {
    const allArticlesData = getSortedPostsData()
    return {
        props: {
            allArticlesData
        }
    }
};