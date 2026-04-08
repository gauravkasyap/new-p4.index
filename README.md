# Dodge Challenger – Landing Page

A visually immersive landing page for the **Dodge Challenger SRT Hellcat**, featuring smooth scroll animations, an interactive navigation bar, a full-screen video background, and dynamic GSAP-powered effects.

## 🚗 Overview

This project is a single-page website showcasing the Dodge Challenger SRT Hellcat and other Dodge SRT vehicles. It is built with pure **HTML**, **CSS**, and **JavaScript**, and uses the **GSAP** animation library with **ScrollTrigger** for polished scroll-based animations.

## 📁 Project Structure

```
├── index.html          # Main HTML file — page structure and layout
├── new p4.css          # Stylesheet — all visual styling and animations
├── new p4.js           # Main JS file — GSAP scroll animations and cursor effects
├── newFile.js          # Additional GSAP animation (About Us section)
├── logo.jpg.jpg        # Dodge logo used in the navbar
├── iris.jpg.jpg        # Durango vehicle thumbnail
├── iris1.jpg.jpg       # Hornet vehicle thumbnail
├── iris2.jpg.jpg       # Charger vehicle thumbnail
├── iris3.jpg.jpg       # Challenger vehicle thumbnail
├── Dodge SRT.jpg.jpg   # Dodge SRT image used in nav dropdown
├── dodgeeeeee.jpg.jpg  # Dodge car image used in About Us section
├── transparent.jpg.png # Dodge logo (transparent) used in About Us section
└── VID_20240507104116.mp4  # Background video playing on the hero section
```

## ✨ Features

- **Full-screen video background** — A looping, muted video plays behind the hero section.
- **Custom animated cursor** — A glowing aqua cursor with a blur halo follows the mouse; it scales up when hovering over nav items.
- **Sticky navigation bar** — Becomes semi-transparent with a scroll-triggered background color change using GSAP.
- **Hover-reveal nav dropdowns** — Each nav category (Vehicles, Shopping Tool, Dodge Muscle, Owner) reveals a styled dropdown on hover.
- **Auto-scrolling ticker** — A marquee-style infinite scroll ticker displaying SRT model names.
- **About Us section** — Fade-in animation triggered on scroll using GSAP ScrollTrigger.
- **3D hover cards** — Vehicle showcase cards that rotate in 3D and reveal details on hover.
- **Page 4 gallery** — Four image panels with hover transitions revealing car names.
- **Animated detail section** — A text quote section that scales in and fades in on scroll.
- **Footer** — Includes the Stellantis logo, social media icons (Facebook, Twitter, Instagram), and link columns.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, transitions, hover effects, keyframe animations |
| JavaScript (ES6) | Cursor tracking, event listeners |
| [GSAP 3](https://greensock.com/gsap/) | Scroll-triggered animations |
| [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) | Scroll-based animation triggers |

## 🚀 Getting Started

No build tools or installation required. Just open the project in a browser:

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

> **Note:** The background video (`VID_20240507104116.mp4`) and local images must be present in the same directory as `index.html` for full functionality. Some card and gallery images are loaded from the Dodge website CDN and require an internet connection.

## 📄 Pages / Sections

| Section | Description |
|---|---|
| **Page 1 (Hero)** | Full-screen hero with the Challenger Hellcat tagline and starting price |
| **Page 2 (About)** | Scrolling ticker, About Us text, 3D vehicle cards, and a full-bleed Hellcat image banner |
| **Page 3 (Detail)** | Centered quote about the Hellcat key fob with animated directional arrows |
| **Page 4 (Gallery)** | Four hover-reveal panels showcasing different Challenger variants |
| **Footer** | Brand logo, social links, and navigation columns |
