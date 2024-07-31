import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-toolbar-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './toolbar-card.component.html',
  styleUrl: './toolbar-card.component.css',
})
export class ToolbarCardComponent implements OnInit, OnChanges {
  @HostBinding('class.visible') @Input() isHome!: boolean;
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isHome']?.currentValue) {
      this.isHome = changes['isHome'].currentValue;
      this.cdr.detectChanges();
    }
  }
}
