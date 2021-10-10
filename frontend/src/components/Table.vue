<template>
  <table class="tg">
    <thead>
      <tr>
        <td>No</td>
        <td>Nama Peserta</td>
        <td>Progress Kelas MPDK</td>
        <td>Progress Kelas BFAA</td>
      </tr>
      <tr v-for="item in a" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.progress1 }}</td>
        <td>{{ item.progress2 }}</td>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      a: [
        {
          id: 1,
          name: "Jova",
          progress1: 90,
          progress2: 90
        },
        {
          id: 2,
          name: "Andreas",
          progress1: 95,
          progress2: 95
        },
        {
          id: 3,
          name: "Riski",
          progress1: 100,
          progress2: 100
        },
      ]
    }
  }
};
</script>

<style scoped>
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
