import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

export const authGuard: CanActivateFn = () => {
  const storageService = inject(TokenStorageService)
  const router = inject(Router)
  const user = storageService.getUser()
  if (!user || user.role != "admin") {
    router.navigateByUrl('/login')
    return false
  }
  return true;
};
