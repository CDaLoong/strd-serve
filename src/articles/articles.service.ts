import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Article, ArticleType } from './articles.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article, 'DATA_MYSQL')
    private articlesRepository: Repository<Article>,
    @InjectRepository(ArticleType, 'DATA_MYSQL')
    private articleTypeRepository: Repository<ArticleType>,
  ) {}
  // 文章相关方法
  // 获取所有文章
  async getAllArticles(): Promise<Article[]> {
    return await this.articlesRepository.find()
  }
  // 根据文章类型获取文章
  async getArticleTypeByType(type: string): Promise<Article[]> {
    return await this.articlesRepository
      .createQueryBuilder('articleType')
      .where('articleType.type = :type', { type: type })
      .getMany()
  }
  // 根据文章id获取文章
  async getArticleTypeById(id: number): Promise<Article> {
    return await this.articlesRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id: id })
      .getOne()
  }

  // 文章类型相关方法
  // 获取所有文章类型
  async getAllArticleType(): Promise<ArticleType[]> {
    return await this.articleTypeRepository.find()
  }
  // 添加文章类型
  async addArticleType(articleType: ArticleType): Promise<ArticleType> {
    return await this.articleTypeRepository.save(articleType)
  }
  // 通过ID删除文章类型
  async delArticleTypeById(id: number): Promise<void> {
    await this.articleTypeRepository.delete(id)
  }
}
