import React from 'react';
import { createRoot } from 'react-dom/client';

import AppRoot from './app';

const container = document.getElementById('app-root');
const root = createRoot(container!);
root.render(<AppRoot />);
