import { useState } from 'react';
import Link from 'next/link';

// TODO: design logo

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="max-w-screen-xl mx-auto p-2">
				<nav className=" w-full md:w-auto p-2 md:mx-2">
					<div className="flex justify-between">
						<Link href="/">
							<a href="">
								<img
									className="h-10"
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

						{/* menu desktop version */}
						<div className="hidden md:flex">
							<ul className="md:flex md:flex-row md:my-auto md:space-x-5">
								<li>
									<Link href="/Articles">
										<a
											className="font-bold text-white"
											href=""
										>
											Articles
										</a>
									</Link>
								</li>
								<li>
									<Link href="/About">
										<a
											className="font-bold text-white"
											href=""
										>
											About
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* mobile version */}
					<div
						className={` p-5 mt-2 rounded-lg shadow-lg bg-gray-100 md:hidden ${
							isOpen ? '' : 'hidden'
						}`}
					>
						<ul className="space-y-2">
							<li>
								<Link href="/Articles">
									<a
										className="font-bold text-black"
										href=""
									>
										Articles
									</a>
								</Link>
							</li>
							<li>
								<Link href="/About">
									<a
										className="font-bold text-black"
										href=""
									>
										About me
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}