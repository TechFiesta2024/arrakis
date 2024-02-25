import Matter from "matter-js";
import { document } from "postcss";
import { useEffect, useRef } from "react";

const {
  Body,
  Engine,
  Events,
  World,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
} = Matter;

export default function DragBox() {
  const engine = useRef(Engine.create());
  const scene = useRef();

  useEffect(() => {
    const cw = 700;
    const ch = 500;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // Rectangles
    const rect = Bodies.rectangle(cw / 2, ch / 2, 100, 50);

    World.add(engine.current.world, rect);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.current.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Engine.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    console.log(e.clientX, e.clientY);
    const ball = Bodies.rectangle(e.clientX, e.clientY, 150, 50, {
      chamfer: {
        radius: 10,
      },
    });
    World.add(engine.current.world, [ball]);
  };

  return (
    <div
    //onMouseDown={handleDown}
    //onMouseUp={handleUp}
    //onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
