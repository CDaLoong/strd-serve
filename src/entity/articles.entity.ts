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

  @Column({ name: 'title', length: 20 })
  title: string // 文章名称

  @Column({ name: 'description', length: 50 })
  description: string // 文章描述

  @Column({ name: 'type', length: 10 })
  type: string // 文章类型

  @Column({ name: 'content', length: 16000 })
  content: string // 文章内容

  @Column({ name: 'glance_num' })
  glance_num: number // 浏览数量

  @Column({ name: 'like_num' })
  like_num: number // 点赞数量

  @Column({ name: 'comment_num' })
  comment_num: number // 评论数量

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间

  constructor() {
    this.glance_num = 0
    this.comment_num = 0
    this.like_num = 0
  }
}

@Entity('article_type') // 通过 name 属性指定实体对应的数据库表名
export class ArticleType {
  @PrimaryGeneratedColumn({ name: 'id' }) // 通过 name 属性指定列名
  id: number // ID

  @Column({ name: 'user_id' })
  user_id: number // 用户ID

  @Column({ name: 'type', length: 10 })
  type: string // 文章类型key

  @Column({ name: 'label', length: 10 })
  label: string // 文章类型名称

  @Column({ name: 'amount' })
  amount: number // 文章数量

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间
}
