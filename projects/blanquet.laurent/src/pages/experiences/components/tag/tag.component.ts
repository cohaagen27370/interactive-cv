import {Component, computed, inject, input} from '@angular/core';
import {globalStore} from '../../../../global.store';
import {ClarityModule} from '@clr/angular';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-tag',
  imports: [ClarityModule, NgClass],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  $store = inject(globalStore);

  model = input.required<string>();
  label = input.required<string>();
  odd = input.required<boolean>();

  value = computed(() => {
    const skills = this.$store.skills();

    for (const skill of skills) {
      const foundContent = skill.content.find((x) => x.name == this.model());
      if (foundContent) return foundContent;
    }

    return undefined;
  });


}
