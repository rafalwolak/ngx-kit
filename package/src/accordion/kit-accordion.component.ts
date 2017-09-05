import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitAccordionStyle } from '../core/meta/tokens';
import { KitAccordionPanelComponent } from './kit-accordion-panel.component';

@Component({
  selector: 'kit-accordion,[kitAccordion]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAccordionComponent implements OnInit, AfterContentInit {
  /**
   * Automatically open first panel.
   */
  @Input() firstActivate = true;

  @Input() kitAccordion: null;

  /**
   * Allow few panels open at a time.
   */
  @Input() multiple = false;

  @ContentChildren(KitAccordionPanelComponent) panels: QueryList<KitAccordionPanelComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitAccordionStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-accordion';
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.activateFirst();
    this.subscribeOnActivations();
  }

  ngOnInit() {
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.panels.find(p => p.active)) {
        this.panels.first.active = true;
      }
    }
  }

  private subscribeOnActivations() {
    this.panels.forEach(p => p.activate.subscribe((activate: boolean) => {
      if (!this.multiple && activate) {
        this.panels.filter(pa => pa !== p).forEach(pb => {
          pb.active = false;
        });
      }
    }));
  }
}
