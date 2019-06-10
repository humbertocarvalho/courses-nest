import { Injectable } from '@nestjs/common';
import { IItem } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: IItem[] = [
    {
      id: '123123123',
      name: 'Item Onee',
      qty: 150,
      description: 'This is item one',
    },
    {
      id: '123123123',
      name: 'Item 2',
      qty: 150,
      description: 'This is item 2',
    },
  ];
}
