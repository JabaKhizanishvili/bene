(()=>{function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.addEventListener("DOMContentLoaded",(function(){var t,n=document.getElementById("external-events-list");new FullCalendar.Draggable(n,{itemSelector:".fc-event",eventData:function(e){return{title:e.innerText.trim()}}});var r=document.getElementById("calendar"),a=new FullCalendar.Calendar(r,(e(t={headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},navLinks:!0,businessHours:!0,editable:!0,selectable:!0,selectMirror:!0,droppable:!0,drop:function(e){document.getElementById("drop-remove").checked&&e.draggedEl.parentNode.removeChild(e.draggedEl)},select:function(e){var t=prompt("Event Title:");t&&a.addEvent({title:t,start:e.start,end:e.end,allDay:e.allDay}),a.unselect()},eventClick:function(e){confirm("Are you sure you want to delete this event?")&&e.event.remove()}},"editable",!0),e(t,"dayMaxEvents",!0),e(t,"events",[{title:"Business Lunch",start:"2020-11-03T13:00:00",constraint:"businessHours"},{title:"Meeting",start:"2020-11-13T11:00:00",constraint:"availableForMeeting",color:"#257e4a"},{title:"Conference",start:"2020-11-18",end:"2020-10-20"},{title:"Party",start:"2020-11-29T20:00:00"},{groupId:"availableForMeeting",start:"2020-11-11T10:00:00",end:"2020-11-11T16:00:00",display:"background"},{groupId:"availableForMeeting",start:"2020-11-13T10:00:00",end:"2020-11-13T16:00:00",display:"background"},{start:"2020-11-24",end:"2020-11-28",overlap:!1,display:"background",color:"#f6f6f9"},{start:"2020-11-06",end:"2020-11-08",overlap:!1,display:"background",color:"#f6f6f9"}]),t));a.render()}))})();