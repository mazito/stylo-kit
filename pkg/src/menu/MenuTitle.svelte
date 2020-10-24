<Panel 
  px="nm" pt="nm" pb=0
  style= { css && css.styled() }
  >
  <Label color="muted" xs line="double"><slot></slot></Label>
</Panel>

<script>
  import { Css, Panel, Label } from  'svelte-stylo'

  let css = Css($$props);
</script>
