<template>
  <div class="home">
    Rick and Morty list
    <character-block @initialized='handler'/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterBlock from '@/components/CharacterBlock.vue'
export default {
  name: 'rick-and-mort-list',
  components: {
    CharacterBlock
  },
  methods:{
    handler(){
      
    }
  }
}
</script>
