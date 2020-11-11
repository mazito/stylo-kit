<FieldContainer 
  id={id} layout={layed} focused={focused}
  {...container} {...field} bind:value>

  <span slot="before-area">
    before-area
  </span>

  <span slot="input-area">
    <InputArea 
      id={id} type={typed} layout={layed} {...field} bind:value
      mini={variant==='mini' || null}
      on:focus={()=> {focused = true}}
      on:blur={()=> {focused = false}}
      />
  </span>

  <span slot="limits-area">
    <Text xs> {slimits} </Text>
  </span>

  <span slot="after-area">

    {#if type==='password'} 
      <Label 
        on:click={(ev) => { togglePassword = !togglePassword; }}
        color="dark">
        <Icon 
          pointer hover round
          name={togglePassword ? "show" : "hide"}
          xl w="2" h="2"/>
      </Label>
    {/if}
  </span>

</FieldContainer>

<script>
  import { onMount } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'
  import { validateIf, exceedsMaxlength, isEmpty } from '../validators'
  import { randid } from '../helpers'

  export let
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
    help = false,
    show = true,
    variant = 'wide',
    value;

  let
    container = {}, 
    field = {},
    me = null,
    toggleHints = false,
    togglePassword = true,
    typed = type,
    layed = layout,
    maxch = null,
    focused = false,
    len = 0,
    slimits="";

  value = (value === null && initial !== null) ? initial : value;
  id = id || randid();

  onMount(() => {
    // width of input box in chars
    // we assumed a char width of 16px to calculate it 
    // and apply a safety value of 10 chars to change before end
    let bounds = document.getElementById(id).getBoundingClientRect();
    maxch = parseInt(bounds.width / 16 * 0.75) ;
  })

  $: if ($$props) {

    layed = autoLayout(value, maxch, type);

    typed = type;

    container = {
      variant: variant,
      label: label,
      hints: hints,
      helper: help
    }

    field = {
      width: width,
      size: size,
      initial: initial,
      required: required && !disabled && !readonly,
      disabled: disabled,
      readonly: readonly,
      status: status, 
      messages: messages,
      maxlen: maxlen      
    }
  };

  $: if (type==='password' && togglePassword!==null) {
    typed = togglePassword ? 'password' : 'text';
  };

  $: if (value !== null) {

    layed = autoLayout(value, maxch, type);

    field.width = (layed==='stacked') ? '100%' : width;

    field.status = 'valid'; // reset before validations

    field = validateIf(value, field, [
      exceedsMaxlength,
      isEmpty
    ])

    field.limits = value.length+" / "+maxlen;
  }

  function autoLayout(value, maxch, type) {
    
    if (type==='area') return 'stacked';

    let isPhone = onBreakpoint({'*': true, 'md': false})

    return (isPhone && isPhone && layout==='inline' && value.length > maxch) 
            ? 'stacked' : layout;
  }
</script>
