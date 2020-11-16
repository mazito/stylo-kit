<Heading lg>NumberField Demo</Heading>

<Panel bg="surface" py="nm">
  <DateField {...field} bind:value={value}/>
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
  import { DateField, Chip } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    label: 'Precio total ($)',
    type: 'decimal',
    layout: 'inline',
    initial: "2020-12-05",
    hints: 'Some useful hint here ...',
    width: '12ch',
    status: 'valid',
    required: true,
    disabled: false,
    readonly: false,
    helper: false,
    messages: {
      empty: 'This field is empty, please fill it',
      incomplete: 'It\'s still incomplete, please go on',
      error: 'Mmmm, something is wrong ',
      valid: ''
    },
    min: 10,
    max: 100,
    format: '$ ###,##'
  };

  let value = null;

</script>