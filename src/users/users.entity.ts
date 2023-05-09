import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users') // 通过 name 属性指定实体对应的数据库表名
export class User {
  @PrimaryGeneratedColumn({ name: 'id' }) // 通过 name 属性指定列名
  id: number // ID

  @Column({ name: 'name' })
  name: string // 昵称

  @Column({ name: 'password' })
  password: string // 密码

  @Column({ name: 'gender' })
  gender: string // 性别

  @Column({ name: 'age' })
  age: number // 年龄

  @Column({ name: 'birthday' })
  birthday: string // 生日

  @Column({ name: 'mobile' })
  mobile: string // 手机号

  @Column({ name: 'email' })
  email: string // 邮箱

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间
}
