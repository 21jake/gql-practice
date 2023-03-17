import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repositories } from 'src/enums/repositories.enum';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Post } from 'src/entities/post.entity';
import { Comment as CommentEntity } from 'src/entities/comment.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(Repositories.USER_REPOSITORY)
    private userRepository: Repository<User>,

    @Inject(Repositories.POST_REPOSITORY)
    private postRepository: Repository<Post>,

    @Inject(Repositories.COMMENT_REPOSITORY)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // Seed users, posts, and comments
  async seed() {
    const seedCount = {
      users: 10,
      posts: 20,
      comments: 30,
    };

    for (let index = 0; index < seedCount.users; index++) {
      const user = new User();
      user.name = faker.name.firstName();
      user.address = faker.address.streetAddress();
      user.isActive = Boolean(Number(faker.random.numeric()) % 2 === 0);
      const createdUser = await this.userRepository.save(user);

      for (let index = 0; index < seedCount.posts; index++) {
        const post = new Post();
        post.title = faker.hacker.phrase();
        post.content = faker.lorem.paragraphs();
        post.viewCount = Number(faker.random.numeric(3));
        post.uploader = createdUser;
        const createdPost = await this.postRepository.save(post);

        for (let index = 0; index < seedCount.comments; index++) {
          const comment = new CommentEntity();
          comment.content = faker.lorem.sentence();
          comment.likeCount = Number(faker.random.numeric(2));
          comment.post = createdPost;

          await this.commentRepository.save(comment);
        }
      }
    }
  }
}
