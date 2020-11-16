<Heading lg>CheckField Demo</Heading>

<Panel bg="surface" py="nm">
  <CheckField {...field} bind:value={value}/>
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
  import { CheckField, Chip } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    label: 'Tildar (Si/No)',
    type: 'check',
    layout: 'inline',
    initial: true,
    hints: 'Some useful hint here ...',
    required: true,
    disabled: false,
    readonly: false,
    messages: {
      empty: 'This field is empty, please fill it',
      incomplete: 'It\'s still incomplete, please go on',
      error: 'Mmmm, something is wrong ',
      valid: ''
    },
  };

  let value = null;

</script>