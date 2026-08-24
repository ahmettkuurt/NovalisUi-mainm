import { useEffect, useState } from 'react';

import {
  CursorGlow,
  CursorStar,
} from './CustomCursorStyles';

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactiveElement = target.closest(
        'a, button, input, textarea, select, [role="button"]',
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <CursorGlow
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <CursorStar
        $isHovering={isHovering}
        $isClicking={isClicking}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        ✦
      </CursorStar>
    </>
  );
}

export default CustomCursor;