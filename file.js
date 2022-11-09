const file = require("fs")

//const { fstat } = require("fs")

//const quote="Live more, Worry less 😄"

//var numbers=(num)=>{
//for(i=0;i<num;i++){
//file.writeFile(`./backup/text-${i+1}.html`,quote,(err)=>{
  //  console.log("comleted")
//})
//}
//}
//const [ , ,num]=process.argv;
//console.log(numbers(+num))

const quote2 ="Gokul"
file.appendFile("./file.html","\n" +quote2,(err)=>{
    console.log("completed")
})