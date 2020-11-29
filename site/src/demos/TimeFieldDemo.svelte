<Heading lg>NumberField Demo</Heading>

<Panel bg="surface" py="nm">
  <TimeField {...field} bind:value={value}/>
</Panel>

<Panel my="nm" p="nm" border="3">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<SharedOptions 
  bind:field={field} 
  types={['time', 'timestamp']}>

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
  import { TimeField, Chip, AnyFieldProps, TimeFieldProps } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    ...AnyFieldProps,
    ...TimeFieldProps,
  }

  const defaults = {
    label: 'Time (hh:mm)',
    type: 'time', // time , timestamp
    initial: null,
    hints: 'Please input time in hh:mm format',
    size: 6,
    min: "00:00",
    max: "24:00",

    // indicates the **input** mask when type=number in regex format
    // examples 'dd-mm-yy', 'm-d-yyyy', etc 
    mask: 'dd\:dd',
    
    // indicates how to **display** the date value
    format: '##:##'
  };

  Object.keys(field).map((t) => {
    field[t] = defaults[t] || field[t];
  });

  field.messages.errors = {
    'is_empty': 'Must complete it',
    'lower_than_min_limit': 'Lower than min '+field.min,
    'bigger_than_max_limit': 'Greater than max '+field.max,
    'not_a_valid_time': 'Not a valid time'
  }

  let value = null;
</script>