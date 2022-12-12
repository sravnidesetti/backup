
 var acccountholder=["Sravani","Ramya"]
 var usernames=["12","34"];
 var userpasswords=["3","5"];
 var balances=[10000,15000];
 var transaction_list=[[],[]];
 var transaction_display="";
 var type,amount;
 var index,bal,colour;
 var uname;
 var upassword;
 
 
 function  details(){
       document.querySelector(".container").style.display="block";
       document.querySelector(".log").style.display="none";
       document.querySelector(".register").style.display="none";	  
 }

 function check_login(){
	 
	   uname=document.getElementById("uname").value;
	   upassword=document.getElementById("upassword").value;
           if(usernames.indexOf(uname)==-1) {	         
		document.querySelector("#lalert").style.display="block";
		document.querySelector("#lalert").style.backgroundColor="red";
		document.querySelector("#lmessage").textContent="Invalid account number";
            }
           else{ 
		if(usernames.indexOf(uname)==userpasswords.indexOf(upassword))
		{			
			index=usernames.indexOf(uname);
			document.querySelector("#lalert").style.display="none";
			document.querySelector(".container").style.display="none";
			document.querySelector(".body1").style.display="block";
			document.querySelector("#acccountholder").textContent=acccountholder[index];
			document.querySelector("#balance").textContent=balances[index];	 
	        }
	        else{
			document.querySelector("#lalert").style.display="block";
			document.querySelector("#lalert").style.backgroundColor="red";
			document.querySelector("#lmessage").textContent="Invalid details";
		    }
             }

}
	

function withdraws(){	
	   document.querySelector(".body1").style.display="none";
	   document.querySelector(".withdraw_model").style.display="block";
		
}
	
	   
 function deposits(){
	   document.querySelector(".deposit_model").style.display="block";
	   document.querySelector(".body1").style.display="none";
	  
	}
	
	
 function transaction(types){ 
       document.querySelector(".transaction_model").style.display="block";
       document.querySelector(".body1").style.display="none";
       transaction_display="";        
       if(types=="Wt"){
	   for( var i=0;i< transaction_list[index].length;i++) {
	   		     
		  if(transaction_list[index][i].type=="withdraw"){
				 transaction_display +=`<tr style="background-color:red">
						        <td>${i+1}</td>
						        <td>${transaction_list[index][i].type}</td>
						        <td>${transaction_list[index][i].amount}</td>
						        <td>${transaction_list[index][i].bal}</td>
						   </tr>`	  									  
         }			
	 }  
         }
	else if(types=="Dt"){
	
	   for( var i=0;i< transaction_list[index].length;i++) {
	   		     
	   	 if(transaction_list[index][i].type=="deposit"){
	   	 
		   transaction_display +=`<tr style="background-color:green">
					 <td>${i+1}</td>
					 <td>${transaction_list[index][i].type}</td>
				         <td>${transaction_list[index][i].amount}</td>
				         <td>${transaction_list[index][i].bal}</td>
													  </tr>`;   									  
		 }
				      
		}		         
		}
            else{	   
	       for(var i=0;i< transaction_list[index].length;i++)
	       {		     
		   colour=(transaction_list[index][i].type=="withdraw")?"red":"green";
		    transaction_display +=`<tr style="background-color:${colour}">
					   <td>${i+1}</td>
					   <td>${transaction_list[index][i].type}</td>
					   <td>${transaction_list[index][i].amount}</td>
					   <td>${transaction_list[index][i].bal}</td>
													  </tr>`;
	       }
	       }
	     document.querySelector("#tablebody").innerHTML=transaction_display;	 
	}	
	
 function reset ()
	{
		  document.querySelector(".log").style.display="block";
	      document.querySelector(".register").style.display="block";
		  document.querySelector(".body1").style.display="none";		 
	}
 document.querySelector(".btn").addEventListener("click",check_login);

 document.querySelector("#cancel1").addEventListener("click",function(){
				document.querySelector(".withdraw_model").style.display="none";
			   document.querySelector(".body1").style.display="block";
			   document.querySelector("#walert").style.display="none";
	   });
	   
 document.querySelector("#wbtn").addEventListener("click",function(){
		   
					withdraw_funds = parseInt(document.querySelector(".winput").value);
					if(isNaN(withdraw_funds))
					{
						document.querySelector("#walert").style.display="block";
						document.querySelector("#walert").style.backgroundColor="red";
						document.querySelector("#wmessage").textContent="Please enter valid amount";
					}
					else if(balances[index]<withdraw_funds)
					{
						document.querySelector("#walert").style.display="block";
						document.querySelector("#walert").style.backgroundColor="red";
						document.querySelector("#wmessage").textContent="Insuffient funds";
					}
					else if(balances[index]>=withdraw_funds)
					{
						balances[index] -= withdraw_funds;
						transaction_list[index].push({type:"withdraw", amount:withdraw_funds,bal:balances[index]});
						
						document.querySelector("#walert").style.display="block";
						document.querySelector("#walert").style.backgroundColor="green";
						document.querySelector("#wmessage").textContent=`${withdraw_funds} withdraw successfully completed`;
						document.querySelector("#balance").textContent=balances[index];
					}
	   });
	   
  document.querySelector("#cancel2").addEventListener("click",function(){ 
	
	   document.querySelector(".deposit_model").style.display="none";
	   document.querySelector(".body1").style.display="block";
	   document.querySelector("#dalert").style.display="none";
	   });
	   
	   
  document.querySelector("#dbtn").addEventListener("click",function(){

		deposit_funds=parseInt(document.querySelector(".dinput").value);
		if(isNaN(deposit_funds))
		{
		document.querySelector("#dalert").style.display="block";
		document.querySelector("#dalert").style.backgroundColor="red";
		document.querySelector("#dmessage").textContent="Please enter valid amount";
		}
		else{
		balances[index] += deposit_funds;
		transaction_list[index].push({type:"deposit", amount:deposit_funds,bal:balances[index]});
		document.querySelector("#balance").textContent=balances[index];
		document.querySelector("#dalert").style.display="block";
		document.querySelector("#dalert").style.backgroundColor="green";
		document.querySelector("#dmessage").textContent=`${deposit_funds} deposit successfully completed`;
		}
}); 

 document.querySelector("#cancel3").addEventListener("click",function(){
		   document.querySelector(".transaction_model").style.display="none";
		  document.querySelector(".body1").style.display="block";
});
