## draw
<img width="1440" alt="Screenshot 2024-10-27 at 15 37 05" src="https://github.com/user-attachments/assets/fc7c2ab6-9d57-48c4-98bd-ea7103aa4968">

<img width="891" alt="Untitled-3" src="https://github.com/user-attachments/assets/0bbff17f-ce0a-4a1f-875c-dea5ff15e413">
<img width="1353" alt="Untitled-4" src="https://github.com/user-attachments/assets/633c8672-e93b-481d-a2b8-fb18dc4d6a04">
Test URL: <a href="https://draw-xyz.vercel.app/manifest.json">https://draw-xyz.vercel.app/manifest.json</a><br>
<br />
PWA APK:&nbsp;<code>bubblewrap init --manifest https://draw-xyz.vercel.app/manifest.json</code><br>
<img width="969" alt="Screenshot 2024-10-27 at 21 03 33" src="https://github.com/user-attachments/assets/9294d603-7eb0-4a87-87e2-8bababbf853c">
create icns for macOS:&nbsp;<code>makeicns -in favicon.jpg -32 favicon.png -out AppleIcon.icns</code>
<br />
<br />
package.json

```
{
  "name": "draw",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  
  "dependencies": {
    "next": "15.0.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tldraw": "^3.4.0"
  },
  
  "devDependencies": {
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}
```
