<FieldContainer
  id={id} layout={layed} {...container} {...field} focused={focused} bind:value >

  <span slot="input-area">
    <Panel flex items="end">
      <InputArea 
        id={id} type="decimal" layout={layed} {...field} bind:value={buffer} 
        mini={variant==='mini' || null}
        on:focus={onFocus}
        on:blur={onBlur}
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

  import { validateIf, exceedsMax, exceedsMin, isEmpty, notATime } from '../validators'
  import { randid, autoLayout, containerProps, fieldProps, initialValue } from '../helpers'
  import { formatTime, localToNumber } from './formats';

  export let
    show = true,
    //
    id = null,
    label = '',
    type = 'time',
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

  value = initialValue($$props, value);
  buffer = value;

  $: if ($$props) {
    typed = type;
    container = containerProps($$props);
    field = fieldProps($$props);
    field = validate(value, field);
  };

  $: if (focused && buffer !== null) {
    field.status = 'valid'; // reset before validations
    field =  validate(buffer, field);
    console.log("TimeField validateIf v,field=", buffer, field.status)
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
      buffer = formatTime(value, format);
      //console.log("NumberField onBlur value,buffer=", value, buffer);
    })
  }

  function validate(value, field) {
    field.errors = validateIf(localToNumber(buffer), field, [
      exceedsMax,
      exceedsMin,
      notATime,
      isEmpty
    ])

    let status = field.errors.length ? 'error' : field.status;
    field.status = (buffer || '').toString().trim().length ? status : 'empty';

    return field;
  }
</script>
