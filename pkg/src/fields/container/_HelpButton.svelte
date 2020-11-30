{#if show}
  <Label 
    on:click={() => { toggle = !toggle; }}
    round
    color="blue"
    w="2.5ch" h="2.5ch"
    p="xs"
    vertical="bottom"
    align="center"
    line="fit"
    pointer hover>
    ?
  </Label>
{/if}

<script>
  import { Box, Icon, Label, Input, Text, Panel } from 'svelte-stylo';

  export let
    id,
    label = '',
    toggle,
    show = true;
</script>