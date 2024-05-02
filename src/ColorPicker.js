import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff'); // Kezdő szín beállítása fehérre

  return (
    <div style={{ height: '100vh', backgroundColor: color }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ marginLeft: 20, marginTop: 20 }}
      />
    </div>
  );
}

export default ColorPicker;
