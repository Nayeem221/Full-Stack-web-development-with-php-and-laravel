// const student={
//     name:'nayeem',
//     id:2232323,
//     password:23123123,
//     department:'cse',
// }
// student.dept='cseeeeee'     //adding department in the object   property/or key=name,id,password,department  value='nayeem ,23232323,cse etc
// console.log(student);     //order doesnt matter in object
// delete student.id 
// const student = {
//     // Properties
//     firstName: "John",
//     lastName: "Doe",
//     age: 21,
//     major: "Computer Science",
//     // Nested object for contact information
//     contactInfo: {
//       email: "john.doe@example.com",
//       phone: "123-456-7890",
//     },
//     // Nested object for address
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "Anystate",
//       zip: "12345",
//     }
// }

    //for in loop
    // for(let key in student){
    //     console.log(`${key}:${student[key]}`);
    // }
    // Object.keys(student).forEach((key)=>{           //for each loop
    //     console.log(`${key}`);
    // })
    
    // })

    // for(let [key,value] of  Object.entries(student)){     //for of
    //   console.log(`${key}:${value}`);
    // }
    // const jsonstring=JSON.stringify(student)
    // console.log(jsonstring); //object to json          //parse json to object
  

    // const student={
    //   name:nayeem,
    //   age:26,      

    // }
    // const student2={
    //   name:ridom,
    //   age:27,      

    // }
    // const student3={
    //   name:ridoy,
    //   age:25,      

    // }
       //javascript constructor function 
    function Student(name,age,batch){
      this.name='name'
      this.age='age'
      this.batch='batch'
    }
    const student1=new Student('nayeem',5,'wdb2323')
    const student2=new Student('nayeem',5,'wdb2323')
    console.log(student1);
    console.log(student2);