import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Contact() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, message: null},
    });

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({...prevStatus, submitting: true}));

        console.log(info);

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        });

        const message = await res.text();

        if (res.status === 200) {
            setStatus({
                submitted: true,
                submitting: false, 
                info: {error: false, message:message}
            });
            setInfo({
                name: '',
                email: '',
                message:'',
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {error: true, message: message}
            });
        }

    }

    const handleOnChange = (e) => {
        e.persist();
        setInfo((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info:{error: false, message: null},
        });
    }

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
                    <form 
                        className="p-4 space-y-5"
                        onSubmit={handleOnSubmit}
                    >
                        <div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
                            <div className="flex flex-col">
                                <label>Nombre</label>
                                <input
                                    className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 "
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Nombre"
                                    value={info.name}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Correo</label>
                                <input
                                    className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="correo"
                                    value={info.email}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <textarea
                            className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400"
                            name="message"
                            id="message"
                            cols={30}
                            rows={15}
                            placeholder="En que te puedo ayudar"
                            value={info.message}
                            onChange={handleOnChange}
                        />
                        <div className="flex justify-center flex-col">
                            <button
                                className="border-2 border-gray-700 px-6 py-2 rounded-xl text-xl text-gray-500 font-Comfortaa font-bold focus:outline-none hover:bg-red-400 hover:text-white md:mx-auto"
                                type="submit"
                                disabled={status.submitting}
                            >
                                {
                                    !status.submitting
                                        ? !status.submitted
                                            ? 'Enviar'
                                            : 'Enviado'
                                        : 'enviando...'
                                }
                            </button>
                            <div className="mt-4">
                                {status.info.error && (
                                    <div className="">
                                        Error: {status.info.message}
                                    </div>
                                )}
                                {!status.info.error && status.info.message && (
                                    <div className="">{status.info.message}</div>
                                )}
					        </div>
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
};