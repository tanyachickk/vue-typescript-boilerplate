<template lang='pug'>
  svg(:class="className" xmlns="http://www.w3.org/2000/svg")
    title(v-if="title") {{ title }}
    use(:xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop()
  private name!: string;
  @Prop()
  private title!: string;

  get iconPath() {
    let icon = require(`@/assets/icons/${this.name}.svg`);
    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default;
    }
    return icon.url;
  }

  get className() {
    return 'svg-icon svg-icon__' + this.name;
  }
}
</script>

<style>
.svg-icon {
  fill: currentColor;
  height: 24px;
  width: 24px;
}
</style>