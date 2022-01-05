import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/services';
import { ISession } from '../../..';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.scss'],
})
export class CreateSessionComponent implements OnInit {
  @Output() onSaveSession = new EventEmitter();
  @Output() onCancelSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(public formValidation: FormValidationService) {}

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  onSave(formValues: any) {
    const session: ISession = {
      id: Math.round(Math.random() * 100) + 1,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };

    this.onSaveSession.emit(session);
  }

  onCancel() {
    this.onCancelSession.emit();
  }
}
