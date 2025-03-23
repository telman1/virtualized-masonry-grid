# Virtualized Masonry Grid  

## 📌 Overview  
A **high-performance virtualized masonry grid** built with **React, TypeScript, and Vite**. This app efficiently loads and displays images with **smooth scrolling and real-time filtering**, ensuring an optimized user experience.

---

## 🚀 Features  
✅ **Virtualized Rendering** – Renders only visible images for performance  
✅ **Lazy Loading** – Defers loading images to reduce initial load time  
✅ **Dynamic Search Filtering** – Instant filtering
✅ **Code Splitting & Tree Shaking** – Reduces JavaScript execution time  
✅ **Optimized Performance** – Uses memoization, caching, and best practices  
✅ **Mobile-Friendly & Responsive** – Works across all screen sizes  

---

## 🛠️ Installation & Setup  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/telman1/virtualized-masonry-grid.git
cd virtualized-masonry-grid
```

### **2️⃣ Install Dependencies**
```bash
yarn install
```

### **3️⃣ Set Up Environment Variables**
Create a **`.env`** file in the root directory and add:
```env
VITE_PEXELS_ACCESS_KEY=your_pexels_api_key
```

### **4️⃣ Run the Development Server**
```bash
yarn dev
```
The app will be available at **http://localhost:5173/**.

### **5️⃣ Build for Production**
```bash
yarn build
yarn preview
```
This generates an optimized production build and serves it locally.

---

## 🎨 **Design Decisions**
### **Virtualized Grid for Efficiency**
The grid uses **virtualization** to render only the visible images, reducing **DOM size** and **improving performance**.

### **Lazy Loading for Images**
```tsx
<img src={image.src.large} alt={image.alt} loading="lazy" />
```
✅ **Reduces initial load time**  
✅ **Improves perceived performance**

### **Code Splitting & Optimization**
```tsx
const DetailedView = React.lazy(() => import("./pages/detailedView/DetailedView"));
```
✅ **Reduces JavaScript execution time**  
✅ **Only loads components when needed**

---

## 📊 **Performance Optimization Techniques**
### **Image Optimization**
```tsx
<picture>
    <img
      className="grid-image"
      src={image.src.large}
      alt={image.alt || "Image"}
      loading="lazy"
    />
  </picture>
```
### **Virtualized Rendering**
- **Only visible images are rendered dynamically using `useMemo()`**.

### **Bundle Analysis with Vite Visualizer**
Vite Visualizer helps analyze and optimize **bundle size**. Install it:

```
```
Modify `vite.config.ts`:
```
mode === "development"  to  mode !== "development"

plugins: [
  react(),
  ...(mode !== "development"
    ? [
      visualizer({
        filename: "bundle-report.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
        sourcemap: true,
      }),
    ]
    : []),
  commonjs(),
],
```
Run:
```bash
yarn build
```
It will generate `bundle-report.html` to analyze bundle size.

### **Component Rendering Analysis with React Scan**
```
To track unnecessary re-renders, you can either:
```
Option 1: Add React Scan Script to index.html
```
Inside the <head> tag:

<script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>
```
Option 2: Enable React Scan in main.tsx
```
Uncomment the following lines:

// import { scan } from "react-scan";
// scan({
//   enabled: true,
// });

```
Run:
```bash
yarn scan
```
✅ Identifies redundant renders✅ Helps optimize performance
```
✅ **Identifies redundant renders**
✅ **Helps optimize performance**

---

## 🛠️ **Technologies Used**
- ⚡ **Vite** – Lightning-fast build tool
- 🏡 **React + TypeScript** – Scalable frontend framework
- 🎨 **SCSS** – Modular styles with variables
- 📸 **Pexels API** – Fetching high-quality images
- 🗃️ **Virtualized Grid Layout** – Optimized for large image lists
- 📊 **Lighthouse Audits** – Ensuring high performance

---

