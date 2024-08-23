import { CanActivate, ExecutionContext, Injectable, Request } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request;
     console.log('AuthGuard', req.headers);
    return false;
  }
}
