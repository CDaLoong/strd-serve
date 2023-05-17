import { IsString, IsInt } from 'class-validator'
export class GetUserByIdParames {
  @IsInt()
  readonly id: number
}
