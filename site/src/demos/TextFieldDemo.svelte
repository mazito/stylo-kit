<Heading lg>TextField Demo</Heading>

<Panel noborder="1" rounded="sm">

  <Panel nm="nm" border="1">
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
  import { TextField, Chip, FieldProps } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    ...FieldProps.Common,
    ...FieldProps.Text,
  }
 
  const defaults = {
    label: 'A field label',
    size: 32,
    maxlen: 10,
  };

  Object.keys(field).map((t) => {
    field[t] = defaults[t] || field[t];
  });

  field.messages.errors = {
    'is_empty': 'Must complete it',
    'max_length_exceeded': 'String is tooo long !'
  }

  let value = null;

</script>