import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
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
                            Contact Me
                        </h1>
                    </div>
                </div>
                <section className="mt-10 md:max-w-xl md:flex md:mx-auto">
                    <form className="p-4 space-y-5">
                        <div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
                            <div className="flex flex-col">
                                <label>Nombre</label>
                                <input
                                    className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
                                    type="text"
                                    placeholder="Nombre"
                                    name="email"
                                    id="name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Correo</label>
                                <input
                                    className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
                                    type="email"
                                    placeholder="correo"
                                    name="email"
                                    id="email"
                                />
                            </div>
                        </div>
                        <textarea
                            className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-2xl"
                            name=""
                            id=""
                            cols={30}
                            rows={15}
                            placeholder="En que te puedo ayudar"
                        />
                        <div className="flex justify-center">
                            <button
                                className="  border-2 border-gray-700 px-6 py-2 rounded-xl text-xl text-gray-500 font-Comfortaa font-bold focus:outline-none hover:bg-red-400 hover:text-white"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
};