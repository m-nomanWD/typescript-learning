// // const personOne = {id:12,name:'hello world'}
// // const personTwo = {id:12,name:'hello world'}
// // const personThree = {id:12}
// // const todoListOF:{id: number | string, name?: string}[] = [personOne,personTwo,personThree]

// // for(let person of todoListOF){
// // console.log(person)
// // }

// function greetings(name:string | number ): string | number{
//    if(typeof name === 'string'){
//     // console.log('helo form string')
//     return name
//    }
//    else{
//     // console.log('hello form number')
//     return name
//    }
// }
// const nameFun = greetings('john')
// const nameNum = greetings(25)
// console.log(nameFun)
// console.log(nameNum)

// const nameArray:string []= ['Muhammad','Ali', 'Abudullah','Noman']

// function isNameThere(name:string): boolean{
//     return nameArray.includes(name)
// }
// const result:boolean = isNameThere('Noman')
// console.log(result)
// function calculte(price:number,discount?:number ):number{
//     return price - (discount || 0)

// }
// function calculteScore(points:number, pal:number = 0):number{
//     return points - pal
// }

// let result = calculte(120,20)
// console.log(result)
//  result = calculte(120)
// console.log(result)
//  result = calculteScore(120,10)
// console.log(result)
//  result = calculteScore(120)
// console.log(result)
// function sum(msg:string,...numbers:number[]):string{
//     const dubled = numbers.map((num)=> num * 2)
//     console.log(dubled)

//     const sum = dubled.reduce((prev,curr)=> {
//         console.log(prev)
//         console.log(curr)
//       return prev + curr
//     },0)
//     return `${msg}${sum}`

// }
// const result = sum('The Sum is : ',1,2,3,4,5,6)
// console.log(result)

// function processInput(input:string | number): void{
//     if(typeof input === 'string'){
//         console.log(input.toUpperCase())
//     }
//     if(typeof input === 'number'){
//         console.log(input * 2)
//     }
// }
// processInput('Hello from String')
// processInput(45)
// function createEmp({id}:{id:number}):{id:number;isActive:boolean}{
//     return {id,isActive: id % 2 === 0}

// }
// let emp = createEmp({id:20})
// console.log(emp)
// emp = createEmp({id:19});console.log(emp)

// function createStd(std:{name:string;marks:number}): string{
//     const {name,marks} = std
//     return `welcome to the resutl ${name.toUpperCase()} and your marks is : ${marks}`

// }
// const student = {name:'Muhammad', marks:250}
// const result = createStd(student)
// console.log(result)

// function dataProcess(input:string | number, config:{reverse:boolean} = {reverse:false}){
//     if(typeof input === 'number'){
//         return input * input
//     }
//     else if(typeof input === 'string' && config.reverse === true){
//         const newString = input.split("").reverse().join("")
//         return newString.toUpperCase()
//     }
//     else
//     {
//         return input.toUpperCase()
//     }

// }
// let input:number = 20
// let strInput:string = 'Noman'
// let config:{reverse:boolean} = {reverse:true}
// let result = dataProcess(input)
// console.log(result)
// result = dataProcess(strInput)
// console.log(result)

// result = dataProcess(strInput,config)
// console.log(result)

// type User = {id:number,name:string,address?:string}
// type UserArray = User[]
// const user1:User = {id:1,name:"Noman",address:"Pakistan "}
// const userArray:UserArray = [user1]
// console.log(userArray)
// type Employee = {id:number,name:string,department:string}
// type Employees = Employee[]
// type Manager = {id:number,name:string,employees:Employees}
// type Staff = Employee | Manager

// const empArray:Employees = [
//   { id: 1, name: "Alice Johnson", department: "Engineering" },
//   { id: 2, name: "Bob Smith", department: "Marketing" },
//   { id: 3, name: "Carol White", department: "Human Resources" },
//   { id: 4, name: "David Brown", department: "Sales" },
//   { id: 5, name: "Eva Green", department: "Finance" },
// ]
// const manager1:Manager = {id:1,name:"Muhammad Noman",employees:empArray}

