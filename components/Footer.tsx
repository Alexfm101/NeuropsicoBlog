import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-10">
            <div className="grid grid-cols-2 p-2 mx-auto max-w-xs  mt-4">
                    <Link href="https://instagram.com/neuro.psico">
                        <a>
                            <svg className="w-full max-h-10"  height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" ><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stopColor="#fd5"/><stop offset=".5" stopColor="#ff543e"/><stop offset="1" stopColor="#c837ab"/></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"/><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/></svg>
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

{/* 
    
    <a href='https://www.freepik.com/vectors/music'>Music vector created by macrovector - www.freepik.com</a>
    <a href='https://www.freepik.com/vectors/school'>School vector created by macrovector_official - www.freepik.com</a>
    
<div className="p-2 mt- bg-gray-300 rounded-lg shadow-xl">
    Icons made by <a className="text-red-600" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a className="text-purple-500" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>    
<a href='https://www.freepik.com/vectors/character'>Character vector created by freepik - www.freepik.com</a> */}