
let h1= document.getElementById("h1");
let button1= document.getElementById("button1");
button1.setAttribute("class", "toto")

console.log(button1);

// Example POST method implementation:
async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function GetServerData(hostname = "") {
	getData("https://api.mcsrvstat.us/3/" + hostname).then((data) => {
	  console.log(data); // JSON data parsed by `data.json()` call
	  document.getElementById('name').innerHTML = JSON.stringify(data.hostname);
	  document.getElementById('online').innerHTML = JSON.stringify(data.online);
	  document.getElementById('version').innerHTML = JSON.stringify(data.version)
	  
	  if(data.online){
		  document.getElementById('online').innerHTML = "En ligne";
		  document.getElementById('jcnt').innerHTML = JSON.stringify(data.players.online);
	  }
	  else{
			  document.getElementById('online').innerHTML = "Hors ligne";
	  }
	  
	  if(data.icon) {
		  document.getElementById("icon").setAttribute("src", data.icon);
	  } else {
		  document.getElementById('icon').setAttribute("class", "hidden");
	  }
	  
		


	});
}
const form = document.querySelector('form');

    // Quand on submit
	
form.addEventListener("submit", (event) => {
	document.getElementById('online').innerHTML = ""
	document.getElementById('name').innerHTML = ""
	document.getElementById('jcnt').innerHTML = 0
	document.getElementById('icon').removeAttribute("class");
	document.getElementById('version').innerHTML = ""
	

	// On empêche le comportement par défaut
	event.preventDefault();
	console.log("Il n’y a pas eu de rechargement de page");
	
	
	const ipsearch = document.getElementById("ipsearch").value;
	console.log(ipsearch);

	GetServerData(ipsearch)
	
});

const button2 = document.getElementById('buttonSearch')



button2.addEventListener("click", (event) => {
	document.getElementById('online').innerHTML = ""
	document.getElementById('name').innerHTML = ""
	document.getElementById('jcnt').innerHTML = 0
	document.getElementById('version').innerHTML = ""
	document.getElementById('icon').removeAttribute("class");

	// On empêche le comportement par défaut
	event.preventDefault();
	console.log("Il n’y a pas eu de rechargement de page");
	
	
	const ipsearch = document.getElementById("ipsearch").value;
	console.log(ipsearch);

	GetServerData(ipsearch)
	
});
	