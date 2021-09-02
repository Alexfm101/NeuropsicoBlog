import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-10">
            <div className="grid grid-cols-2 p-2 mx-auto max-w-xs  mt-4">
                    <Link href="https://instagram.com/neuro.psico">
                        <a>
                            <img className="w-full max-h-10" src="/svgs/instagram.svg" alt="" />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/neuropsico">
                        <a>
                            <img className="w-full max-h-10" src="/svgs/twitter.svg" alt="" />           
                        </a>
                    </Link>
                </div>
            <div className="text-center mt-2 text-lg ">
                <small>&copy; {currentYear} All rights reserved , Neuropsico</small>
            </div>
        </footer>
    );
}

// TODO: agregar de freepik freepik

{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<a href='https://www.freepik.com/vectors/music'>Music vector created by macrovector - www.freepik.com</a>

<a href='https://www.freepik.com/vectors/school'>School vector created by macrovector_official - www.freepik.com</a>

<a href='https://www.freepik.com/vectors/character'>Character vector created by freepik - www.freepik.com</a> */}