import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="max-w-screen-xl mx-auto ">
				<nav className=" w-full md:w-auto p-2 md:mx-2">
					<div className="flex justify-between">
						<Link href="/">
							<a href="">
								<img
									className={` h-10 ${
										isOpen ? 'invisible' : ''
									} `}
									src="/images/logo.jpg"
									alt=""
								/>
							</a>
						</Link>
						<button
							className="focus:outline-none md:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							<img
								className={`  ${isOpen ? 'hidden' : ''}`}
								src="/svgs/menu.svg"
								alt=""
							/>
							<img
								className={`  ${isOpen ? '' : 'hidden'}`}
								src="/svgs/close.svg"
								alt=""
							/>
						</button>
						<div className="hidden md:flex">
							<ul className="md:flex md:flex-row md:my-auto md:space-x-5">
								<li>
									<Link href="/Articulos">
										<a
											className="font-bold text-gray-800"
											href=""
										>
											Articulos
										</a>
									</Link>
								</li>
								<li>
									<Link href="/Sobre-mi">
										<a
											className="font-bold text-gray-800"
											href=""
										>
											Sobre mi
										</a>
									</Link>
								</li>
								<li>
									<Link href="/Home">
										<a
											className="font-bold text-gray-800"
											href=""
										>
											Home
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div
						className={`flex justify-center md:hidden ${
							isOpen ? '' : 'hidden'
						}`}
					>
						<ul className="space-y-2">
							<li>
								<Link href="/">
									<a
										className="font-bold text-gray-800"
										href=""
									>
										Home
									</a>
								</Link>
							</li>
							<li>
								<Link href="/Articulos">
									<a
										className="font-bold text-gray-800"
										href=""
									>
										Articulos
									</a>
								</Link>
							</li>
							<li>
								<Link href="/Sobre-mi">
									<a
										className="font-bold text-gray-800"
										href=""
									>
										Sobre mi
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}