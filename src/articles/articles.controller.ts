import { Controller, Get, Post, Query, Body } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { Article, ArticleType } from './articles.entity'

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}
  // 文章相关路由
  // 获取所有文章
  @Get('/getAllArticles')
  getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles()
  }
  // 根据文章类型获取文章
  @Get('/getArticleTypeByType')
  getArticleTypeByType(@Query() query): Promise<Article[]> {
    return this.articlesService.getArticleTypeByType(query.type)
  }
  // 根据文章id获取文章
  @Get('/getArticleTypeById')
  getArticleTypeById(@Query() query): Promise<Article> {
    const id = Number.parseInt(query.id)
    return this.articlesService.getArticleTypeById(id)
  }

  // 文章类型相关路由
  // 获取所有文章类型
  @Get('/getAllArticleType')
  getAllArticleType(): Promise<ArticleType[]> {
    return this.articlesService.getAllArticleType()
  }
  // 添加文章类型
  @Post('/addArticleType')
  addArticleType(@Body() body): Promise<ArticleType> {
    const articleType = new ArticleType()
    articleType.user_id = Number.parseInt(body.user_id)
    articleType.type = body.type
    articleType.label = body.label
    return this.articlesService.addArticleType(articleType)
  }
  // 通过ID删除文章类型
  @Post('/delArticleTypeById')
  delArticleTypeById(@Body() body): Promise<void> {
    const id = Number.parseInt(body.id)
    return this.articlesService.delArticleTypeById(id)
  }
}
