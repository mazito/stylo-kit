{#if show}
  <FieldContainer {id} {layout} {focused} {...container} {...field} >

    <span slot="input-area">
      <InputArea 
        {id} {type} {layout} {...field} bind:value={buffer} 
        on:focus={onFocus} on:blur={onBlur}
        />
    </span>

    <span slot="limits-area">
      <Text xs> {field.limits} </Text>
    </span>

  </FieldContainer>
{/if}

<script>
  import { onMount, tick } from 'svelte'
  import { Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  
  //import FieldContainer from '../FieldContainer.svelte'
  //import InputArea from '../_InputArea.svelte'
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'
  import { validateIf, exceedsMax, exceedsMin, isEmpty, notANumber } from '../validators'
  import { randid } from '../helpers'
  import { formatNumber, localToNumber, numberToLocal } from './formats';

  export let
    show = true,
    value;

  let props = $$props;

  let
    id,
    container = {}, 
    field = {},
    layout = 'inline',
    type = 'text',
    togglePassword = true,
    maxch = null,
    focused = false,
    previous = null,
    buffer;

  id = props.id || randid();
    
  value = (value === null && props.initial !== null) ? props.initial : value;
  buffer = formatNumber(value, props.format);
  
  $: if ($$props) {
    props = $$props;
    reset(props, buffer);
    field = validate(field, buffer)
    console.log("NumberField $$props status,buffer=", field.status, buffer)
  };

  $: if (focused && buffer !== null) {
  
    console.log("NumberField buffer=", buffer)
      
    reset(props, buffer);

    field = validate(field, buffer)
    console.log("NumberField $buffer status,buffer=", field.status, buffer)
  }

  function reset(props, val) {

    type = props.type;
    layout = props.layout;

    container = {
      variant: props.variant,
      label: props.label,
      hints: props.hints,
    }

    field = {
      width: props.width,
      size: props.size,
      initial: props.initial,
      required: props.required && !props.disabled && !props.readonly,
      disabled: props.disabled,
      readonly: props.readonly,
      status: props.status, 
      messages: props.messages,
      errors: [],
      min: props.min,      
      max: props.max,      
      format: props.format
    }

    field.width = (layout==='stacked') ? '100%' : props.width;

    field.status = val!==null && val.toString().trim().length ? props.status : 'empty';

    field.limits = [(props.min ? "> "+props.min : null), 
                    (props.max ? '< '+props.max : null)]
                    .filter((t) => t!==null)
                    .join(' y ')
  }


  function validate(field, val) {

    field.errors = validateIf(localToNumber(val), field, [
      exceedsMax,
      exceedsMin,
      isEmpty, 
      notANumber
    ])

    let status = field.errors.length ? 'error' : field.status;
    field.status = val.toString().trim().length ? status : 'empty';

    return field;
  }


  function onFocus(ev) {
    buffer = numberToLocal(value);
    focused = true;
    console.log("NumberField ---onFocus value,buffer=", value, buffer);
  }

  function onBlur(ev) {
    focused = false;
    value = localToNumber(buffer);
    console.log("NumberField ---onBlur status,value,buffer=", field.status, value, buffer);
    tick().then(() => {
      buffer = formatNumber(value, props.format);
    })
  }
</script>
