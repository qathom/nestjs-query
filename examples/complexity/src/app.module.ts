import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplexityPlugin } from './complexity.plugin';
import { TagModule } from './tag/tag.module';
import { TodoItemModule } from './todo-item/todo-item.module';
import { SubTaskModule } from './sub-task/sub-task.module';
import { formatGraphqlError, typeormOrmConfig } from '../../helpers';

@Module({
  providers: [ComplexityPlugin],
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('complexity')),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      formatError: formatGraphqlError
    }),
    SubTaskModule,
    TodoItemModule,
    TagModule
  ]
})
export class AppModule {}
