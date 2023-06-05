import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common'
import { Observable, of } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...')
    const now = Date.now()
    const isCached = false
    // 走缓存
    if (isCached) {
      console.log(`After... ${Date.now() - now}ms`)
      return of([])
    }
    return next.handle().pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
      map((value) => (value === null ? '' : { data: value })),
    )
  }
}
