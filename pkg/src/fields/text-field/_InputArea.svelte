<Panel
  width={readonly ? "100%" : width}
  overflow="hidden"
  position="relative"
  >

  <!-- If disabled, dont show Input box, just the text -->
  {#if state && state==='readonly'}
    <Label 
      font-size={size}
      pt="sm" pb="xs"
      width="100%"
      colors={colors[state]}
      border-bottom={borders[state]}
      >
      {value}
    </Label>
  {/if}

  <!-- If enabled or disabled must show input box -->
  {#if state && state!=='readonly'}
    <Input 
      font-size={size}
      border="none"
      pt="sm" pb="xs"
      width={width}
      colors={colors[state]}
      border-bottom={borders[state]}
      disabled={state==='disabled'}
      bind:value={value}
      /> 

    {#if !!showSymbol && status && symbols[status]}
      <Label
        md bold 
        position="absolute" right=0 bottom="2px"
        w="2ch" align="center"
        pb="xs"
        bg="surface" color={symbols[status].color}
        >
        {@html symbols[status].content}
      </Label>
    {/if}
  {/if}

</Panel>

<script>
  import { Label, Input, Text, Panel } from 'svelte-stylo';

  export let
    type = 'text',
    width = null,
    size='nm',
    status = 'empty',
    required = false,
    disabled = false,
    readonly = false,
    value;

  let symbols = {
    'empty': { color: 'muted', content: '&excl;'},
    'incomplete': { color: 'warning', content: '&excl;'},
    'error': { color: 'danger', content:  '&cross;'},
    'valid': { color: 'success', content:  '&check;'}
  }

  let borders = {
    'enabled': "2px solid orange",
    'readonly': null,
    'disabled': '1'
  }

  let colors = {
    'enabled': "dark",
    'readonly': "body",
    'disabled': "muted"
  }

  let 
    showSymbol = false,
    state = null;

  $: if (required !== null) {
    showSymbol = !!required && !disabled && !readonly;
  }

  $: if (readonly !== null || disabled !== null) {
    state = !!readonly 
              ? 'readonly' 
              : (!!disabled ? 'disabled' : 'enabled');
  }
</script>
