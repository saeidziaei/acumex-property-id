<template>
  <div class="propid">
    <h3>
      {{ propertyId.name }}
    </h3>
    <p>{{ propertyId.landId }}</p>
  </div>
</template>

<script>
export default {
  name: 'PropertyID',
  props: {
    propertyId: Object,
  },
}
</script>

<style scope>
.fas {
  color: red;
}

.propid {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-left: 5px solid green;
}

.propid h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
