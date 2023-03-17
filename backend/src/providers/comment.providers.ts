import { Comment } from 'src/entities/comment.entity';
import { Repositories } from 'src/enums/repositories.enum';
import { DataSource } from 'typeorm';

export const commentProviders = [
  {
    provide: Repositories.COMMENT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comment),
    inject: [DataSource],
  },
];
