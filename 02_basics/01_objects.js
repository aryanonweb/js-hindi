// const tinderUser =new Object() //singleton object 

const tinderUser={} //non singleton object

tinderUser.id ="123abc"

tinderUser.name="Aryan"
tinderUser.isLoogedIn=false

// console.log(tinderUser);

const regularUser= {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aryan",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname)

const obj1 = {1: "a",2:"b"}
const obj2= {3:"a",4:"b"}

// const obj3= Object.assign({},obj1, obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoogedIn'));


//destructure of objects
const course= {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Aryan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//API 

{
    name: "Aryan ",
    coursename: "js in hindi",
    price: "free"
}