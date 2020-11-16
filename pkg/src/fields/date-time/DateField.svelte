<FieldContainer
  id={id} layout={layed} {...container} {...field} focused={focused} bind:value >

  <span slot="input-area">
    <Panel flex items="end">
      <InputArea 
        id={id} type="text" layout={layed} {...field} bind:value={buffer} 
        mini={variant==='mini' || null}
        on:focus={()=> {focused = true}}
        on:blur={()=> {focused = false}}
        />
      <Box ml="sm" pr="sm">
        <Icon name="calendar" xl/>
      </Box>
    </Panel>
    </span>
    
    <span slot="after-area">
  </span>
 
</FieldContainer>

<script>
  import { onMount, tick } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, Button, onBreakpoint } from 'svelte-stylo';
  
  //import FieldContainer from '../FieldContainer.svelte'
  //import InputArea from '../_InputArea.svelte'
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'

  import { validateIf, exceedsMax, exceedsMin, isEmpty, notANumber } from '../validators'
  import { randid, autoLayout } from '../helpers'
  import { formatDate } from './formats';

  export let
    show = true,
    //
    id = null,
    label = '',
    type = 'date',
    layout = 'inline',
    variant = 'wide',
    width = null,
    size= 12,
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
  buffer = value;

  $: if ($$props) {

    typed = type;

    container = {
      label: label,
      hints: hints,
      helper: help,
      variant: variant
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
    
    field.status = 'valid'; // reset before validations

    const v = buffer;//localToNumber(buffer);

    field =  validate(v, field);

    //console.log("NumberField validateIf v,field=", v, field)
  }

  function onFocus(ev) {
    buffer = value;
    focused = true;
  }

  function onBlur(ev) {
    focused = false;

    value = buffer;
    
    field = validate(value, field);
    
    tick().then(() => {
      buffer = formatDate(value, format);
      //console.log("NumberField onBlur value,buffer=", value, buffer);
    })
  }

  function validate(value, field) {
    return (validateIf(value, field, [
        //exceedsMax,
        //exceedsMin,
        isEmpty
      ])
    );
  }
</script>
