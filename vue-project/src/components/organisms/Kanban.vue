<script setup lang="ts">
	import TasksList from '@/components/organisms/TasksList.vue'
	import { TODO, IN_PROGRESS, DONE } from '@/constants'
	import NewTask from '@/components/organisms/NewTask.vue'
	import { useKanbanStore } from '@/stores/kanban'
	const kanbanStore = useKanbanStore()
	const todo = kanbanStore.todoRef
	const inProgress = kanbanStore.inProgressRef
	const done = kanbanStore.doneRef
</script>
<template>
	<NewTask/>
	<div class="d-flex gap1">
		<TasksList taskName="TODO" :taskList="todo"/>
		<TasksList taskName="IN_PROGRESS" :taskList="inProgress"/>
		<TasksList taskName="DONE" :taskList="done"/>
	</div>
</template>