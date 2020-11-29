<Heading lg>DateField Demo</Heading>

<Panel bg="surface" py="nm" border="1">
  <DateField {...field} bind:value={value}/>
</Panel>

<Panel my="nm" p="nm" border="3">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<SharedOptions 
  bind:field={field} 
  types={['calendar', 'number']}>

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
  import { DateField, Chip, AnyFieldProps, DateFieldProps } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    ...AnyFieldProps,
    ...DateFieldProps,
  }
 
  const defaults = {
    label: 'Due date',
    type: 'calendar', // 'number'
    size: 12,
    min: '2000-01-01', // required ISO_8601 format yyyy-mm-dd
    max: '2020-01-01',
    initial: null,

    // indicates the **input** mask when type=number in regex format
    // examples 'dd-mm-yy', 'm-d-yyyy', etc 
    mask: '',

    // indicates how to **display** the date value
    format: '', 
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