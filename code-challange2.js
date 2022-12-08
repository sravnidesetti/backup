
var uname=document.getElementById("inputname").value;
var upassword=document.getElementById("inputpassword").value;
 var usernames=["123456","567890"];
 var userpasswords=["1234","5678"];
 var balances=[10000,15000];
 var transaction_list=[];
 var transaction_display="";
 var type,amount;
 var index;
    function  details(){
	       document.getElementsByClassName("container").style.display="block";
	       document.getElementsByClassName("log").style.diaplay="none";
	       document.getElementsByClassName("register").style.diaplay="none";
		   check_login();
}
    function check_login()
	{
		if(usernames.includes(uname))
		{
			index=usernames.indexOf(uname);
			if(userpasswords.includes(upassword) && index==userpasswords.indexOf(upassword))
			{
			document.querySelector(".btn").addEventListener("click" , process);
			}
		}
		alert("Invalid details");
	}
	function process()
	{
		 document.getElementsByClassName("container").style.display="none";
		 document.querySelector("#b").addEventListener("click" , check_balance);
		 document.querySelector("#d").addEventListener("click" , deposists);
		 document.querySelector("#w").addEventListener("click" , withdraws);
		  document.querySelector("#t").addEventListener("click" , transaction);
	}	 
    function check_balance()
	{
		alert(+balances[index]);
	}
	function withdraws()
	{	
	    document.querySelector("withdraw_model").style.display="block";
		withdraw_funds=document.querySelector("#winput").value;
		if(balances[index]<withdraw_funds)
		{
			document.querySelector("#wbtn").addEventListener("click",function()
			{
			alert("insufficient funds");
			});
		}
		else
		{
			balances[index] -= withdraw_funds;
			transaction_list.push({type:"withdraw", amount:+withdraw_funds});
			document.querySelector("#wbtn").addEventListener("click",function()
			{
			alert("withdraw completed")
			});
	   }
	}
	function deposits()
	{
	   document.querySelector("deposit_model").style.display="block";
	   deposit_funds=document.querySelector("#dinput").value;
	   balances[index] += deposit_funds;
	   transaction_list.push({type:"deposit", amount:+deposit_funds});
	   document.querySelector("#dbtn").addEventListener("click",function()
			{
			alert("deposit completed")
			}); 
	}
	function transaction()
	{ 
	for(var i=0;i<transaction_list.length;i++)
	{
      transaction_display +=	(`${i+1}-${transaction_list[i].type}-${transaction_list[i].amount}`);
	}	
	alert(transaction_display);
	}