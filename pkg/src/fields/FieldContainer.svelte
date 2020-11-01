<Panel w="100%">

  <Panel flex={inline ? 'row' : "column"}  items='end'>

    <!-- Label Area -->
    <Panel 
      show={label}
      noflex={inline ? null : 'row'}}
      w={{'*': (inline ? "50%" : "100%"), 'md': (inline ? "22ch" : "100%")}}
      border-bottom={inline ? "2" : null}
      items="center"
      overflow="hidden"
      pb={inline ? "0" : null}
      pl={inline ? "xs" : null}
      mr={inline ? "xs" : null}
      mb={inline ? null : "-6px"}
      >
       <!-- Label here -->
       <Label control={id} mr="xs" color="body" xs bold>
          {label}
          <Text show={!!required} color="warning">*</Text>
        </Label>
      
        <StatusIcon show={!!required && !disabled && !readonly} status={status} />
    </Panel>

    <Panel flex items='end' justify="start"
      w={{'*': (inline ? "50%" : "100%"), 'md': "100%"}}>

      <!-- Input Area -->
      <Panel 
        align="left" noflex items="center" justify="start" w="100%">
        
        <Panel grow overflow="hidden" w="100%">
          <slot name="input-area"></slot>
        </Panel>

        <!-- Helper Button 
        -->
        <Box show={helper} ml="sm" overflow="hidden">
          <HelpButton id={id} label={label} bind:toggle={toggleHints}/>
        </Box>

      </Panel>
      
      <!-- Buttons Area -->
      <Panel overflow="hidden" pb="xs">
          <slot name="buttons-area"></slot>
      </Panel>

    </Panel>

  </Panel>

  <!-- Hints && StatusArea -->
  <Panel px='xs'>
    {#if (status && messages[status])}
      <Text xs color={colored[status]}>{messages[status]}</Text>
    {/if}

    {#if (hints && toggleHints)}
      <Text xs color="muted">{@html hints}</Text>
    {/if}
  </Panel>

</Panel>

<script>
  import { Panel, Box, Text, Label } from 'svelte-stylo'
  import LabelArea from './_LabelArea.svelte'
  import HelpButton from './_HelpButton.svelte'
  import StatusIcon from './_StatusIcon.svelte'

  export let 
    id,
    label = '',
    type = 'text',
    layout = 'stacked',
    width = null,
    hints = '',
    messages = {},
    status = 'empty',
    required = false,
    disabled = false,
    readonly = false,
    helper = true,
    value,
    show = true,
    inside = 'plain'//'cell || item || plain'
    ;

  let   
    inline = (layout === 'inline'),
    showLabel = true,
    toggleHints = false,
    showHints=false;

  let colored = {
    'empty': 'muted',
    'incomplete': 'warning',
    'error': 'danger',
    'valid': 'success'
  }

  $: if (helper !== null) {
    toggleHints = !helper;
  }

  $: if (layout !== null) {
    inline = (layout === 'inline');
  }
</script>