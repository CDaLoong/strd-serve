import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'

// PipeTransform<T, R> 是每个管道必须要实现的泛型接口。泛型 T 表明输入的 value 的类型，R 表明 transfrom() 方法的返回类型
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  // 为实现 PipeTransfrom，每个管道必须声明 transfrom() 方法
  // value 参数是当前处理的方法参数(在被路由处理程序方法接收之前)，metadata 是当前处理的方法参数的元数据
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(12344, value, metatype)
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }
    const object = plainToInstance(metatype, value)
    const errors = await validate(object)
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed')
    }
    return value
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}
