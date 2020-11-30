<!--
  before-area
  after-area
  input-area
  hints-area
  limits-area
-->
{#if show}
<Panel flex items='center' w="100%">

  <!-- Prefix area -->
  {#if wide}
    <slot name="before-area"></slot>
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

          {#if isStacked}
          <Box {...statusArea}>
            <StatusIcon show={!!required} status={status}/>
          </Box>
          {/if}

        </Label>

        {#if isInline}
        <Box {...statusArea}>
          <StatusIcon show={!!required} status={status}/>
        </Box>
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
    <Panel flex items="start" justify="start" h="1.25" show={wide}>
      
      <Panel nogrow show={wide && focused}>
        <MessagesArea {hints} {messages} {errors} {status} />
      </Panel>

      <Panel show={wide && focused} ml="nm">
        <Text xs>{limits ? ' ('+limits+')' : ''}</Text>
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
  import MessagesArea from './container/_MessagesArea.svelte'

  export let 
    // container props
    id,
    label = '',
    layout = 'stacked',
    variant = 'wide',
    status = 'empty',
    required = false,
    focused = false,
    messages = {},
    errors = [],
    hints = '',
    limits = '',
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
    console.log("FieldContainer layout1", layout)
  }

  $: if (layout !== null) {
    isInline = (layout === 'inline');
    isStacked = (layout === 'stacked');
    console.log("FieldContainer layout2", layout)

    defaultArea = {
      flex: isInline ? 'row' : null,
      items: isInline ? 'end' : null,
      justify: isInline ? 'start' : null,
      // border: "1",
      bg: isStacked && focused ? 'light' : 'transparent'
    }

    inputArea = {
      w: isStacked ? '100%' : onBreakpoint({'*': "50%", 'md': 'auto'}),
      mt: isStacked && !mini ? "nm" : null
    }

    labelArea = {
      w: isStacked ? '98%' : onBreakpoint({'*': "50%", 'md': '32ch'}),
      overflow: 'hidden',      

      // inline props
      flex: isInline ? 'row' : null,
      items: isInline ? 'center' : null,
      justify: isInline ? 'start' : 'start',
      mr: isInline ? "sm" : null,     
      pb: isInline ? "0" : null,
      "border-bottom": isInline ? "3" : null, 
      
      // stacked props
      position: isStacked ? "absolute" : null,
      left: isStacked ? "2px" : null,
      top: isStacked ? (focused ? '4px' : "8px") : null,
      pl: isStacked ? (focused ? 'xs' : "0") : null,
    }

    labelContent = {
      color: focused ? "dark" : "body",
      "font-size": "sm",
      py: isInline ? "xs" : null,
      line: "tight"
    }

    statusArea = {
      // for Compact and Mini layouts
      mr: (mini) ? '0' : (wide ? 'xs' : null),
      mb: (mini) ? 'xs' : null,

      // when Wide layout
      ml: (wide) ? 'xs' : null,
      pb: isInline ? 'sm' : null,
    }

    afterArea = {
      // for Compact and Mini layouts
      position: (!wide) ?  'absolute' : 'relative',
      right: (!wide) ?  '2px' : null,
      bottom: (!wide) ?  '2px' : null,

      // when Wide layout
      ml: (wide) ? 'sm' : null,
    }
  }
</script>