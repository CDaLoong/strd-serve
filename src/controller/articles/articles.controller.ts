import { Controller, Get, Post, Query, Body } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { Article, ArticleType } from 'src/entity/articles.entity'

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}
  // 文章相关路由
  // 获取所有文章
  @Get('/getAllArticle')
  async getAllArticle(): Promise<Article[]> {
    const articles = await this.articlesService.getAllArticle()
    articles.forEach((article) => {
      article.content = ''
    })
    return articles
  }
  // 根据文章类型获取文章
  @Get('/getArticleTypeByType')
  async getArticleTypeByType(@Query() query: any): Promise<Article[]> {
    const articles = await this.articlesService.getArticleTypeByType(query.type)
    articles.forEach((article) => {
      article.content = ''
    })
    return articles
  }
  // 根据文章id获取文章
  @Get('/getArticleTypeById')
  async getArticleTypeById(@Query() query: any): Promise<Article> {
    const id = Number.parseInt(query.id)
    const article = await this.articlesService.getArticleTypeById(id)
    if (article !== null) {
      article.content = JSON.parse(article.content)
    }
    return article
  }
  // 添加文章
  @Post('/addArticle')
  addArticle(@Body() body: any): Promise<Article> {
    const article = new Article()
    article.user_id = Number.parseInt(body.user_id)
    article.type = body.type
    article.title = body.title
    article.description = body.description
    article.content = JSON.stringify(body.content)
    return this.articlesService.addArticle(article)
  }
  // 通过ID删除文章
  @Post('/delArticleById')
  delArticleById(@Body() body: any): Promise<void> {
    const id = Number.parseInt(body.id)
    return this.articlesService.delArticleById(id)
  }

  // 文章类型相关路由
  // 获取所有文章类型
  @Get('/getAllArticleType')
  getAllArticleType(): Promise<ArticleType[]> {
    return this.articlesService.getAllArticleType()
  }
  // 添加文章类型
  @Post('/addArticleType')
  addArticleType(@Body() body: any): Promise<ArticleType> {
    const articleType = new ArticleType()
    articleType.user_id = Number.parseInt(body.user_id)
    articleType.type = body.type
    articleType.label = body.label
    return this.articlesService.addArticleType(articleType)
  }
  // 通过ID删除文章类型
  @Post('/delArticleTypeById')
  delArticleTypeById(@Body() body: any): Promise<void> {
    const id = Number.parseInt(body.id)
    return this.articlesService.delArticleTypeById(id)
  }
}
