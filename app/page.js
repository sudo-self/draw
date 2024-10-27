
"use client";

import Head from 'next/head';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

export default function TldrawApp() {
    return (
        <>
            <Head>
                <title>Draw</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div style={{ position: 'fixed', inset: 0, backgroundColor: 'white' }}>
                <Tldraw />
            </div>
        </>
    );
}


