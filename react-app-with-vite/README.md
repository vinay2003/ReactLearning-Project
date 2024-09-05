### **Vite:**

1. **Installation:**
   - Vite requires a different setup for React:
     ```bash
     npm create vite@latest my-app -- --template react
     ```
   - This sets up a React project using Vite as the build tool.

2. **Performance and Flexibility:**
   - Vite is much faster than CRA during development because it uses **esbuild**, which compiles JavaScript extremely quickly. Instead of bundling the entire project upfront like CRA, Vite only processes the files you are currently working on, making it faster and more efficient for larger projects.

3. **Customization:**
   - Unlike CRA, Vite offers more flexibility for customization. It uses **Rollup** under the hood for production builds and has a modular configuration that you can easily tweak to suit your needs without the need to "eject."