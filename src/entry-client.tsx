// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { PageShell } from 'vite-plugin-ssr/client';

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <PageShell />
);
