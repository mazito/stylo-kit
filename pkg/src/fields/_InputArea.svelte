<Panel w="100%" overflow="hidden" position="relative">

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

    {#if type==='area'}

      <Textarea 
        on:click on:change on:focus on:blur
        id={id} {...inputProps} bind:value={value} />

    {:else}
      <Input 
        on:click on:change on:focus on:blur
        id={id} type={type} {...inputProps} bind:value={value} />

    {/if}
  {/if}

</Panel>

<script>
  import { Label, Input, Textarea, Text, Panel } from 'svelte-stylo';

  export let
    id,
    type = 'text',
    width = null,
    size='nm',
    disabled = false,
    readonly = false,
    value,

    // force mini variant
    mini = false;

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
    state = null,
    focused = null,
    inputProps = {},
    isArea = null;

  //$: if ($$readonly !== null || disabled !== null) {
  $: if ($$props) {

    state = !!readonly 
              ? 'readonly' 
              : (!!disabled ? 'disabled' : 'enabled');
    
    isArea = type==='area';

    //inputProps["border-bottom"] = borders[state];
    //inputProps.disabled = (state==='disabled')
    inputProps = {
      "font-size": "md",
      border: "none",
      mt: isArea ? "nm" : "sm", 
      pt: isArea ? "xs" : (mini ? "0" : "sm"), 
      pb: isArea ? 0 : "xs",
      line: "20px",
      width: isArea ? "100%" : width,
      color: colors[state],
      disabled: (state==='disabled'),
      underlined: isArea ? true : null,
      "border-bottom": isArea ? null : borders[state],
      "bg": "transparent",
      "focus-bg": "light",
      width: width || (size ? size+'ch' : null),
    }
  }

  $: if (focused !== null) {
    // inputProps["border-bottom"] = isArea 
    //   ? null 
    //   : (focused && state==='enabled') ? borders['focused'] : borders[state]
  }
</script>
