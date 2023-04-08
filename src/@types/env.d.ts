/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  readonly VITE_CLIENT_SECRET: string;
  readonly VITE_USERNAME: string;
  readonly VITE_PASSWORD: string;
  readonly VITE_USER_ID: string;
  readonly VITE_ENV: string;
  readonly VITE_GA_ID: string;
  readonly VITE_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
