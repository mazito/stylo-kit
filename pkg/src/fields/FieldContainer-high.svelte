<Panel w="100%">

  <Panel flex={inline ? 'row' : "column"}  items='center' border-bottom="2px solid #fff">

    <!-- Label Area -->
    <Panel nborder="1"
      show={label}
      flex={inline ? "row" : 'row'}}
      w={{'*': (inline ? "50%" : "100%"), 'md': (inline ? "50%" : "100%")}}
      border-bottom={inline ? "2" : null}
      items="center"
      overflow="hidden"
      p="sm"
      npb={inline ? "0" : null}
      npl={inline ? "xs" : null}
      nmr={inline ? "xs" : null}
      nmb={inline ? null : "-6px"}
      >
       <!-- Label here -->
       <Label control={id} mr="xs" color="body" sm nobold>
          {label}
          <Text show={!!required} color="warning">*</Text>

          <StatusIcon show={!!required && !disabled && !readonly} status={status} />

          <!-- Hints && StatusArea -->
          <Panel nopx='xs'>
            {#if (status && messages[status])}
              <Text xs color={colored[status]}>{messages[status]}</Text>
            {/if}

            {#if (hints && toggleHints)}
              <Text xs color="muted">{@html hints}</Text>
            {/if}
          </Panel>

        </Label>
      
    </Panel>

    <Panel flex items='end' justify="start"
      w={{'*': (inline ? "50%" : "100%"), 'md': "50%"}} border-bottom="1px solid #fff">

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
  <Panel px='xs' show={false}>
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