import {
  Component,
  Output,
  EventEmitter,
  Input,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ISession } from 'src/app/pages/events';

@Component({
  selector: 'search-input',
  template: `
    <form (ngSubmit)="handleSearch()" class="position-relative w-100">
      <div class="input-group">
        <input
          name="searchTerm"
          [(ngModel)]="searchTerm"
          type="text"
          class="form-control"
          placeholder="search sessions"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          autocomplete="off"
        />
        <button
          (click)="handleSearch()"
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          [disabled]="!searchTerm.trim().length"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div
        class="card position-absolute w-100 text-dark mt-1"
        style="z-index: 9999"
        *ngIf="results.length"
      >
        <div class="card-body p-0">
          <ul class="list-group">
            <li
              (click)="handleClickItem(item)"
              class="list-group-item cursor-pointer"
              *ngFor="let item of results"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      .cursor-pointer {
        cursor: pointer;
      }

      .list-group-item:hover {
        background-color: #f0f0f0;
      }
    `,
  ],
})
export class SearchInputComponent {
  searchTerm: string = '';
  @Input() results: ISession[] = [];
  @Output() onSearch = new EventEmitter();
  @Output() onClickItem = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  handleSearch(): void {
    if (this.searchTerm.trim().length) this.onSearch.emit(this.searchTerm);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.results = [];
    }
  }

  handleClickItem(item: any) {
    this.onClickItem.emit(item);
  }
}
