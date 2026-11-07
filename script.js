//your JS code here. If required.
const ageInput=document.getElementById('age')
const nameInput=document.getElementById('name')
const btn=document.getElementById('btn')
btn.addEventListener('click',function(){
	const age=ageInput.value;
	const name=nameInput.value;
	if(!age||!name){
		alert("Please enter valid details.");
		return;
	}
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if (age>18){
				resolve(name);
			}else{
				return(name);
			}
		},4000);
	});
	promise
		.then((name)=>{
			alert(`Welcome,${name}.You can vote.`);
		})
	.catch((name)=>{
		alert(`oh sorry ${name}. You aren,t old enough.`);
	});
});