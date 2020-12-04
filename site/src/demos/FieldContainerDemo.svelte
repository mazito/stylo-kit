<Heading lg>FieldContainer Demo</Heading>
<br>
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

<script>
  import { Heading, Label, Input, Panel, Box, Text, Select } from 'svelte-stylo'
  import { FieldContainer, Chip, FieldContainerProps } from 'svelte-stylo-kit'
  import ContainerOptions from './_ContainerOptions.svelte'

  let container = {
    ...FieldContainerProps,
  }
 
  const defaults = {
    label: 'The field label',
    size: 32
  };

  Object.keys(container).map((t) => {
    container[t] = defaults[t] || container[t];
  });

  container.messages.errors = {
    'is_empty': 'Must complete it'
  }

  let value = null;

</script>