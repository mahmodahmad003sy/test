import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
  constructor(private todoControllers: TodoService) {}
  @Get()
  findAll() {
    const result = this.todoControllers.someReturn();
    console.log({ result });

    return { ...result };
  }
}
