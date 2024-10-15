<script setup>
	import Task from '@/components/atoms/Task.vue'
	
	const props = defineProps({
		taskName: String,
		taskList: Object
	})

</script>
<template>
	<div class="flex-col gap05">
		<h1>{{taskName}}</h1>
		<div class="border-black-1 p1">
			<div v-for="(task, index) in taskList" :key="index">
				<Task :task/>
			</div>
		</div>
	</div>
</template>