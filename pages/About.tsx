import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TODO: make responsive this page

export default function About() {
    return (
        <div>
            <Navbar/>
            <main>
                <div className="p-10">
                    <h1 className="flex justify-center text-4xl font-bold">About Me</h1>
                </div>
                <div className="flex text-justify px-4">
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