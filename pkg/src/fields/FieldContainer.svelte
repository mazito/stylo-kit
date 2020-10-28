<Panel 
  w="100%"
  >

  <Panel 
    flex={inline ? 'row' : "column"}
    items='end'
    >

    <!-- Label Area -->
    <Panel 
      show={label}
      flex={inline ? null : 'row'}}
      w={{'*': (inline ? "40%" : "100%"), 'md': (inline ? "22ch" : "100%")}}
      items="center"
      >
        <!-- Label here -->
        <LabelArea
          id={id}
          inline={inline}
          label={label}
          required={required}
          />
    </Panel>

    <!-- Input Area -->
    <Panel 
      flex items='end' 
      w={{'*': (inline ? "60%" : "100%"), 'md': "100%"}}
      >
      <Panel grow align="left" flex items="end" justify="start">
        
        <Panel overflow="hidden">
          <slot name="input-area"></slot>
        </Panel>

        <!-- Helper Button -->
        <Box show={helper} ml="sm" overflow="hidden">
          <HelpButton
            id={id}
            label={label}
            bind:toggle={toggleHints}
          />
        </Box>

      </Panel>
      
    </Panel>
    
    <!-- Buttons Area -->
      <Panel overflow="hidden" border="1">
        <slot name="buttons-area"></slot>
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
  import { Panel, Box, Text } from 'svelte-stylo'
  import LabelArea from './_LabelArea.svelte'
  import HelpButton from './_HelpButton.svelte'

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