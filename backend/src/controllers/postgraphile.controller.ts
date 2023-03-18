import { Controller, Get, Next, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PostGraphileResponseNode } from 'postgraphile';
import { middleware } from 'src/middleware/postgraphile.middleware';

@Controller('/')
export class PostGraphileController {
  @Post(middleware.eventStreamRoute)
  eventStream(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.eventStreamRouteHandler(new PostGraphileResponseNode(request, response, next));
  }

  @Post(middleware.graphqlRoute)
  graphql(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.graphqlRouteHandler(new PostGraphileResponseNode(request, response, next));
  }

  @Get(middleware.graphiqlRoute)
  graphiql(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.graphiqlRouteHandler(new PostGraphileResponseNode(request, response, next));
  }
}
