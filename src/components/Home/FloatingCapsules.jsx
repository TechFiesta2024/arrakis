"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const {
	Bodies,
	Engine,
	Mouse,
	MouseConstraint,
	Render,
	Runner,
	World,
} = Matter;

const randRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const menu = [
	"Swags",
	"Events",
	"Activity",
	"Workshop",
	"Prizepool",
	"Peer Networking",
];

export default function FloatingCapsules({ canvasWidth, canvasHeight }) {
	const canvas = useRef(null);
	const world = useRef();
	const engineRef = useRef();
	const runnerRef = useRef();

	const WIDTH = canvasWidth || 426;
	const HEIGHT = canvasHeight || 244;

	useEffect(() => {
		if (runnerRef.current) {
			Runner.stop(runnerRef.current);
			Engine.clear(engineRef.current);
		}

		createWorld();

		return () => {
			Runner.stop(runnerRef.current);
			Engine.clear(engineRef.current);
		};
	}, [canvas, world]);

	function createWorld() {
		const engine = Engine.create();
		engineRef.current = engine;
		world.current = engine.world;

		const render = Render.create({
			canvas: canvas.current || undefined,
			engine,
			options: {
				width: WIDTH,
				height: HEIGHT,
				background: "#010100",
				wireframes: false,
			},
		});

		// Add walls
		World.add(engine.world, [
			Wall(WIDTH / 2, 0, WIDTH, 5), // Top
			Wall(0, HEIGHT / 2, 5, HEIGHT), // Right
			Wall(WIDTH / 2, HEIGHT, WIDTH, 5), // Bottom
			Wall(WIDTH, HEIGHT / 2, 5, HEIGHT), // Left
		]);

		// App capsules
		const capsules = menu.map((item) => Capsule(item));
		World.add(engine.world, capsules);

		capsules.map((capsule, idx) => { });

		// MOUSE
		const mouse = Mouse.create(render.canvas);
		render.mouse = mouse;
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.5,
				render: {
					visible: false,
				},
			},
		});

		World.add(engine.world, mouseConstraint);

		Render.run(render);

		// create runner
		const runner = Runner.create({
			options: {
				wireframes: false,
			},
		});
		runnerRef.current = runner;
		// run the engine
		Runner.run(runner, engine);

		// add To Global
		window.Matter = Matter;
		window.engine = engine;
		window.runner = runner;

	}

	return (
		<>
			<div className="floating-capsules_container flex flex-col items-center justify-center w-[100%]">
				<canvas
					className="capsules_div w-[100%] md:w-[99%] h-[100%] border md:border-none overflow-hidden"
					ref={canvas}
				/>
			</div>
		</>
	);
};

const Capsule = (text, width = 140, height = 33) => {
	const body = Bodies.rectangle(
		width / 2 + randRange(30, 80),
		height / 2,
		width,
		height,
		{
			render: {
				fillStyle: "red",
				strokeStyle: "#010100",
				lineWidth: 2,
			},
			angle: randRange(0, 180),
			chamfer: {
				radius: [15, 15, 15, 15],
			},
		},
	);
	body.name = text;
	return body;
};

const Wall = (x, y, width, height) => {
	return Bodies.rectangle(x, y, width, height, {
		isStatic: true,
		render: {
			fillStyle: "#010100",
		},
	});
};
