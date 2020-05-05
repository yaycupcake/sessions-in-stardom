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
    imageUrl: "images/JamesFE.png",
    profileUrl: "https://twitter.com/_JamesFE",
    role: "Guest Artist",
    blurb: "Hello everyone!! I'm very excited to take part in this project.I love TMS a lot and I would like to take this opportunity to spread my passion for it with others!'"
  },
  {
    name: "TheKimersonShow",
    imageUrl: "images/TheKimersonShow.png",
    profileUrl: "https://twitter.com/TheKimersonShow",
    role: "Guest Artist",
    blurb: "I love Tokyo Mirage Sessions #FE with all of my heart, so I am incredibly honored to be a part of a zine that celebrates this wonderful game!"
  },
  {
    name: "ciarre",
    imageUrl: "images/ciarre.png",
    profileUrl: "https://twitter.com/ciarre_arts",
    role: "Cover Artist"
  },
  {
    name: "GrimLuminary",
    imageUrl: "images/GrimLuminary.png",
    profileUrl: "https://twitter.com/GrimLuminary",
    role: "Artist"
  },
  {
    name: "Jihae",
    imageUrl: "images/Jihae.png",
    profileUrl: "https://twitter.com/ajihaew",
    role: "Artist"
  },
  {
    name: "Kuma",
    imageUrl: "images/Kuma.png",
    profileUrl: "https://twitter.com/Kumaokaasan",
    role: "Artist"
  },
  {
    name: "Shunkaku",
    imageUrl: "images/Shunkaku.png",
    profileUrl: "https://twitter.com/Shunkaku",
    role: "Artist"
  },
  {
    name: "Ihsnet",
    imageUrl: "images/Ihsnet.png",
    profileUrl: "https://twitter.com/Ihsnet",
    role: "Artist"
  },
  {
    name: "Hatsune Lizzu",
    imageUrl: "images/HatsuneLizzu.png",
    profileUrl: "https://twitter.com/hatsunelizzu",
    role: "Artist"
  },
  {
    name: "Star",
    imageUrl: "images/Star.png",
    profileUrl: "https://twitter.com/Stardastarly",
    role: "Artist"
  },
  {
    name: "CKR the Cat",
    imageUrl: "images/CKRtheCat.png",
    profileUrl: "https://twitter.com/CKRtheCat",
    role: "Artist"
  },
  {
    name: "Loustica_Lucia",
    imageUrl: "images/Loustica_Lucia.png",
    profileUrl: "https://twitter.com/Loustica_Lucia",
    role: "Artist"
  },
  {
    name: "reidiantdawn",
    imageUrl: "images/reidiantdawn.png",
    profileUrl: "https://twitter.com/reidiantdawn",
    role: "Artist"
  },
  {
    name: "Rubin",
    imageUrl: "images/Rubin.png",
    profileUrl: "https://twitter.com/rubindraws",
    role: "Artist"
  },
  {
    name: "janarowe",
    imageUrl: "images/janarowe.png",
    profileUrl: "https://twitter.com/janarowe_",
    role: "Artist"
  },
  // {
  // 	name: "lemonbo0y",
  // 	imageUrl: "images/lemonbo0y.png",
  // 	profileUrl: "https://twitter.com/Lemonbo0y",
  // 	role: "Artist"
  // },
  {
    name: "Erin Tate",
    imageUrl: "images/ErinTate.png",
    profileUrl: "https://twitter.com/ErinTatertots",
    role: "Artist"
  },
  {
    name: "yitsuin",
    imageUrl: "images/yitsuin.png",
    profileUrl: "https://twitter.com/yitsuin",
    role: "Artist"
  },
  {
    name: "Cecil",
    imageUrl: "images/Cecil.png",
    profileUrl: "https://twitter.com/SubomieArt",
    role: "Artist"
  },
  {
    name: "Saaron",
    imageUrl: "images/Saaron.png",
    profileUrl: "https://twitter.com/saaronwrites",
    role: "Writer"
  },
  {
    name: "Mars",
    imageUrl: "images/Mars.png",
    profileUrl: "https://twitter.com/Marsversusmars",
    role: "Writer"
  },
  {
    name: "Echo",
    imageUrl: "images/Echo.png",
    profileUrl: "https://twitter.com/PASSlONLlP",
    role: "Writer"
  },
  {
    name: "Ailanthium",
    imageUrl: "images/Ailanthium.png",
    profileUrl: "https://twitter.com/Ailanthium",
    role: "Writer"
  },
  {
    name: "Mayura",
    imageUrl: "images/Mayura.png",
    profileUrl: "https://twitter.com/DaylitWriter",
    role: "Writer"
  },
  {
    name: "PsiYoshi",
    imageUrl: "images/PsiYoshi.png",
    profileUrl: "https://twitter.com/PsiYoshi",
    role: "Writer"
  },
  {
    name: "Lizlow",
    imageUrl: "images/Lizlow.png",
    profileUrl: "https://twitter.com/roastedlizlow",
    role: "Writer"
  },
  // {
  // 	name: "pasu",
  // 	imageUrl: "images/pasu.png",
  // 	profileUrl: "https://twitter.com/VH_Remilia",
  // 	role: "Merch Artist"
  // },
  {
    name: "masterhands",
    imageUrl: "images/masterhands.png",
    profileUrl: "https://twitter.com/master_hands",
    role: "Merch Artist"
  },
  {
    name: "Himeko",
    imageUrl: "images/Himeko.png",
    profileUrl: "https://twitter.com/yukimori_himeko",
    role: "Merch Artist"
  },
  {
    name: "Raichana",
    imageUrl: "images/Raichana.png",
    profileUrl: "https://twitter.com/Raichana",
    role: "Merch Artist"
  },
  {
    name: "mgcoco",
    imageUrl: "images/mgcoco.png",
    profileUrl: "https://twitter.com/mgcoco_art",
    role: "Merch Artist"
  },
  {
    name: "Sei",
    imageUrl: "images/Sei.png",
    profileUrl: "https://twitter.com/XinChun93",
    role: "Web Developer",
    blurb: "I just made this site. Everyone else did the hard work."
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



  userBox.appendChild(nameNode);
  userBox.appendChild(pfpNode);
  userBox.appendChild(roleNode);

  if (user.blurb) {
    let blurbNode = document.createElement('p');
    blurbNode.classList.add('blurb');
    blurbNode.textContent = user.blurb;

    userBox.appendChild(blurbNode);
  }


  contributors.appendChild(userBox);
}

