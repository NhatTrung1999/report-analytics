import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SqlService } from './sql.service';

@Controller('sql')
export class SqlController {
  constructor(private readonly sqlService: SqlService) {}

  @Post()
  async executeQuery(@Body('query') query: string): Promise<unknown> {
    // console.log(query);
    if (!query) {
      throw new HttpException(
        'Please enter your query sql!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.sqlService.executeQuery(query);
  }
}
