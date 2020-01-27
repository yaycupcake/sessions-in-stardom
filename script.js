const users = [
{
name: "Okkefak",
imageUrl: "https://pbs.twimg.com/profile_images/1176581789936230400/UiO4onXv_400x400.jpg",
profileUrl: "https://twitter.com/Okkefak"
},
{
name: "EvernightStudio",
imageUrl: "https://pbs.twimg.com/profile_images/1219031548273446912/-DgcLHuW_400x400.jpg",
profileUrl: "https://twitter.com/EvernightStudio"
}
]

const contributors = document.querySelector('.contributors');


for (let i = 0; i < users.length; i++) {
	console.log(users[i].name);
	let nameNode = document.createElement('span');
	nameNode.className += "name";
	nameNode.textContent = users[i].name;
	contributors.appendChild(nameNode);
}

