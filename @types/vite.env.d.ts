/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
