<Panel font-size="sm" py="nm">

  <Panel mb="xs">
    <Chip>label</Chip> 
    <Input 
      p="xs"
      bind:value={container.label}
      />
  </Panel>

  <!-- <Panel mb="xs">
    <Chip>type</Chip> 
    <Select 
      p="xs"
      options={typed}
      bind:value={container.type}
      />
  </Panel> -->

  <!-- <Panel mb="xs">
    <Chip>initial</Chip> 
    <Input 
      p="xs"
      bind:value={container.initial}
      />
  </Panel> -->

  <hr>

  <!-- <Panel mb="xs">
    <Chip>size</Chip> 
    <Input 
      p="xs"
      bind:value={container.size}
      />
  </Panel> -->

  <Panel mb="xs">
    <Chip>required</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={container.required}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>disabled</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={container.disabled}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>readonly</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={container.readonly}
    />
  </Panel>

  <hr>
  
  <Panel mb="xs">
    <Chip>layout</Chip> 
    <Select 
    p="xs"
    options={[
      {value:'stacked', text: 'stacked'},
      {value:'inline', text: 'inline'},
      {value:'mini', text: 'mini'},
      ]}
    bind:value={container.layout}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>focused</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={container.focused}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>width</Chip> 
    <Input 
      p="xs"
      bind:value={container.width}
      />
  </Panel>

  <hr>
  <!-- <Panel mb="xs">
    <Chip>helper</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={container.helper}
    />
  </Panel> -->

  <Panel mb="xs">
    <Chip>hints</Chip> 
    <Input 
      p="xs"
      bind:value={container.hints}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>status</Chip> 
    <Select 
      p="xs"
      options={[
        {value:'empty', text: 'empty'},
        {value:'error', text: 'error'},
        {value:'valid', text: 'valid'},
        {value:'null', text: 'null'},
      ]}
      bind:value={container.status}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>messages.errors</Chip> 
    <Input 
      p="xs"
      bind:value={container.messages.errors}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>messages.valid</Chip> 
    <Input 
      p="xs" border="3"
      bind:value={container.messages.valid}
      />
  </Panel>

  <hr>

  <slot></slot>

</Panel>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { Chip } from 'svelte-stylo-kit'

  export let 
    container = {};

</script>
