
declare module '*.svg?component' {
  const Component: any;
  export default Component;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.svg?raw' {
  const svg: string;
  export default svg;
}