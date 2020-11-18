<Heading lg>NumberField Demo</Heading>

<Panel bg="surface" py="nm" border="1">
  <NumberField {...field} bind:value={value}/>
</Panel>

<Panel my="nm" p="nm" border="3">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<SharedOptions 
  bind:field={field} 
  types={['integer', 'decimal', 'tel']}>

  <Panel mb="xs">
    <Chip>min</Chip> 
    <Input 
      p="xs"
      bind:value={field.min}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>max</Chip> 
    <Input 
      p="xs"
      bind:value={field.max}
      />
  </Panel>

  <Panel mb="xs">
    <Chip>format</Chip> 
    <Input 
      p="xs"
      bind:value={field.format}
      />
  </Panel>

</SharedOptions>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { NumberField, Chip, FieldProps } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    ...FieldProps.Common,
    ...FieldProps.Number,
  }
 
  const defaults = {
    label: 'Total price',
    type: 'decimal',
    size: 12,
    min: 10,
    max: 20,
    format: '$ ###,##',
    initial: null
  };

  Object.keys(field).map((t) => {
    field[t] = defaults[t] || field[t];
  });

  field.messages.errors = {
    'is_empty': 'Must complete it',
    'lower_than_min_limit': 'Lower than min '+field.min,
    'bigger_than_max_limit': 'Greater than max '+field.max,
    'not_a_valid_number': 'Not a valid number'
  }

  let value = null;

</script>
