// import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-10">
            <div>
                <img className="w-full max-h-10" src="/svgs/instagram.svg" alt="" />
            </div>
            <div className="text-center mt-2 text-lg ">
                <small>&copy; {currentYear} All rights reserved , Neuropsico</small>
            </div>
        </footer>
    );
}
