import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';

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
                <div 
                    className="relative px-20 py-40 md:h-screen bg-gradient-to-r 
                    from-purple-700 via-pink-600 to-red-500 "
                >
                    <div className="absolute inset-x-0 top-0">
                        <Navbar/>
                    </div>
                    <div className="flex justify-center md:absolute md:inset-0 md:top-1/2">
                        <h1 
                            className="font-sans text-gray-50 text-4xl p-2 font-bold  md:text-5xl lg:text-6xl"
                        >
                            The Neuropsico Blog
                        </h1>
                    </div>
                </div>

                {/* what is neuropsico */}
                <div className="flex justify-center mt-10">
                    <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl xl:text-4xl">
                        What is Neuropsico?
                    </h1>
                </div>
                <div className="mt-5 flex text-justify px-4 text-gray-600 lg:w-full lg:mx-auto lg:max-w-4xl xl:max-w-5xl lg:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae minus, sunt aliquid minima facere reiciendis nostrum. Deserunt, natus praesentium odit mollitia, enim officia laboriosam, ab quaerat dolores amet est?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nostrum, quos harum suscipit eaque sequi provident ducimus non neque maxime, commodi sit mollitia ullam iste corrupti ipsum earum tenetur odit.
                </div>
                <img 
                    className="my-10 shadow-xl w-full md:max-w-lg md:mx-auto" 
                    src="/images/logo.jpg" 
                    alt="" 
                />

                {/* lasts posts */}
                <div className="">
                    <div className="xl:flex xl:justify-center">
                        <h1 className="text-2xl font-bold text-gray-900 p-4 lg:text-3xl xl:text-4xl">
                            Lastest from NeuroPsico
                        </h1>
                    </div>
                    <div className="px-4 space-y-2 mt-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:mx-auto lg:max-w-4xl lg:space-x-4">
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <div className="mt-2">
                        <Link href="/Articles">
                            <a 
                                className="flex justify-center text-lg text-gray-400 hover:underline" 
                                href=""
                            >
                                Read more
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
