import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
// import { ormConfig } from './configs/typeorm.config';
import { DatabaseModule } from './database/database.module';
import { PostGraphileModule } from './modules/postgraphile.module';
// import { PostGraphileMiddleware } from './middleware/postgraphile.middleware';
// import { PostGraphileMiddleware } from './middleware/postgraphile.middleware';
import { UserModule } from './modules/user.module';
// import dataSource from 'src/configs/typeorm.config';

@Module({
  imports: [
    // TypeOrmModule.forRoot(ormConfig),
    DatabaseModule,
    UserModule,
    PostGraphileModule
    // PostGraphileMiddleware,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}