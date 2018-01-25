var taskTrackerApp = (function (){

  var existingTasks = [
  	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
  	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
  	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
  	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
  	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
  	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
  	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
  ]

  function Task (name, date, assigned){
    this.name = name;
    this.date = date;
    this.assigned = assigned;
  }

  var getTaskText = function (task){
    return '<tr class="task-item"><td class="task-name">' + task.name + '</td><td class="task-date">'+ task.date + '</td><td class="task-assigned">' + task.assigned + '</td></tr>';
  }

  var getCurrentTask = function (){
    var name = $("#name").val();
    var date = $("#date").val();
    var assigned = $("#assigned").val();
    return new Task(name, date, assigned);
  }

  var isValidDate = function(date){
		var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
		return regex.test(date);
  }

  var validateTask = function(currentTask){
    var isValid = true;
    if(!currentTask.name){
      alert("Enter task name");
      return false;
    }
    if(!currentTask.date || !isValidDate(currentTask.date)){
      alert("Enter in a valid date format");
      return false;
    }

    if(!currentTask.assigned){
      alert("Enter assigned to field");
      return false;
    }
    return isValid;
  }

  var loadExistingTasks = function (existingTasks){
    existingTasks.forEach(function(task){
      $(".task-list").prepend(getTaskText(task));
    })
  }

  var addTask = function (task){
		existingTasks.push({"name":task.name,"date": task.date, "assigned": task.assigned});
    $(".task-list").prepend(getTaskText(task));
  }

  var submitTask = function(event){
    event.preventDefault();
    var task = getCurrentTask();
    if(validateTask(task)){
      task.date = task.date.replace(/-/g,'/');
      addTask(task);
      console.log(task);
      this.reset();
    }
  }

  var bindFunctions = function() {
    $("#taskForm").on("submit", submitTask);
  }
  var init = function() {
    loadExistingTasks(existingTasks)
    bindFunctions();
  };
  return {
    init:init,
		getExistingTask: function(){
			return existingTasks;
		}
  }
})();
taskTrackerApp.init();
