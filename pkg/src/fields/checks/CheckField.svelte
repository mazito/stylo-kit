<FieldContainer {id} {layout} {focused} {...container} {...field} bind:value>

  <span slot="before-area">
    <!-- before-area -->
  </span>

  <span slot="input-area">
    <Box on:click={() => { if (!readonly && !disabled) value = !value; }} w="1.5" h="1.5" mt="1">
      {#if value===true}
        <Icon xl name="check-on" color={color}/>
      {:else}
        <Icon xl name="check-off" color={color}/>
      {/if}
    </Box>
  </span>

  <span slot="limits-area">
  </span>

  <span slot="after-area">
  </span>

</FieldContainer>

<script>
  import { Box, Icon } from 'svelte-stylo';
  import FieldContainer from '../FieldContainer.svelte'
  import { randid } from '../helpers'

  export let
    show = true,
    id = null,
    label = '',
    type = 'text',
    layout = 'stacked',
    width = null,
    size='nm',
    hints = '',
    initial = '',
    maxlen = null,
    messages = {},
    status = 'empty',
    required = false,
    disabled = false,
    readonly = false,
    variant = 'wide',
    value = false;

  let
    container = {}, 
    field = {},
    focused = false,
    color = null;

  let colored = {
    'readonly': 'body',
    'disabled': 'muted'
  }

  value = (value === null && initial !== null) ? initial : value;
  id = id || randid();

  $: if ($$props) {

    container = {
      variant: variant,
      label: label,
      hints: hints
    }

    field = {
      required: required && !disabled && !readonly,
    }
  };

  $: if (value !== null) {
    color = !!value ? 'success' : 'input';
    color = disabled ? colored['disabled'] : color; 
    color = readonly ? colored['readonly'] : color;
  }
</script>
