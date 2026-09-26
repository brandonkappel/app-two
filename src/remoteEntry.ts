import { createApp, type App as VueApp } from 'vue';
import AppRoot from './App.vue';
import { createAppRouter } from './router';

export interface MountOptions {
  element: HTMLElement;
  basePath: string;
  getAccessToken?: () => Promise<string>;
  signOut?: () => Promise<void>;
}

export type UnmountFn = () => void;

export async function mount(options: MountOptions): Promise<UnmountFn> {
  const { element, basePath } = options;

  if (options.getAccessToken) {
    const token = await options.getAccessToken();
    // eslint-disable-next-line no-console
    console.log('App Two received access token from shell:', token);
  }

  const app: VueApp = createApp(AppRoot);
  const router = createAppRouter(basePath);
  app.use(router);

  await router.isReady();
  app.mount(element);

  return () => {
    app.unmount();
  };
}
