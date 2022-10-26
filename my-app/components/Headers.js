import Link from "next/link";

export default function () {
	return (
		<section className="text-xl text-white text-center space-x-2">
			<Link href="./">
				<p>Home</p>
			</Link>
			<Link href="./about">
				<p>About</p>
			</Link>
		</section>
	);
}
