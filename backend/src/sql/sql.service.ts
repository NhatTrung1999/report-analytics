import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class SqlService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async executeQuery(query: string) {
    try {
      if (!query.trim().toLowerCase().startsWith('select')) {
        throw new BadRequestException('Only SELECT queries are allowed');
      }
      const result = await this.dataSource.query<unknown>(query);
      // console.log(result);
      return result;
    } catch (error) {
      throw new BadRequestException(
        `Query execution failed: ${error.message ?? 'Unknown error'}`,
      );
    }
  }
}
