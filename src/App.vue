<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template> -->


<script setup>
import { ref, onMounted } from 'vue'

import { db } from './firebase'

import {
  ref as dbRef,
  push,
  set,
  get,
  remove
} from 'firebase/database'

const settings = ref([])

const name = ref('')
const ip = ref('')

async function loadData() {

  const snapshot =
    await get(dbRef(db, 'settings'))

  if(snapshot.exists()){

    settings.value =
      Object.entries(snapshot.val())
      .map(([key,value])=>({
        id:key,
        ...value
      }))
  }
}

async function addData(){

  const newRef =
    push(dbRef(db,'settings'))

  await set(newRef,{
    name:name.value,
    ip:ip.value
  })

  name.value=''
  ip.value=''

  loadData()
}

async function deleteData(id){

  await remove(
    dbRef(db,`settings/${id}`)
  )

  loadData()
}

onMounted(()=>{
  loadData()
})
</script>

<template>

<h2>Firebase CRUD</h2>

<input
  v-model="name"
  placeholder="Name"
/>

<input
  v-model="ip"
  placeholder="IP"
/>

<button @click="addData">
  Save
</button>

<hr>

<table border="1">

<tr>
  <th>Name</th>
  <th>IP</th>
  <th>Action</th>
</tr>

<tr
  v-for="item in settings"
  :key="item.id"
>
  <td>{{ item.name }}</td>
  <td>{{ item.ip }}</td>

  <td>
    <button
      @click="deleteData(item.id)"
    >
      Delete
    </button>
  </td>

</tr>

</table>

</template>