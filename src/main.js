import { Application } from "@splinetool/runtime";
// import Spline from "@splinetool/react-spline";
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/0ckXkMz0kS9GGWy3/scene.splinecode");

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/0ckXkMz0kS9GGWy3/scene.splinecode" />
//   );
// }
