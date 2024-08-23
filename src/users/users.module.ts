import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExpamleMiddleware } from './middlewares/expamle/expamle.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
}) // decorator
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExpamleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    }, {
      path: 'users',
      method: RequestMethod.POST,
    }).apply(AnotherMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    }, {
      path: 'users/adduser',
      method: RequestMethod.POST,
    });
} 
}
