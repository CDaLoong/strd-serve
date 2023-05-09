import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
// import { User } from 'src/users/users.entity'

@Entity('articles') // 通过 name 属性指定实体对应的数据库表名
export class Article {
  @PrimaryGeneratedColumn({ name: 'id' }) // 通过 name 属性指定列名
  id: number // ID

  @Column({ name: 'user_id' })
  user_id: number // 用户ID

  @Column({ name: 'type' })
  type: string // 文章类型

  @Column({ name: 'title' })
  title: string // 文章名称

  @Column({ name: 'tile_desc' })
  tile_desc: string // 文章副标题

  @Column({ name: 'content' })
  content: string // 文章内容

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间
}

@Entity('article_type') // 通过 name 属性指定实体对应的数据库表名
export class ArticleType {
  @PrimaryGeneratedColumn({ name: 'id' }) // 通过 name 属性指定列名
  id: number // ID

  @Column({ name: 'user_id' })
  user_id: number // 用户ID

  @Column({ name: 'type' })
  type: string // 文章类型key

  @Column({ name: 'label' })
  label: string // 文章类型名称

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间
}
