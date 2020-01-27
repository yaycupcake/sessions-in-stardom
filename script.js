const users = [
{
name: "Okkefak",
imageUrl: "https://pbs.twimg.com/profile_images/1176581789936230400/UiO4onXv_400x400.jpg",
profileUrl: "https://twitter.com/Okkefak",
role: "Mod"
},
{
name: "EvernightStudio",
imageUrl: "https://pbs.twimg.com/profile_images/1219031548273446912/-DgcLHuW_400x400.jpg",
profileUrl: "https://twitter.com/EvernightStudio",
role: "Mod"
}
]

const contributors = document.querySelector('.contributors');


for (let i = 0; i < users.length; i++) {
	let user = users[i];

	let userBox = document.createElement('div');

	let nameNode = document.createElement('span');
	nameNode.classList.add('name');
	let nameNodeLink = document.createElement('a');
	nameNodeLink.href = user.profileUrl;
	nameNodeLink.textContent = user.name;
	nameNode.appendChild(nameNodeLink);

	let pfpNode = document.createElement('a');
	pfpNode.classList.add('pfp');
	pfpNode.href = user.profileUrl;
	let pfpNodeImg = document.createElement('img');
	pfpNodeImg.src = user.imageUrl;
	pfpNode.appendChild(pfpNodeImg);

	let roleNode = document.createElement('span');
	roleNode.classList.add('role');
	roleNode.textContent = user.role;

	userBox.appendChild(nameNode);
	userBox.appendChild(pfpNode);
	userBox.appendChild(roleNode);

	contributors.appendChild(userBox);
}

