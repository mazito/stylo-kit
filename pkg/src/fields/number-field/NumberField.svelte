<FieldContainer
  id={id} layout={layed} {...container} {...field} bind:value >

  <span slot="input-area">
    <InputArea 
      id={id} type={type} layout={layed} {...field} bind:value={buffer} 
      on:focus={onFocus} on:blur={onBlur}
      />
  </span>

</FieldContainer>

<script>
  import { onMount, tick } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  
  //import FieldContainer from '../FieldContainer.svelte'
  //import InputArea from '../_InputArea.svelte'
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'

  import { validateIf, exceedsMax, exceedsMin, isEmpty, notANumber } from '../validators'
  import { randid, autoLayout } from '../helpers'
  import { formatNumber, localToNumber, numberToLocal } from './formats';

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
    focused = false,
    typed = type,
    layed = layout,
    previous = null,
    maxch = null;

  id = id || randid();

  value = (value === null && initial !== null) ? initial : value;
  buffer = formatNumber(value, format);

  onMount(() => {
    // width of input box in chars
    // we assumed a char width of 16px to calculate it 
    // and apply a safety value of 10 chars to change before end
    let bounds = document.getElementById(id).getBoundingClientRect();
    maxch = parseInt(bounds.width / 16 * 0.75) ;
  })

  $: if ($$props) {

    layed = autoLayout(buffer, maxch, type, layout);

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

    field = validate(value, field);
  };

  $: if (focused && buffer !== null) {
    
    //console.log("NumberField entered $buffer", buffer);

    layed = autoLayout(buffer, maxch, type, layout);

    // field.width = (layed==='stacked') ? '100%' : width;

    field.status = 'valid'; // reset before validations

    const v = localToNumber(buffer);

    field =  validate(v, field);

    //console.log("NumberField validateIf v,field=", v, field)
  }

  function onFocus(ev) {
    buffer = numberToLocal(value);
    focused = true;
    //console.log("NumberField onFocus value,buffer=", value, buffer);
  }

  function onBlur(ev) {
    focused = false;

    value = localToNumber(buffer);
    
    field = validate(value, field);
    
    tick().then(() => {
      buffer = formatNumber(value, format);
      //console.log("NumberField onBlur value,buffer=", value, buffer);
    })
  }

  function validate(value, field) {
    return (validateIf(value, field, [
        exceedsMax,
        exceedsMin,
        isEmpty, 
        notANumber
      ])
    );
  }
</script>
