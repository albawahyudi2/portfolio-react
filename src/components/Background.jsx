import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
		// Cek apakah ini mobile — jika ya, skip animasi scroll (hemat CPU)
		const isMobile = window.matchMedia("(max-width: 768px)").matches
		if (isMobile) return

		let currentScroll = 0
		let ticking = false // throttle via requestAnimationFrame

		const handleScroll = () => {
			currentScroll = window.pageYOffset

			if (!ticking) {
				requestAnimationFrame(() => {
					blobRefs.current.forEach((blob, index) => {
						if (!blob) return
						const initialPos = initialPositions[index]
						const xOffset = Math.sin(currentScroll / 100 + index * 0.5) * 200
						const yOffset = Math.cos(currentScroll / 100 + index * 0.5) * 30
						const x = initialPos.x + xOffset
						const y = initialPos.y + yOffset
						blob.style.transform = `translate3d(${x}px, ${y}px, 0)`
					})
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className="fixed inset-0 pointer-events-none">
			<div className="absolute inset-0">
				{/* Blob 1 - selalu tampil tapi lebih kecil di mobile */}
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 w-56 h-56 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[128px] opacity-30 md:opacity-20"
					style={{ willChange: "transform" }}
				/>
				{/* Blob 2 - sembunyikan di mobile untuk hemat GPU */}
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 hidden md:block"
					style={{ willChange: "transform" }}
				/>
				{/* Blob 3 */}
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-40%] md:left-20 w-56 h-56 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[128px] opacity-30 md:opacity-20"
					style={{ willChange: "transform" }}
				/>
				{/* Blob 4 - sembunyikan di mobile */}
				<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 hidden md:block"
					style={{ willChange: "transform" }}
				/>
			</div>
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]" />
		</div>
	)
}

export default AnimatedBackground
