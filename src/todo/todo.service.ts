import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class TodoService {
  constructor(private configService: ConfigService) {}

  someReturn = () => {
    console.log({ env: this.configService.get('database') });

    return { some: 'dataInService' };
  };
}
