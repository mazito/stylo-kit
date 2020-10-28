<FieldContainer
  id={id}
  inside='plain'
  type={type}
  layout={layout}
  label={label}
  size={size}
  width={width}
  required={required}
  status={status}
  messages={messages}
  hints={hints}
  helper={help}
  bind:value 
  >

  <span slot="input-area" bind:this={me}>
    <InputArea 
      id={id}
      layout={layout}
      type={type}
      size={size}
      width={layout==='stacked' ? '100%' : width}
      required={required}
      readonly={readonly}
      disabled={disabled}
      status={status}
      bind:value />
  </span>

  <span slot="buttons-area">
    [Button1] [2 ] [ 3 ]
  </span>
</FieldContainer>

<script>
  import { onMount } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from './_InputArea.svelte'

  export let
    id,
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
    help = true,
    value,
    show = true;

  let 
    me = null,
    toggleHints = false,
    notice = '',
    originalLayout = layout,
    maxch = null;

  value = (value === null && initial !== null) ? initial : value;

  onMount(() => {
    // width of input box in chars
    // we assumed a char width of 16px to calculate it 
    // and apply a safety value of 10 chars to change before end
    maxch = parseInt(me.getBoundingClientRect().width) / 16 - 10 ;
  })

  $: if (maxlen && value) {
    if (value.length > maxlen) {
      status =  'error';
      notice = "Exceeds "+maxlen+" chars, will be truncated.";
    }
    else {
      status =  '';
      notice = "";
    }
  }

  $: if  (value) {
    layout = autochangeLayout(value, maxch)
  }

  function autochangeLayout(value, maxch) {
    let isPhone = onBreakpoint({'*': true, 'md': false})
    if (isPhone) {
      return (value.length < maxch) ? originalLayout : 'stacked';
    }
    return originalLayout;
  }
</script>
