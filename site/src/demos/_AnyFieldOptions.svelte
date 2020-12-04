<Heading lg>OptionsField Demo</Heading>

<Panel bg="surface" py="nm">
  <OptionsField {...field} bind:value={value}/>
</Panel>

<Panel my="nm" p="nm" border="3">
  <Label mr="sm">Value: </Label>{value}
</Panel>

<SharedOptions 
  bind:field={field} 
  types={['select', 'options', 'semaphore', 'signal', 'emoticon']}>

</SharedOptions>

<script>
  import { Heading, Label, Input, Panel, Box, Select } from 'svelte-stylo'
  import { OptionsField, Chip } from 'svelte-stylo-kit'
  import SharedOptions from './SharedOptions.svelte'

  let field = {
    label: 'Limpieza',
    type: 'options',
    layout: 'inline',
    initial: null,
    hints: 'Some useful hint here ...',
    status: 'valid',
    required: true,
    disabled: false,
    readonly: false,
    messages: {
      error: 'Mmmm, something is wrong ',
      valid: ''
    },

    //
    options: [
      { value: 'a1', text: 'Diaria'},
      { value: 'a2', text: 'Profunda'},
      { value: 'a3', text: 'Ultra'},
    ]
  };

  let value = '1';

</script>