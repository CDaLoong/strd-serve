// 公开路由装饰器
import { SetMetadata } from '@nestjs/common'

export const IS_PUBLIC_KEY = 'isPublic'
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true)
