import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: string[] = [];

  createItem() {
    const newItem = prompt('Enter item name:');
    if (newItem) {
      this.items.push(newItem);
    }
  }

  deleteItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
