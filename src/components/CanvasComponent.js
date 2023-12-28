import React, { useEffect } from 'react';

const CanvasComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById('worldwide-sales');
    
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      // Drawing operations go here
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 50, 50);
    } else {
      console.error('Canvas not supported');
    }
  }, []);

  return (
    <canvas id="worldwide-sales">
      Canvas not supported
    </canvas>
  );
};

export default CanvasComponent;
