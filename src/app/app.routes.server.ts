import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams() {
      return Promise.resolve([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ]);
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
