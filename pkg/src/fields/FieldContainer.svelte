<!--
  prefix-area
  postfix-area
  input-area
  limits-area
-->
{#if show}
<Panel flex items='center' w="100%">

  <!-- Prefix area -->
  {#if wide}
    <Box mr="nm">
      <slot name="before-area"></slot>
    </Box>
  {/if}

  <!-- Default area -->
  <Panel grow position="relative">

    <Panel {...defaultArea}>
      
      <!-- LabelArea only visible in Wide an Compact variants -->
      {#if !mini}
      <Panel {...labelArea}>
        
        <!-- Label here -->
        <Label control={id} {...labelContent}>
          {label}
          <!-- <Text show={!!required && status==='empty'} color="warning">*</Text> -->

          <Box {...statusArea}>
            <StatusIcon show={!!required} status={status}/>
          </Box>
        </Label>

        {#if isInline}
          <Box pb="nm" color="white">:</Box>
        {/if}

      </Panel>
      {/if}

      <Panel {...inputArea}>
        <slot name="input-area"></slot>

        <!-- In  Compact and Mini variants, afterArea must overlay input -->
        {#if !wide}
          <Box {...afterArea}>
            
            <!-- In  Mini variant, status must overlay the input -->
              {#if mini}
              <Box  {...statusArea}>
                <StatusIcon show={!!required} status={status}/>
              </Box>
            {/if}
    
            <slot name="after-area"></slot>
          </Box>
        {/if}
      </Panel>

    </Panel>

    <!-- Messages & limits area-->
    <Panel flex items="start">
      
      <Panel grow show={wide}>
        <MessagesArea hints={hints} messages={messages} status={status} />
      </Panel>

      <Panel show={wide}>
        <Text xs> {limits} </Text>
      </Panel>

    </Panel>

  </Panel>

  <!-- Postfix area -->
  {#if wide}
    <Box {...afterArea}>
      <slot name="after-area"></slot>
    </Box>
  {/if}

</Panel>
{/if}

<script>
  import { Panel, Box, Text, Label, onBreakpoint } from 'svelte-stylo'
  import StatusIcon from './_StatusIcon.svelte'
  import MessagesArea from './_MessagesArea.svelte'

  export let 
    // container props
    id,
    label = '',
    layout = 'stacked',
    status = 'empty',
    required = false,
    focused = false,
    messages = {},
    hints = '',
    limits = '',
    variant = 'wide',

    // default for all
    show = true;

  let   
    isInline = (layout === 'inline'),
    isStacked = (layout === 'stacked'),
    // variants
    wide = variant === 'wide' || null,
    compact = variant === 'compact' || null,
    mini = variant === 'mini' || null;

  let 
    defaultArea = {},
    inputArea = {},
    labelArea = {},
    labelContent = {},
    statusArea = {},
    afterArea = {};

  $: if (variant !== null) {
    wide = variant === 'wide' || null,
    compact = variant === 'compact' || null,
    mini = variant === 'mini' || null;
    layout = (mini || compact) ? 'stacked': layout ; 
  }

  $: if (layout !== null) {
    isInline = (layout === 'inline');
    isStacked = (layout === 'stacked');

    defaultArea = {
      flex: isInline ? 'row' : null,
      items: isInline ? 'end' : null,
      border: "1",
      bg: isStacked && focused ? 'light' : 'transparent'
    }

    inputArea = {
      w: isStacked ? '100%' : onBreakpoint({'*': "50%", 'md': '70%'}),
      mt: isStacked && !mini ? "nm" : null
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
      left: isStacked ? "2px" : null,
      w: isStacked ? "98%" : null,
      top: isStacked ? (focused ? '4px' : "8px") : null,
      pl: isStacked ? (focused ? 'xs' : "0") : null,
    }

    labelContent = {
      color: focused ? "dark" : "body",
      "font-size": "xs",
      pb: isInline ? "xs" : null
    }

    statusArea = {
      // for Compact and Mini layouts
      //position: (mini) ?  'absolute' : 'relative',
      //right: (mini) ?  '2px' : null,
      //top: (mini) ?  '2px' : null,
      mr: (mini) ? '0' : null,
      mb: (mini) ? 'xs' : null,

      // when Wide layout
      ml: (wide) ? 'nm' : null,
    }

    afterArea = {
      // for Compact and Mini layouts
      position: (!wide) ?  'absolute' : 'relative',
      right: (!wide) ?  '2px' : null,
      bottom: (!wide) ?  '2px' : null,

      // when Wide layout
      ml: (wide) ? 'nm' : null,
    }
  }
</script>
