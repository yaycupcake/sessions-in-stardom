const users = [
{
name: "Okkefak",
imageUrl: "images/okkefak.png",
profileUrl: "https://twitter.com/Okkefak",
role: "Head Mod, Artist",
blurb: "Hello! My name is Okke, and I am the head mod for this zine. I have loved TMS since the very first trailer, and have been excited to make this zine for a long time now! I am a fanartist, mostly for the Fire Emblem series, and have ran two Fire Emblem charity zines successfully in the past. TMS is a game very close to my heart, and I can't wait to see what amazing content everyone produces for it! ♥"
},
{
name: "EvernightStudio",
imageUrl: "images/evernightstudio.png",
profileUrl: "https://twitter.com/EvernightStudio",
role: "Head Mod, Lead Graphic Designer, Writer",
blurb: "Hey there everyone! I go by Night and am the lead graphic designer for Sessions in Stardom. I run Evernight Studio, which makes a plethora of banners, mobile backgrounds, and other graphics on games like Smash Bros and Persona. As a fan of both Fire Emblem and the Shin Megami Tensei series, I was so excited to play Tokyo Mirage Sessions from the day it was teased. Glad to be here, and I hope you enjoy the show!"
},
{
name: "springexalt",
imageUrl: "images/springexalt.png",
profileUrl: "https://twitter.com/springexalt",
role: "Guest Artist",
blurb: "hi my name is robin!! i've been drawing for 10+ years now! i'm SUPER excited to work on this zine withi everyone, i've adored tokyo mirage sessions since it first came ^o^)/ <3"
},
{
name: "_JamesFE",
imageUrl: "images/_JamesFE.png",
profileUrl: "https://twitter.com/_JamesFE",
role: "Guest Artist",
blurb: "Hello everyone!! I'm very excited to take part in this project.I love TMS a lot and I would like to take this opportunity to spread my passion for it with others!'"
}
]

const contributors = document.querySelector('.contributors');


for (let i = 0; i < users.length; i++) {
	let user = users[i];

	let userBox = document.createElement('section');
	userBox.classList.add('userbox');

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

	let blurbNode = document.createElement('p');
	blurbNode.classList.add('blurb');
	blurbNode.textContent = user.blurb;

	userBox.appendChild(nameNode);
	userBox.appendChild(pfpNode);
	userBox.appendChild(roleNode);
	userBox.appendChild(blurbNode);



	contributors.appendChild(userBox);
}

