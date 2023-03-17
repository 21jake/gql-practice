
import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commentProviders } from 'src/providers/comment.providers';
import { postProviders } from 'src/providers/post.providers';
import { userProviders } from 'src/providers/user.providers';
import { UserService } from 'src/services/user.service';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    ...postProviders,
    ...commentProviders,
    UserService,
  ],
})
export class UserModule {}
