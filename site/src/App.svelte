<main>

  <Panel px="nm" py="md">
    <Heading h1 thin>Stylo Kit components</Heading>
  </Panel>

  <Panel 
    nflex="column" 
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

    <Panel grow w="100%" px="nm" py="nm">
      <svelte:component this={theDemo}/>
    </Panel>

  </Panel>

</main>

<script>
  import { Panel, Heading, Box, Label } from 'svelte-stylo'
  import { customizedTheme } from './customized-theme'
  import TextFieldDemo from './demos/TextFieldDemo.svelte'
  import NumberFieldDemo from './demos/NumberFieldDemo.svelte'
  import DateFieldDemo from './demos/DateFieldDemo.svelte'
  import TimeFieldDemo from './demos/TimeFieldDemo.svelte'
  import CheckFieldDemo from './demos/CheckFieldDemo.svelte'
  import OptionsFieldDemo from './demos/OptionsFieldDemo.svelte'
  import ListItemFieldDemo from './demos/ListItemFieldDemo.svelte'

  customizedTheme();

  let demos = [
    // Input fields
    { title: 'TextField', component: TextFieldDemo},
    { title: 'NumberField', component: NumberFieldDemo},
    { title: 'DateField', component: DateFieldDemo},
    { title: 'TimeField', component: null },
    { title: 'CheckField', component: CheckFieldDemo },
    { title: 'OptionsField', component: OptionsFieldDemo },
    { title: 'ListItemField', component: null },

    // pending
    { title: 'QRCodeField', component: null },
    { title: 'PhotosField', component: null },
    { title: 'FilesField', component: null },

    // Pure display fields
    { title: 'MapField', component: null },
    { title: 'ChartsField', component: null },
  ]

  let theDemo = demos[0].component;

  function clicked(demo) {
    theDemo = demo.component;
  }

</script>

<style>
	:global(body) {
		text-align: left;
		margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    width: 100%;
	}
</style>