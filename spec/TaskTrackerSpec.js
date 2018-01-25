describe('should correctly add items',function () {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '../TaskTracker/';
    loadFixtures('index.html');
  });

  it("should load existing task into page", function(){
    expect($(".task-item").length).toBe(7);
  });

  it("should add a task on existing task list when submit is clicked", function(){
    $("#name").val("hello");
    $("#date").val("12/12/2011")
    $("#assigned").val("world")
    $( "#taskForm" ).submit();
    expect(taskTrackerApp.getExistingTask().length).toBe(8);
    expect($(".task-item").length).toBe(8);
  });

  it("should not add task when empty task is entered", function(){

    spyOn(window, 'alert');
    $("#name").val("");
    $( "#taskForm" ).submit();
    expect(window.alert).toHaveBeenCalledWith('Enter task name');
    expect(taskTrackerApp.getExistingTask().length).toBe(7);
  });

});
