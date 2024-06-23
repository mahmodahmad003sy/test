import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { ConfigModule } from '@nestjs/config';
import configurations from './config/configurations';
console.log({ configurations: configurations() });
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
    }),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
