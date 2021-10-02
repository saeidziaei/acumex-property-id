<template>
<p>
  <div :key="propertyId.id" v-for="propertyId in propertyIds">
    <PropertyID :propertyId="propertyId"  />
  </div>
</p>
</template>

<script>
import PropertyID from './PropertyID'

export default {
  name: 'PropertyIDList',
  props: {
    propertyIds: Array,
  },
  components: {
    PropertyID,
  }
}
</script>
