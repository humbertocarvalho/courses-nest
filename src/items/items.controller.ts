import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Item } from './dto/Item';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `Item ${params.id}`;
  }

  @Post()
  create(@Body() item: Item): string {
    return `Name: ${item.name} Description ${item.description}`;
  }
}
