import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Item } from './dto/Item';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() item: Item): string {
    return `Name: ${item.name} Description ${item.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Deleted ${id}`;
  }
}
