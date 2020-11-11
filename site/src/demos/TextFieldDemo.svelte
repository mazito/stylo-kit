<Heading lg>TextField Demo</Heading>

<Panel noborder="1" rounded="sm">

  <Heading thin nm mb="nm" m="nm">Encabezado de seccion</Heading>

  <Panel nm="nm">
    <TextField {...field} bind:value={value}/>
    <TextField {...field} bind:value={value}/>
    <TextField {...field} bind:value={value}/>
  </Panel>

</Panel>

<Panel my="nm" p="nm" border="1">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<SharedOptions 
  bind:field={field} 
  types={['text', 'email', 'password', 'area']}>

  <Panel mb="xs">
    <Chip>maxlen</Chip> 
    <Input 
      p="xs"
      bind:value={field.maxlen}
      />
  </Panel>

</SharedOptions>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { TextField, Chip } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    label: 'Supervisor de calidad',
    type: 'text',
    layout: 'inline',
    variant: 'wide',
    initial: '',
    hints: 'Some useful hint ...',
    width: '32ch',
    maxlen: 12,
    status: 'valid',
    required: true,
    disabled: false,
    readonly: false,
    helper: true,
    messages: {
      empty: 'This field is empty, please fill it',
      incomplete: 'It\'s still incomplete, please go on',
      error: 'Mmmm, something is wrong ',
      valid: ''
    }
  };

  let value = null;

</script>