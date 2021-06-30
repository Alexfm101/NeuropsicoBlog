import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            <main className="">
                <div className="flex justify-center p-20">
                    <h1 className="text-4xl font-bold text-black">
                    The Neuropsico Blog
                    </h1>
                </div>
                <div className="flex text-justify px-4 text-gray-900 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae minus, sunt aliquid minima facere reiciendis nostrum. Deserunt, natus praesentium odit mollitia, enim officia laboriosam, ab quaerat dolores amet est?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nostrum, quos harum suscipit eaque sequi provident ducimus non neque maxime, commodi sit mollitia ullam iste corrupti ipsum earum tenetur odit.
                </div>
                <img className="my-10 px-2 rounded-xl  shadow-xl" src="/images/logo.jpg" alt="" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 p-4">Last Posts</h1>

                    <span className="flex justify-center text-xl font-medium text-gray-400 focus:text-gray-500 underline
                    ">Read more</span>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
