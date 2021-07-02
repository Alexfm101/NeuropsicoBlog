import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';


// TODO 1: develop home presentation 
// TODO 2: develop or find a good svg after SEO
// TODO 3: update post and develop posts components

export default function Home() {
  return (
        <div>
            <Head>
                <title>Create Next App</title>  
                <link rel="icon" href="/favicon.ico" />
            </Head>
        

            <main className="">
                {/* presentation */}
                <div className="relative px-20 py-40 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
                    <div className="absolute inset-0">
                        <Navbar/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-sans text-gray-50 text-4xl p-2 font-bold  ">
                            The Neuropsico Blog
                        </h1>
                    </div>
                </div>

                {/* what is neuropsico */}
                <div className="mt-10 flex text-justify px-4 text-gray-900 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae minus, sunt aliquid minima facere reiciendis nostrum. Deserunt, natus praesentium odit mollitia, enim officia laboriosam, ab quaerat dolores amet est?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nostrum, quos harum suscipit eaque sequi provident ducimus non neque maxime, commodi sit mollitia ullam iste corrupti ipsum earum tenetur odit.
                </div>
                <img className="my-10 px-2 rounded-xl  shadow-xl" src="/images/logo.jpg" alt="" />

                {/* lasts posts */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 p-4">Last Posts</h1>
                    <div className="px-4 space-y-2">
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <Link href="/Articles">
                        <a 
                            className="flex justify-center text-xl font-medium text-gray-400 focus:text-gray-500 underline" 
                            href=""
                        >
                            Read more
                        </a>
                    </Link>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
