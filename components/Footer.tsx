import Link from 'next/link';

// TODO: add social networks

export default function Footer() {
    const currentYear = new Date().getFullYear();  

    return (
        <footer>
            <div className="text-center mt-4 text-lg ">
                <small>&copy; {currentYear} All rights reserved , Neuropsico</small> 
            </div>
        </footer>
    );
}

