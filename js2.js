/*// function constructor
var Person = function (name,age,birthOfdate,country){
   this.name=name;
   this.age=age;
   this.birthOfdate=birthOfdate;
   this.country=country;


}

Person.prototype.newfunction=function()
{

	console.log("your name is=" + this.name +"and your age  is="+this.age +" your birthOfdate is ="+this.birthOfdate +" your country is ="+ this.country);
}

var tushar=new Person("tushar",23,1995,"bangladesh");

tushar.newfunction();

// prototype chain ............
// object create ........

var tushar =  {
	calculateAge:function (argument) {
		console.log("tushar your age is ="+this.year);
	}
}

var adnan=Object.create(tushar);
adnan.name="tushar";
adnan.Age=23;
// another way we write ...

var tu=Object.create(tushar,{

     name:{value:"tuhsafdsgsdg"}
});


//primitives and object .....
//  function ............
 var years=[1995,1998,1887,2000,2001,1773,1885];

 function arrayCal(arr,fun){
 	var newArray=[];
 	
 	for(var i=0;i<arr.length;i++){
 		newArray.push(fun(arr[i]));
 	}
 	return newArray;
 }
 
 function calculateAge(ele){
 	return 2018-ele;
 }

 function isFullAge(element){
 	return element>=18;
 }

 var ageee=arrayCal(years,calculateAge);
 console.log(ageee);

 var isFull=arrayCal(ageee,isFullAge);
 console.log(isFull);


// returning function ..........

function jonInterviewQuestion(job){
	if(job==="teacher"){
		return function(name)
	}
}
 */

// immediately invoked function ......
// very important topic ,,,,,,,,closure 
//bind ,call,apply...



