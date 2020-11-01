<Heading lg>TextField Demo</Heading>

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

<Panel border="1">

  <Panel noborder-bottom="2px solid #aaa" pt="md" pb="0" bg="surface">
    <TextField {...field} bind:value={value}/>
  </Panel>

</Panel>

<Panel my="nm" p="nm" border="1">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { TextField, Chip } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    label: 'A Text Field',
    type: 'text',
    layout: 'inline',
    initial: 'We must',
    hints: 'Some useful hint here ...',
    width: '16ch',
    maxlen: 10,
    status: 'valid',
    required: true,
    disabled: false,
    readonly: false,
    helper: true,
    messages: {
      empty: 'This field is empty, please fill it',
      incomplete: 'It\'s still incomplete, please go on',
      error: 'Mmmm, something is wrong ',
      valid: 'It\'s all good man !'
    }
  };

  let value = null;

</script>