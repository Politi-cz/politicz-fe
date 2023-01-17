import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;
  public readonly config = {
    editable: true,
    height: 'auto',
    minHeight: '25rem',
    maxHeight: 'auto',
    enableToolbar: false,
    showToolbar: true,
  } as AngularEditorConfig;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.newsForm = this._fb.group({
      heading: ['', Validators.required],
      content: [''],
    });
  }
}
