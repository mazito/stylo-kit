<FieldContainer 
  id={id} 
  layout={layout} 
  {...container} {...field} 
  bind:focused={focused}  
  bind:value>

  <span slot="before-area">
    <!-- before-area -->
  </span>

  <span slot="input-area">

    {#if type==='options'}
      <Panel mt="nm" flex justify="start">
        {#each options as opt}
          <Box 
            rounded="xs" mr="1px" mt="1px"
            hover pointer
            line="tight"
            align="center"
            border={opt.selected ? '1' : "1px solid orange"}
            py={opt.selected ? 'sm' : 'xs'}
            px={opt.selected ? 'sm' : 'sm'}
            bg={opt.selected ? 'body' : null}
            color={opt.selected ? 'white' : 'dark'}
            on:click={() => {selected(opt.value);}}
            >
            <Text sm>{opt.text}</Text>
          </Box>
        {/each}
      </Panel>
    {/if}

    {#if type==='select'}
      <Panel mt="nm">
        <Select sm
        rounded="xs"
        hover pointer
        line="tight"
        border="input"
        py='sm'
        px='sm'
        color='dark'
        bind:value={value} options={options} />
      </Panel>
    {/if}

  </span>

  <span slot="limits-area">
  </span>

  <span slot="after-area">
</span>

</FieldContainer>

<script>
  import { onMount, tick } from 'svelte'
  import { Box, Text, Panel, Select, onBreakpoint } from 'svelte-stylo';
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
    help = false,
    variant = 'wide',
    options = [],
    value;

  let
    container = {}, 
    field = {},
    focused = false;

  value = (value === null && initial !== null) ? initial : value;
  id = id || randid();

  onMount(() => {
    // width of input box in chars
    // we assumed a char width of 16px to calculate it 
    // and apply a safety value of 10 chars to change before end
    //let bounds = document.getElementById(id).getBoundingClientRect();
    //maxch = parseInt(bounds.width / 16 * 0.75) ;
  })

  $: if ($$props) {

    container = {
      variant: variant,
      label: label,
      hints: hints
    }

    field = {
      width: "100%",
      initial: initial,
      required: required && !disabled && !readonly,
      disabled: disabled,
      readonly: readonly,
      status: status, 
      messages: messages  
    }

    console.log("OptionsField options", options)
  };

  $: if (value !== null) {
    options = options.map((t) => {
        return {
          value: t.value, text: t.text, selected: (t.value === value)
        }
      });
  }

  function selected(val) {
    value = val;
  }
</script>
