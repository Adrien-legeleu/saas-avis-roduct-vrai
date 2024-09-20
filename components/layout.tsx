import { twc } from "react-twc";

export const Layout = twc.div((props) => [
  `max-w-5xl w-full flex gap-4 flex-col mx-auto px-4`,
]);

export const LayoutTitle = twc.h1((props) => [`text-4xl font-bold`]);
