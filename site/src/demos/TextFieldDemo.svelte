<Heading lg>TextField Demo</Heading>
<Panel border="1">

  <FieldContainer {...container}>

    <div slot="before-area">
      <Box border="2" p="sm" mr="sm" mb="-1px" line="fit">
        O
      </Box>
    </div>

    <div slot="input-area">
      <Panel border-bottom="no" pt="2px" mt="sm">
        <Input border="0" border-bottom="input" value="Input 1" py="sm" size="10" mr="sm"/>
        <Input border="0" border-bottom="input" value="Inp. 2" py="sm" size="8" mr="sm"/>
        <Input border="0" border-bottom="input" value="Input 3" py="sm" size="20"/>
      </Panel>
    </div>

    <div slot="limits-area">
      [Field limits area]
    </div>

    <div slot="after-area">
      <Box border="2" p="sm" mb="-1px" line="fit">
        O
      </Box>
    </div>

  </FieldContainer>

</Panel>

<Panel my="nm" p="nm" border="1">
<Label mr="sm">Value: </Label>{value}
</Panel>

<ContainerOptions bind:container={container} />

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
  import { TextField, Chip, AnyFieldProps, TextFieldProps } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    ...AnyFieldProps,
    ...TextFieldProps,
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