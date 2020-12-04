{#if show}
<Panel flex items='center' w="100%">

  <!-- Prefix area -->
  {#if isInline}
    <slot name="before-area"></slot>
  {/if}

  <!-- Default area -->
  <Panel grow position="relative">

    <Panel flex>
      <Panel {...defaultArea} w="100%">
        
        <!-- LabelArea only visible in Inline an Stacked variants -->
        {#if !isMini}
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
          {#if !isInline}
            <Box {...afterArea}>
              
              <!-- In  Mini variant, status must overlay the input -->
                {#if isMini}
                <Box  {...statusArea}>
                  <StatusIcon show={!!required} status={status}/>
                </Box>
              {/if}
      
              <slot name="after-area"></slot>
            </Box>
          {/if}
        </Panel>

      </Panel>
    </Panel>

    <!-- Messages & limits area-->
    <Panel flex items="start" justify="start" h="1.25" show={isInline || isStacked}>
      
      <Panel nogrow show={!isMini && focused}>
        <MessagesArea {hints} {messages} {errors} {status} />
      </Panel>

      <Panel show={!isMini && focused} ml="nm">
        <Text xs>{limits ? ' ('+limits+')' : ''}</Text>
      </Panel>

    </Panel>

  </Panel>

  <!-- Postfix area -->
  {#if isInline}
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
    errors = [],
    hints = '',
    limits = '',
    // default for all
    show = true;

  let   
    isInline = (layout === 'inline'),
    isStacked = (layout === 'stacked'),
    isMini = (layout === 'mini');

  let 
    defaultArea = {},
    inputArea = {},
    labelArea = {},
    labelContent = {},
    statusArea = {},
    afterArea = {};

  $: if (layout !== null) {
    isInline = (layout === 'inline');
    isStacked = (layout === 'stacked');
    isStacked = (layout === 'stacked');
    isMini = (layout === 'mini');
    console.log("FieldContainer layout", layout)

    defaultArea = {
      flex: isInline ? 'row' : null,
      items: isInline ? 'end' : null,
      justify: isInline ? 'start' : null,
      // border: "1",
      mt: isInline ? 'nm' : null,
      bg: 'trasnparent', //(isStacked || isMini) && focused ? 'light' : 'transparent'
    }

    inputArea = {
      w: isStacked ? '100%' : onBreakpoint({'*': "50%", 'md': '100%'}),
      mt: isStacked ? "nm" : null
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
      // for Stacked and Mini layouts
      mr: (isMini) ? '0' : (isInline ? 'xs' : null),
      mb: (isMini) ? 'xs' : null,

      // when Inline layout
      ml: isInline ? 'xs' : null,
      pb: isInline ? 'sm' : null,
    }

    afterArea = {
      // for Stacked and Mini layouts
      position: (isStacked || isMini) ?  'absolute' : 'relative',
      right: (isStacked || isMini) ?  '2px' : null,
      bottom: (isStacked || isMini) ?  '0px' : null,

      // when isInline layout
      ml: (isInline) ? 'sm' : null,
    }
  }
</script>
