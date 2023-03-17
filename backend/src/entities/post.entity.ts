import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Comment as CommentEntity } from './comment.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @Column({ type: 'int', default: 0 })
  viewCount: number;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE', nullable: false })
  uploader: User;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
 comments: CommentEntity[];


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
