<!--
  prefix-area
  postfix-area
  input-area
  limits-area
-->

<Panel flex items='center' w="100%">

  <!-- Prefix area -->
  {#if hasBefore}
    <Box border="3" mr="nm">
      <slot name="before-area"></slot>
    </Box>
  {/if}

  <!-- Default area -->
  <Panel grow position="relative">

    <Panel {...defaultArea}>
      
      <Panel {...labelArea}>
        
        <!-- Label here -->
        <Label control={id} {...labelContent}>

          {label}

          <Text show={!!required && status==='empty'} color="warning">*</Text>

          <StatusIcon show={!!required} status={status} />

        </Label>

        {#if isInline}
          <Box pb="nm" color="white">:</Box>
        {/if}

      </Panel>
      
      <Panel {...inputArea}>
        <slot name="input-area"></slot>
      </Panel>

    </Panel>

    <!-- Messages & limits area-->
    <Panel flex items="start">
      
      <Panel grow>
        <MessagesArea hints={hints} messages={messages} status={status} />
      </Panel>

      <Panel>
        <Text xs> {limits} </Text>
      </Panel>

    </Panel>

  </Panel>

  <!-- Postfix area -->
  {#if hasAfter}
    <Box ml="nm">
      <slot name="after-area"></slot>
    </Box>
  {/if}

</Panel>

<script>
  import { Panel, Box, Text, Label, onBreakpoint } from 'svelte-stylo'
  import StatusIcon from './_StatusIcon.svelte'
  import MessagesArea from './_MessagesArea.svelte'

  export let 
    id,
    label = '',
    layout = 'stacked',
    hints = '',
    messages = {},
    status = 'empty',
    required = false,
    focused = false,
    limits = '',
    show = true ;

  let   
    isInline = (layout === 'inline'),
    isStacked = (layout === 'stacked'),
    hasBefore = true,
    hasAfter = true;

  let colored = {
    'empty': 'muted',
    'incomplete': 'warning',
    'error': 'danger',
    'valid': 'success'
  }

  let 
    defaultArea = {},
    inputArea = {},
    labelArea = {},
    labelContent = {};

  $: if (layout !== null) {
    isInline = (layout === 'inline');
    isStacked = (layout === 'stacked');

    defaultArea = {
      flex: isInline ? 'row' : null,
      items: isInline ? 'end' : null,
      noborder: "1",
      bg: isStacked && focused ? 'light' : 'transparent'
    }

    inputArea = {
      w: isStacked ? '100%' : onBreakpoint({'*': "50%", 'md': '70%'}),
      mt: isStacked ? "nm" : null
    }

    labelArea = {
      w: isStacked ? '100%' : onBreakpoint({'*': "50%", 'md': '30%'}),
      overflow: 'hidden',      

      // inline props
      flex: isInline ? 'row' : null,
      items: isInline ? 'center' : null,
      mr: isInline ? "sm" : null,     
      "border-bottom": isInline ? "3" : null, 
      
      // stacked props
      position: isStacked ? "absolute" : null,
      left: isStacked ? "0" : null,
      top: isStacked ? (focused ? '4px' : "8px") : null,
      pl: isStacked ? (focused ? '0' : "0") : null,
    }

    labelContent = {
      color: focused ? "dark" : "body",
      "font-size": "xs",
      pb: isInline ? "xs" : null
    }
  }
</script>
