/// <reference types="vite/client" />

// Image formats
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.gif' {
  const src: string
  export default src
}
declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.avif' {
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
declare module '*.bmp' {
  const src: string
  export default src
}

// Font formats
declare module '*.woff' {
  const src: string
  export default src
}
declare module '*.woff2' {
  const src: string
  export default src
}
declare module '*.ttf' {
  const src: string
  export default src
}
declare module '*.eot' {
  const src: string
  export default src
}
declare module '*.otf' {
  const src: string
  export default src
}

// Media formats
declare module '*.mp4' {
  const src: string
  export default src
}
declare module '*.webm' {
  const src: string
  export default src
}
declare module '*.ogg' {
  const src: string
  export default src
}
declare module '*.mp3' {
  const src: string
  export default src
}
declare module '*.wav' {
  const src: string
  export default src
}
declare module '*.flac' {
  const src: string
  export default src
}
declare module '*.aac' {
  const src: string
  export default src
}

// Document formats
declare module '*.pdf' {
  const src: string
  export default src
}

// Style formats
declare module '*.css' {
  const styles: Record<string, string>
  export default styles
}
declare module '*.module.css' {
  const styles: Record<string, string>
  export default styles
}
declare module '*.scss' {
  const styles: Record<string, string>
  export default styles
}
declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}

// Data formats
declare module '*.json' {
  const value: unknown
  export default value
}
declare module '*.txt' {
  const src: string
  export default src
}
declare module '*.md' {
  const src: string
  export default src
}
