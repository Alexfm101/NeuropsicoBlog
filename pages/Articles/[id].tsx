import { getAllPostIds, getPostData } from '../../lib/Articles';
import Navbar from '../../components/Navbar';
import Date from '../../components/Date';
import Footer from '../../components/Footer';

export default function Article({ArticleData}) {
    return (
        <div>
            <div className="relative px-20 py-40 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
                    <div className="absolute inset-0">
                        <Navbar/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-sans text-gray-50 text-4xl lg:text-5xl p-2 font-bold">
                            {ArticleData.title}
                        </h1>
                    </div>
            </div>
            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div className="mt-10">
                    <small className=" text-lg font-semibold text-gray-400">
                        {<Date dateString={ArticleData.date}/>}
                    </small>
                </div>
                <div 
                    className="text-justify font-semibold mt-4 text-gray-900 markdown" 
                    dangerouslySetInnerHTML={{ __html: ArticleData.contentHtml }} 
                />
            </main>
            <Footer/>

        </div>
    )
};

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  };
  
  export async function getStaticProps({ params }) {
    const ArticleData = await getPostData(params.id)
    return {
      props: {
        ArticleData
      }
    }
  };