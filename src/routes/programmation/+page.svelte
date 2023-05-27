<script>
	/** @type {import('./$types').PageData} */
	export let data;
	
	
	/* Page variables */
	let selectedEmpty = {
		date : null,
		prop : null
	}
	
	let selected = {
		date : null,
		prop : null
	}
	
	let toRemoveFromProps = []
	let addedToProgram = []
	
	/* -------------- */
	
	
	/* CALENDAR Setup */
	
	import Calendar from '@event-calendar/core';
	import DayGrid from '@event-calendar/day-grid'
	import Interaction from '@event-calendar/interaction'
	let cal;
	let selectedSlot;
	let plugins = [DayGrid, Interaction];
	let options = {
		view: 'dayGridMonth',
		events: data.events,
		editable : true,
		selectable: true,
		timeZone : 'fr-FR',
		dateClick: function(info) {
			const date = new Date(info.date.getTime() + 2 * 3600 * 1000)
			selected.date = {
				date : date,
				str : info.dateStr
			}
			
			if (selectedSlot) {
			selectedSlot.style.backgroundColor = null;
			}
			selectedSlot = info.dayEl
			selectedSlot.style.backgroundColor = 'red';
		},
		
		backgroundColor : "rgb(40, 20, 50)",
		selectBackgroundColor : "rgb(220, 150, 250)",
		locale : 'fr-FR'
	};
	
	/* ------------ */
	
	//Selected date HL
	
	//Add event and store into toAddList
	
	function addEvent() {
		
		addedToProgram.push(selected)
		data.propositions = data.propositions.filter(d => d != selected.prop)
		cal.addEvent({
			start : selected.date.date,
			end : selected.date.date,
			allDay : true,
			title : selected.prop.title,
			backgroundColor : "rgb(200, 100, 100)"
		})
		selected = {...selectedEmpty}
		
	}
	//Validate
	
	async function validate() {
		const formattedEvents = addedToProgram.map((d) => {
			return {
				title : d.prop.title,
				theme : d.prop.theme,
				publish_date : d.date.date,
				targetLength : d.prop.targetLength
			}
		})
		console.log(formattedEvents)
		const createResponse = await fetch('/api/poeme', {
			method: 'PUT',
			body: JSON.stringify(formattedEvents),
			headers: {
				'content-type': 'application/json'
			}
		})
		
		if (createResponse.status === 200) {
			const idsToDelete = addedToProgram.map((d) => d.prop.id)
			const deleteReponse = await fetch('/api/poeme', {
				method: 'DELETE',
				body: JSON.stringify(idsToDelete),
				headers: {
					'content-type': 'application/json'
				}
			})
			if (deleteReponse.status === 200) {
				addedToProgram = []
			}
		}
		
		for (let event of cal.getEvents()) {
			event.backgroundColor = "rgb(40, 20, 50)"
			cal.updateEvent({...event})
		}
		cal.refetchEvents()
	}
	
	function cancel() {
		for (let prop of addedToProgram) {
			data.propositions.push(prop)
		}
		addedToProgram = []
		data.propositions = data.propositions
		
	}
	
	
</script>


{JSON.stringify(selected)}
<div class="container">
	<Calendar bind:this={cal} class="calendar"  {options} {plugins}/>
</div>
<div class="section">
	<div class="container">
		<div class="box has-background-grey" id="propositions">
			<ul>
				{#each data.propositions as proposition}
					<li on:click={() => selected.prop = proposition}
					class:selected={selected.prop === proposition}>
						{proposition.title}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<div class="section">
	{#if selected.prop && selected.date}
	<button class="button" on:click={() => addEvent()}>
		Programmer {selected.prop.title} pour le {selected.date.str}
	</button>
	{/if}
	
	{#if addedToProgram}
	<button class="button is-success" on:click={validate}>
		Valider la programmation
	</button>
	<button class="button is-danger" on:click={cancel}>
		Annuler la programmation
	</button>
	{/if}
</div>

<style>

li {
	background-color: white;
	padding : 20px;
	border-radius: 20px;
	font-size: 20px;
}

.selected {
	color : blue;
	font-weight: bold;
}

</style>
