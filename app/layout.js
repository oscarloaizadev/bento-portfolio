import { Manrope } from "next/font/google";
import Favicon from "/public/images/favicon.ico";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const font = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Oscar Loaiza | Desarrollador Web",
  description:
    "Explora el portafolio y la carrera de Oscar Loaiza, un hábil Desarrollador Web e Ingeniero Multimedia. Sumérgete en su experiencia con tecnologías como Bootstrap, React, PHP y MySQL, junto con su dominio de herramientas de diseño como Photoshop, Illustrator y Blender. Descubre sus proyectos innovadores, experiencias profesionales y su trayectoria personal en la industria tecnológica.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html
      className="scrollbar-w-8 scrollbar-track-rounded-full scrollbar scrollbar-thumb-new-950 scrollbar-track-new-500 h-32 overflow-y-scroll"
      lang="es"
    >
      <body
        className={`${font.className} transition-all animate-[appear_1500ms_cubic-bezier(0.4,_0,_0.2,_1)_100ms_backwards]`}
      >
        {children}
      </body>
    </html>
  );
}
