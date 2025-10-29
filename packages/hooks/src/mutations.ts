import { googleLogin } from '@ngagio/data-fetchers/auth';
import { useMutation } from '@tanstack/react-query';

export function useGoogleLoginMutation() {
  return useMutation({ mutationFn: googleLogin });
}