// function printStaffDetails(staff: Staff) : void{
//     'employees' in staff ?
//      console.log(`The person is manager and He/She manages total ${staff.employees.length} employees`) :
//      console.log(`The person is Employee and the Department name : ${staff.department}`)

// }
// printStaffDetails(manager1)
// printStaffDetails({id:1,name:"Noman",department:"Sales"})

// interface Computer {
// readonly id:number,
// brand:string,
// ram:number,
// storage?:number
// upgradeRam(size:number) : number,
// }

// const computer1 : Computer = {
//     id:1,
//     brand:'Dell',
//     ram:16,
//     upgradeRam(size){ return this.ram + size}
// }
// console.log(computer1.upgradeRam(16))

// function getEmployee(){
// const random = Math.random()
// if(random < 0.33){
//     return {name:'Noman'}
// }
// else if(random < 0.66){
//     return {name:'Noman',
//     dogName:'tomy'}
// }
// else{
//     return {
//         name:'Noman',
//         managePeople(){
//             console.log('managing People')
//         },
//         dalegateTasks(){
//             console.log('Dalegating Tasks...')
//         }
//     }
// }
// }
// interface Person{
//     name:string
// }
// interface DogOwner extends Person{
//     dogName:string
// }
// interface Manager extends Person{
//     managePeople():void,
//     dalegateTasks():void
// }
// const employee : Person | DogOwner | Manager = getEmployee()

// function isManager(emp : Person | DogOwner | Manager):emp is Manager{
//     return 'managePeople' in emp
// }
// if(isManager(employee)){
// employee.dalegateTasks()
// }

// enum UserRole {
//     Admin ='admin',
//     Manager ='manager',
//     Employee ='employee'
// }
// type User = {
//     id:number,
//     name:string,
//     role:UserRole,
//     contact:[string,number]
// }

// function createUser(user:User):User{
//     return user
// }

// const user1 = createUser({
//         id:1,
//         name:"Muhammad",
//         role:UserRole.Manager,
//         contact:['user@email.com', 923054299483]
//     })
// console.log(user1)

// type ValueType = string | number | boolean
// let random = Math.random()
// let value : ValueType = random < 0.33 ? 'string is here' : random < 0.66 ? 123.456 : true

// // function checkType(value:ValueType):ValueType{
// // if(typeof value === 'string'){
// //     return value.toLocaleLowerCase()
// // }
// // if(typeof value === 'number'){
// //     return value.toFixed(2)
// // }
// // else{
// //     return value
// // }
// // }
// // console.log(checkType(value))

// function checkType(value:ValueType):void{
// typeof value === 'string' ? console.log(value.toLowerCase()) : typeof value === 'number' ? console.log(value.toFixed(2)) : console.log(value)

// }
// checkType(value)
// type StringCheck = string |null |undefined
// function checkLength(str:StringCheck):void{
//     if(str){
//         console.log(str.length)
//     }
//     else{
//         console.log('string was not provided')
//     }
// }

// checkLength('hello for me')
// checkLength('')
// let pakistan;
// console.log(pakistan)
// checkLength(pakistan)

// try{
// // throw new Date
// throw 'the data is 06/aug/2024'
// }
// catch(date){
// if(date instanceof Date){
//     console.log(date)
// }
// else{
//         console.log(date)
//     }
// }

// function sumOf<T>(arg:T):T{
//     return arg
// }

// const result = sumOf<number>(12)
// console.log(result)
// const url:string = 'https://www.course-api.com/react-tours-project'
// type Tour = {
//     id:string,
//     name:string,
//     info:string,
//     image:string,
//     price:string
// }

// async function getData(url:string):Promise <Tour[]>{
//     try{
//   const response = await fetch(url)
//     if(!response.ok){
//         throw new Error(`the status is : ${response.status}`)
//     }
//     const data:Tour[]= await response.json()

//     return  data
// }
// catch(error){
//     if(error instanceof Error){
//         console.log(error.message)
//     }
//     console.log(`error in http request ${error}`)
//     return []

// }

// }

// // const data:Tour[] = await getData(url)
// // data.map((tour)=>{
// //     console.log(tour.name)
// // })
