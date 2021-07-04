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
                        <h1 className="font-sans text-gray-50 text-4xl lg:text-5xl p-2 font-bold  ">
                            About me
                        </h1>
                    </div>
                </div>
                <div className="mt-5 flex flex-col text-justify px-4 text-gray-600 lg:w-full lg:mx-auto lg:max-w-4xl xl:max-w-5xl lg:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae minus, sunt aliquid minima facere reiciendis nostrum. Deserunt, natus praesentium odit mollitia, enim officia laboriosam, ab quaerat dolores amet est?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nostrum, quos harum suscipit eaque sequi provident ducimus non neque maxime, commodi sit mollitia ullam iste corrupti ipsum earum tenetur odit.
                    <img className=" mt-5 rounded-2xl shadow-2xl w-60 mx-auto" src="/images/perfil.jpg" alt="" />
                </div>
            </main>
            <Footer/>
        </div>
    );
};