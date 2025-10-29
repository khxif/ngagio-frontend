import { useBaseLayoutStore } from '@ngagio/stores/base-layout-store';
import { useQuery } from '@tanstack/react-query';

export function useInitApp() {
  const initApp = useBaseLayoutStore(state => state.initApp);

  useQuery({
    queryKey: ['initApp'],
    queryFn: initApp,
  });
}
