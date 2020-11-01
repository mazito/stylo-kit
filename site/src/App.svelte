<main>

  <Panel px="nm" py="md">
    <Heading h1 thin>Stylo Kit components</Heading>
  </Panel>

  <Panel 
    flex="column" 
    items="start" 
    justify="start">

    <Panel border-right="3" w="100%" px="xs" align="left">

      {#each demos as demo}
        <Box 
          on:click={()=>{clicked(demo)}} 
          color="primary" 
          py="sm" px="nm" mb="sm"
          pointer hover>
          {demo.title}
          </Box>
      {/each}

    </Panel>

    <Panel grow w="100%" px="nm" nopy="nm">
      <svelte:component this={theDemo}/>
    </Panel>

  </Panel>

</main>

<script>
  import { Panel, Heading, Box, Label } from 'svelte-stylo'
  import { customizedTheme } from './customized-theme'
  import TextFieldDemo from './demos/TextFieldDemo.svelte'
  import NumberFieldDemo from './demos/NumberFieldDemo.svelte'

  customizedTheme();

  let demos = [
    { title: 'TextField', component: TextFieldDemo},
    { title: 'NumberField', component: NumberFieldDemo}
  ]

  let theDemo = demos[1].component;

  function clicked(demo) {
    theDemo = demo.component;
  }

</script>

<style>
	body {
		text-align: left;
		margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    width: 100%;
	}
</style>