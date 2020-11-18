{#if show}
  <FieldContainer
    {id} {layout} {focused} 
    {...container} 
    {...field} 
    bind:value>

    <span slot="before-area">
      <!-- before-area -->
    </span>

    <span slot="input-area">
      <InputArea {id} {type} {layout} {...field} bind:value
        mini={props.variant==='mini' || null}
        on:focus={()=> {focused = true}}
        on:blur={()=> {focused = false}}
        />
    </span>

    <span slot="limits-area">
      <Text xs>{field.limits}</Text>
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
{/if}

<script>
  import { onMount } from 'svelte'
  import { Button, Box, Icon, Label, Input, Text, Panel, onBreakpoint } from 'svelte-stylo';
  import FieldContainer from '../FieldContainer.svelte'
  import InputArea from '../_InputArea.svelte'
  import { validateIf, exceedsMaxlength, isEmpty } from '../validators'
  import { randid } from '../helpers'

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
    focused = false;

  value = (value === null && props.initial !== null) ? props.initial : value;
  id = props.id || randid();

  onMount(() => {
    // width of input box in chars
    // we assumed a char width of 16px to calculate it 
    // and apply a safety value of 10 chars to change before end
    let bounds = document.getElementById(id).getBoundingClientRect();
    maxch = parseInt(bounds.width / 16) ;
  })

  $: if ($$props) {
    props = $$props;
    reset(props, value);
  };

  $: if (props.type==='password' && togglePassword!==null) {
    type = togglePassword ? 'password' : 'text';
  };

  $: if (value !== null) {

    reset(props, value);

    field.errors = validateIf(value, field, [
      exceedsMaxlength,
      isEmpty
    ])

    let status = field.errors.length ? 'error' : field.status;
    field.status = value.trim().length ? status : 'empty';
  }

  function reset(props, value) {

    type = props.type;
    layout = autoLayout(value, maxch, props.type, props.layout);

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
      maxlen: props.maxlen,
      errors: []
    }

    field.width = (layout==='stacked') ? '100%' : props.width;

    field.status = value!==null && value.trim().length ? props.status : 'empty';

    field.limits = (value===null ? 0 : value.length)+" / "+props.maxlen;
  }

  function autoLayout(value, maxch, type, layout) {
    
    if (type==='area') return 'stacked';

    let isPhone = onBreakpoint({'*': true, 'md': false})

    return (isPhone && layout==='inline' && value!==null && value.length > maxch) 
            ? 'stacked' 
            : layout;
  }
</script>
