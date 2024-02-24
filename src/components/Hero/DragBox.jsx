import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
// import router from "next/router";
import capsules from "./images";

const { Bodies, Engine, Mouse, MouseConstraint, Render, Runner, World } =
  Matter;

const randRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DragBox({ canvasWidth, canvasHeight, elements }) {
  const canvas = useRef(null);
  const world = useRef();
  const engineRef = useRef();
  const runnerRef = useRef();

  const WIDTH = canvasWidth || 800;
  const HEIGHT = canvasHeight || 300;

  useEffect(() => {
    if (runnerRef.current) {
      Runner.stop(runnerRef.current);
      Engine.clear(engineRef.current);
    }

    createWorld();

    return () => {
      console.log("clear");
      Runner.stop(runnerRef.current);
      Engine.clear(engineRef.current);
      // router.reload();
    };
  }, [canvas, world]);

  function createWorld() {
    const engine = Engine.create();
    engineRef.current = engine;
    world.current = engine.world;

    console.log("createWorld");

    // create a renderer
    const render = Render.create({
      canvas: canvas.current || undefined,
      engine,
      options: {
        width: WIDTH,
        height: HEIGHT,
        background: "#fff",
        showCollisions: false,
        showVelocity: false,
        showAxes: false,
        wireframes: false,
      },
    });

    // add walls
    World.add(engine.world, [
      Bodies.rectangle(WIDTH / 2, -10, WIDTH, 20, { isStatic: true }),
      Bodies.rectangle(-10, HEIGHT / 2, 20, HEIGHT, { isStatic: true }),
      Bodies.rectangle(WIDTH / 2, HEIGHT + 10, WIDTH, 20, { isStatic: true }),
      Bodies.rectangle(WIDTH + 10, HEIGHT / 2, 20, HEIGHT, { isStatic: true }),
    ]);

    // add rects
    // Hotfix for text inside shape for Matter.js
    const rect = Bodies.rectangle(WIDTH / 2, HEIGHT / 2, 100, 50, {
      render: {
        sprite: {
          texture: capsules.cap1.src,
        },
      },
    });

    const allCapsules = Object.values(capsules).map((cap) => {
      return Bodies.rectangle(
        WIDTH / 2 + randRange(-300, 300),
        HEIGHT / 2,
        cap.width,
        cap.height,
        {
          render: {
            sprite: {
              texture: cap.src,
            },
          },
          angle: randRange(0, 360),
        }
      );
    });

    World.add(engine.world, allCapsules);

    // MOUSE
    const mouse = Mouse.create(render.canvas);
    render.mouse = mouse;
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.5,
        render: {
          visible: true,
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
    <div className="flex flex-col items-center justify-center">
      <canvas className="" ref={canvas} />
    </div>
  );
}
