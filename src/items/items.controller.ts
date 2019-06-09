import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  create(): string {
    return 'Create item';
  }
}
