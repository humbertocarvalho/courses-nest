import { Controller, Get, Post, Body } from '@nestjs/common';
import { Item } from './dto/Item';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  create(@Body() item: Item): string {
    return `Name: ${item.name} Description ${item.description}`;
  }
}
