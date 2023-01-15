<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>
              isDone
            </th>
            <th>
              Task
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.name ">
            <td>
              <input type="checkbox" :checked="task.isDone" @input.prevent="checkTaskDone(task)" />
                {{ task.isDone }}
            </td>
            <td>
                {{ task.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>

  let tasks = ref<Task[]>();
  tasks.value = (await $fetch("/api/notion")) ;

  const checkTaskDone = async (task: Task) => {
    const res = await $fetch("/api/notion", { method: 'post', body: { id: task.id, value: !task.isDone } });
    if (res) {
      task.isDone = !task.isDone;
    }
  }
  </script>
  