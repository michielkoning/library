import type { Theme } from '@/types/Theme';
import { ref } from 'vue';

export default (theme: Theme = 'primary') => {

  const colors = ref({
    emphasized: `var(--color-${theme}-emphasized)`,
    contrast: `var(--color-${theme}-contrast)`,
    fg: `var(--color-${theme}-fg)`,
    subtle: `var(--color-${theme}-subtle)`,
    muted: `var(--color-${theme}-muted)`,
    solid: `var(--color-${theme}-solid)`,
    focusRing: `var(--color-${theme}-focus-ring)`,
    border: `var(--color-${theme}-border)`,
  })

  return {
    colors
  }
}
