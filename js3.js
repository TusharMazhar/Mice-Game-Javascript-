function myFunction(){
var input_num;
var value_taker=0;
// ......................
var arra_name=[];
var arra_per_person_bazer=[];
var arra_per_person_meal=[];
//........................
var Electicity_Bill;
var gas_bill;
var service_bill;
var others_bill;
//..........................
var sum_of_total_bazer=0;
//.........................
var sum_of_total_meal=0;
//.........................
var per_meal_cost;

//........................
var per_person_meal_cost_array=[];

//........................
var first_substract=[];
//..........................
var extra_bill_per_person;

//............................
var per_person_total_amount=[];

//..........................


function input1(){
	 input_num=prompt(" Enter total Mess Member = ")
     for(var i=0;i<input_num;i++){
        value_taker++;

     	var name=prompt(" Input "+ value_taker +" Name ")
     	arra_name[i]=name;

     	var per_person_bazer=parseFloat(prompt( arra_name[i]  +", your Total Bazer cost  "));
     	arra_per_person_bazer[i]=per_person_bazer;

     	var per_person_meal=parseFloat(prompt(arra_name[i]  +" , your Total Meal"));
     	arra_per_person_meal[i]=per_person_meal;
     	          
        }
      input2();
      
}

function input2(){
	  
      
          var input_elect=parseFloat(prompt(" Enter Electicity Bill = "));
          Electicity_Bill=input_elect;
          var input_gas=parseFloat(prompt(" Enter Gas Bill = "));
          gas_bill=input_gas;
          var input_service=parseFloat(prompt(" Enter Service Charge Bill = "));
          service_bill=input_service;
          var input_others=parseFloat(prompt(" Enter others Bill = "));
          others_bill=input_others;

          sum_bazer();
      
}


function sum_bazer(){

        for(var i=0;i<input_num;i++){
              sum_of_total_bazer+=arra_per_person_bazer[i];
        }

   sum_meal();
}

function sum_meal(){

        for(var i=0;i<input_num;i++){
              sum_of_total_meal+=arra_per_person_meal[i];
        }
   total_bazer_divide_by_total_meal();
}

 function total_bazer_divide_by_total_meal(){

       per_meal_cost=sum_of_total_bazer/sum_of_total_meal;
    per_person_meal_cost_total();
 }

 function per_person_meal_cost_total(){
          
          for(var i=0;i<input_num;i++){
          	per_person_meal_cost_array[i]=per_meal_cost*arra_per_person_meal[i];
          }
        
     total_bazer_compare_with_per_person_meal_cost_array();
 }

 function total_bazer_compare_with_per_person_meal_cost_array(){
        for(var i=0;i<input_num;i++){
             if(arra_per_person_bazer[i]>=per_person_meal_cost_array[i]){
                  first_substract[i]=arra_per_person_bazer[i]-per_person_meal_cost_array[i];
             }else{
                 first_substract[i]=per_person_meal_cost_array[i]-arra_per_person_bazer[i];
             }

        }
     extra_bill();
 }

 function extra_bill(){
       extra_bill_per_person=(Electicity_Bill+gas_bill+service_bill+others_bill)/input_num;
      show_output();
 }

 function show_output(){

 	    for(var i=0;i<input_num;i++){
 	    	if(arra_per_person_bazer[i]>=per_person_meal_cost_array[i]){
                 per_person_total_amount[i]=extra_bill_per_person-first_substract[i];
 	    	}else if(arra_per_person_bazer[i]<per_person_meal_cost_array[i]){
 	    		per_person_total_amount[i]=extra_bill_per_person+first_substract[i];
 	    	}
 	    }
    result();
 }
function result(){
          for(var i=0;i<input_num;i++){

		    if (per_person_total_amount[i]>0){
          alert(arra_name[i]+" , you will give "+ per_person_total_amount[i] + " taka");
 	    		console.log(arra_name[i]+" , you will give "+ per_person_total_amount[i] + " taka");
 	    	}else{
           alert(arra_name[i]+" , you will get "+ per_person_total_amount[i] + " taka");
 	    		console.log(arra_name[i]+" , you will get "+ per_person_total_amount[i] + " taka");
 	    	}

 	    } 
       alert("Here is The Per Meal Cost ="+ per_meal_cost);
       console.log("Here is The Per Meal Cost ="+ per_meal_cost);
}

 input1();


}



function myFunction2(){
    var take=parseInt(prompt('how many subject u have  taken this semester ?='));
     var array=0;
     var arrayy=0;
    for (var i =1; i<=take; i++) {
       
       
         var x=parseFloat(prompt(i +' Enter Ur Credit here='));
         array+=x;
         var y=parseFloat(prompt(i +' Enter Ur cgpa here here='));
         arrayy+=y*x;
         var k=prompt('Do u want to continue ? Type yes or no');
         if(k==='yes'){
           continue;
         }
         if(k==='no'){
           break;
         }
       
      
    }
    var result=arrayy/ array;
    alert('Your cgpa is ='+result +' and '+ array+ '  credit  has done');
     

}


