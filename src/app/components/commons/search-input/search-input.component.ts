import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  template: `
    <form (ngSubmit)="handleSearch()">
      <div class="input-group">
        <input
          name="searchTerm"
          [(ngModel)]="searchTerm"
          type="text"
          class="form-control"
          placeholder="search sessions"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
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
    </form>
  `,
})
export class SearchInputComponent {
  searchTerm: string = '';
  @Output() onSearch = new EventEmitter();

  handleSearch(): void {
    if (this.searchTerm.trim().length) this.onSearch.emit(this.searchTerm);
  }
}
