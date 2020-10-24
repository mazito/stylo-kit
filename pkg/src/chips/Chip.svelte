{#if show}
  <Label
    on:click
    xs
    id={id || ''}
    bg={bg}
    color={color}
    rounded="sm"
    py="xs" px="sm"
    >
    {#if icon}
      <Icon name={icon} size="12px"/>
    {/if}
    <slot></slot>
  </Label>
{/if}

<script>
  import { Box, Icon, Label } from 'svelte-stylo';

  export let
    id,
    bg = 'gray300',
    color = 'body',
    icon = null,
    show = true;
</script>