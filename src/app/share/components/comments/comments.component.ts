import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../../core/models/comment.model'
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  @Input() comments! : Comment[]
  @Output() newComment = new EventEmitter<String>();
  commentCtrl!: FormControl
  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('',[Validators.required, Validators.minLength(10)])
  }
  constructor(private formBuilder:FormBuilder) {
  }

  onLeaveComments() {
    if (this.commentCtrl.invalid){
      return;
    }else {
      this.newComment.emit(this.commentCtrl.value)
      console.log(this.commentCtrl.value)
      this.commentCtrl.reset()
    }
  }
}
