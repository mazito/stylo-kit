<Label 
  for={id}
  w={"100%"}
  border-bottom={inline ? "2" : null}
  pb={inline ? "xs" : null}
  pl={inline ? "xs" : null}
  mr="xs"
  color="body"
  xs bold 
  >
  {label}
  {#if required}<Text color="warning">*</Text>{/if}
</Label>

<script>
  import { Box, Icon, Label, Input, Text, Panel } from 'svelte-stylo';

  export let
    id,
    label = '',
    inline = true,
    required = false;

</script>
