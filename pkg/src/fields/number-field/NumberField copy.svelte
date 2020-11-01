<FieldContainer
  id={id} layout={layed} {...container} {...field} bind:value >

  <span slot="input-area">
    <InputArea 
      id={id} type={type} layout={layed} {...field} bind:value={buffer} />
  </span>

</FieldContainer>

<script>
  import { onMount } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'
  import { validateIf, exceedsMax, exceedsMin, isEmpty } from '../validators'
  import { randid, autoLayout } from '../helpers'
  import { formatNumber } from './formats';

  export let
    show = true,
    //
    id = null,
    label = '',
    type = 'decimal',
    layout = 'inline',
    width = null,
    size='nm',
    //
    help = null,
    hints = '',
    status = 'empty',
    messages = {},
    //
    required = false,
    disabled = false,
    readonly = false,
    // number props
    initial = '',
    max = null, min = null,
    format = '',
    //
    value,
    buffer;

  let
    container = {}, 
    field = {},
    me = null,
    typed = type,
    layed = layout,
    maxch = null;

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

    layed = autoLayout(value, maxch, type, layout);

    typed = type;

    container = {
      inside: 'plain',
      label: label,
      hints: hints,
      helper: help
    }

    field = {
      width: width,
      size: size,
      initial: initial,
      required: required,
      disabled: disabled,
      readonly: readonly,
      status: status, 
      messages: messages,
      max: max,
      min: min      
    }
  };

  $: if (value !== null) {

    layed = autoLayout(value, maxch, type, layout);

    // field.width = (layed==='stacked') ? '100%' : width;

    field.status = 'valid'; // reset before validations

    field = validateIf(value, field, [
      exceedsMax,
      exceedsMin,
      isEmpty
    ])

    console.log("NumberField formatted=", formatNumber(value, format))
  }

  function onFocus(ev) {
    buffer = value;
    console.log("NumberField onFocus value,buffer=", value, buffer);
  }

  function onBlur(ev) {
    value = buffer;
    buffer = formatNumber(value, format)
    console.log("NumberField onBlur value,buffer=", value, buffer);
  }

</script>
