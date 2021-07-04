import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TODO: make responsive this page

export default function About() {
    return (
        <div>
            <main>
                {/* presentation */}
                <div className="relative px-16 py-40 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
                    <div className="absolute inset-0">
                        <Navbar/>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-sans text-gray-50 text-4xl p-2 font-bold  ">
                            About me
                        </h1>
                    </div>
                </div>
                <div className="flex text-justify px-4  mt-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias debitis consectetur temporibus animi veniam obcaecati non. Excepturi earum reiciendis repellendus blanditiis quas dolore voluptas! Molestias accusantium reprehenderit maxime atque aut!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore possimus error facilis deserunt beatae excepturi voluptate earum minima non doloribus. Suscipit sunt magnam eligendi in nobis assumenda, laboriosam sequi iure.
                </div>
                <div className=" mt-3 m-20 flex justify-center shadow-2xl">
                    <img className="rounded-2xl shadow-2xl" src="/images/perfil.jpg" alt="" />
                </div>
            </main>
            <Footer/>
        </div>
    );
};