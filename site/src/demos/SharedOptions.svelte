<Panel font-size="sm" py="nm">

  <Panel mb="xs">
    <Chip>label</Chip> 
    <Input 
      p="xs"
      bind:value={field.label}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>type</Chip> 
    <Select 
      p="xs"
      options={typed}
      bind:value={field.type}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>initial</Chip> 
    <Input 
      p="xs"
      bind:value={field.initial}
      />
  </Panel>

  <hr>

  <Panel mb="xs">
    <Chip>size</Chip> 
    <Input 
      p="xs"
      bind:value={field.size}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>required</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={field.required}
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
      bind:value={field.disabled}
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
      bind:value={field.readonly}
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
      ]}
    bind:value={field.layout}
    />
    &nbsp;
    <Chip>variant</Chip> 
    <Select 
      p="xs"
      options={[
          {value:'wide', text: 'wide'},
          {value:'compact', text: 'compact'},
          {value:'mini', text: 'mini'},
        ]}
      bind:value={field.variant}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>width</Chip> 
    <Input 
      p="xs"
      bind:value={field.width}
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
      bind:value={field.helper}
    />
  </Panel> -->

  <Panel mb="xs">
    <Chip>hints</Chip> 
    <Input 
      p="xs"
      bind:value={field.hints}
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
      bind:value={field.status}
    />
  </Panel>

  <Panel mb="xs">
    <Chip>messages.errors</Chip> 
    <Input 
      p="xs"
      bind:value={field.messages.errors}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>messages.valid</Chip> 
    <Input 
      p="xs" border="3"
      bind:value={field.messages.valid}
      />
  </Panel>

  <hr>

  <slot></slot>

</Panel>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { TextField, Chip } from 'svelte-stylo-kit'

  export let 
    field = {},
    types = [];

  let typed = types.map((t) => { return { value: t, text: t }})
</script>
