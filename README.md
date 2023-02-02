# employeeManagement

## General Info
Employee Management App.


### Main features 

 - Save user to the DB
 - Update user data
 - Delete user
 - Save task for user
 - Edit task for user
 - Delete task for user
 - get users data with the tasks, tasks should be grouped by status of task. <br>
 EX:[
  {
    _id: "7827187hd87h187dada",
    name: "Mohammad Ahmad",
    salary: 1000,
    tasks: [
      {
        status: "completed",
        tasks: [
          {
            _id: "asdasoias09asd",
            title: "1st task",
            description: "1st description",
            status: "completed"
          },
          {
            _id: "asda9898s09asd",
            title: "2nd task",
            description: "2nd description",
            status: "completed"
          }
        ]
      },
      {
        status: "pending",
        tasks: [
          {
            _id: "as3333oias09asd",
            title: "1st task",
            description: "1st description",
            status: "pending"
          },
          {
            _id: "1111a9898s09asd",
            title: "2nd task",
            description: "2nd description",
            status: "pending"
          }
        ]
      }
    ]
  }
]



### Languages & Frameworks

Back-end : Node js <br>
Database : MongoDB


