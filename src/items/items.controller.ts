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
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): IItem[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): IItem {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): string {
    return `Name: ${item.name} Description ${item.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Deleted ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: Item): string {
    return `Updated item ${id}`;
  }
}
