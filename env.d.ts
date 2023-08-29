/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPEN_WEATHER_API_KEY: string
  readonly VITE_OPEN_WEATHER_API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
