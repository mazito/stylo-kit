<Heading lg>TextField Demo</Heading>

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
      options={[
        {value:'text', text: 'text'},
        {value:'password', text: 'password'},
        {value:'email', text: 'email'},
        {value:'area', text: 'area'},
        ]}
      bind:value={field.type}
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

  <Panel mb="xs">
    <Chip>help</Chip> 
    <Select 
      p="xs"
      options={[
        {value: true, text: 'true'},
        {value: false, text: 'false'},
      ]}
      bind:value={field.help}
    />
  </Panel>

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
  </Panel>

  <Panel mb="xs">
    <Chip>width</Chip> 
    <Input 
      p="xs"
      bind:value={field.width}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>hints</Chip> 
    <Input 
      p="xs"
      bind:value={field.hints}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>initial</Chip> 
    <Input 
      p="xs"
      bind:value={field.initial}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>maxlen</Chip> 
    <Input 
      p="xs"
      bind:value={field.maxlen}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>messages.empty</Chip> 
    <Input 
      p="xs"
      bind:value={field.messages.empty}
      />
  </Panel>
  <Panel mb="xs">
    <Chip>messages.incomplete</Chip> 
    <Input 
      p="xs"
      bind:value={field.messages.incomplete}
      />
  </Panel>
  <Panel mb="xs">
    <Chip>messages.error</Chip> 
    <Input 
      p="xs"
      bind:value={field.messages.error}
      />
  </Panel>
  <Panel mb="xs">
    <Chip>messages.valid</Chip> 
    <Input 
      p="xs" border="3"
      bind:value={field.messages.valid}
      />
  </Panel>


  <Panel mb="xs">
    <Chip>status</Chip> 
    <Select 
      p="xs"
      options={[
        {value:'empty', text: 'empty'},
        {value:'incomplete', text: 'incomplete'},
        {value:'error', text: 'error'},
        {value:'valid', text: 'valid'},
        {value:'null', text: 'null'},
        ]}
      bind:value={field.status}
    />
  </Panel>


</Panel>

<Panel bg="page" p="sm">

  <Panel noborder-bottom="2px solid #aaa" pt="md" pb="0" bg="surface">
    <TextField {...field} bind:value={value}/>
  </Panel>

  <Panel noborder-bottom="2px solid #aaa" pt="md" pb="0" bg="surface">
    <TextField {...field} bind:value={value}/>
  </Panel>

</Panel>

<Panel p="nm">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { TextField, Chip } from 'svelte-stylo-kit'

  let field = {
    label: 'A Text Field',
    type: 'text',
    layout: 'inline',
    initial: 'We must',
    hints: 'Some useful hint here ...',
    width: 16,
    maxlen: 200,
    status: 'valid',
    required: true,
    disabled: false,
    readonly: false,
    help: true,
    messages: {
      empty: 'This field is empty, please fill it',
      incomplete: 'It\'s still incomplete, please go on',
      error: 'Mmmm, something is wrong ',
      valid: 'It\'s all good man !'
    }
  };

  let value = null;

</script>