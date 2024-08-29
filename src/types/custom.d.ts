declare module 'recma-import-images';
declare module 'remark-rehype-wrap';
declare module 'unified-conditional';

declare module '*.svg' {
  import type React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
