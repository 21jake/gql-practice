import { Post } from 'src/entities/post.entity';
import { Repositories } from 'src/enums/repositories.enum';
import { DataSource } from 'typeorm';

export const postProviders = [
  {
    provide: Repositories.POST_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
    inject: [DataSource],
  },
];
