import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// `npm run dev` ignores the lib config below and just serves index.html
// (src/main.ts) for standalone local testing.
//
// `npm run build` produces a library build of remoteEntry.ts with a
// FIXED, unhashed output filename - the shell references this exact
// path, so it can't change between deploys. This is what gets deployed
// to s3://<app-one-bucket>/assets/app-one/ (see README.md).
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/remoteEntry.ts',
      formats: ['es'],
      fileName: () => 'remoteEntry.js',
    },
    rollupOptions: {
      output: {
        // Keep CSS/asset filenames stable too, for the same reason.
        assetFileNames: 'assets/[name][extname]',
      },
    },
    // Vue is bundled INTO remoteEntry.js for POC simplicity, so each
    // remote app is fully self-contained and independently deployable
    // with zero shared-runtime coordination with the shell. This costs
    // some duplicate bytes per app - fine for a POC; a later optimization
    // could share a single Vue runtime via import maps if bundle size
    // becomes a real concern.
    cssCodeSplit: false,
  },
});
