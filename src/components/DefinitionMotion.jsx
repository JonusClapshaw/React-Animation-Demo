export default function DefinitionMotion() {
	return (
		<section className="definition-motion" aria-labelledby="motion-div-title">
			<h2 id="motion-div-title">What motion.div does</h2>
			<p>
				motion.div is a drop-in replacement for a normal div from Motion.
				It lets you animate style and layout values with props like animate,
				initial, whileHover, and transition.
			</p>
			<ul>
				<li>Use initial and animate for enter/state animations.</li>
				<li>Use whileHover or whileTap for interaction feedback.</li>
				<li>Use transition to control speed, easing, and timing.</li>
			</ul>
		</section>
	);
}
