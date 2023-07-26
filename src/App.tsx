import * as React from 'react';
import { createPortal } from 'react-dom';

import './style.css';

export default function App() {
  return (
    <div>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
      {'Text after the portal'}
    </div>
  );
}
