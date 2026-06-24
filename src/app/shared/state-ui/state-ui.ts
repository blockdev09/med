import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-state-ui',
  imports: [],
  templateUrl: './state-ui.html',
  styleUrl: './state-ui.scss',
})
export class StateUi {
  type = input<'loading' | 'error' | 'empty'>('loading');
  message = input<string>('');
  actionLabel = input<string>('');
  actionClick = output<void>();

  onAction() {
    this.actionClick.emit();
  }
}