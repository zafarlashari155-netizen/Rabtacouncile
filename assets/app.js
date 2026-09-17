const regions=[
["SD","سنڌ","Karachi • Hyderabad • Larkana • Qambar Shahdadkot"],
["PB","پنجاب","Lahore • Jhang • Faisalabad • Rawalpindi"],
["KP","خيبر پختونخوا","Peshawar • Mardan • Swat"],
["BA","بلوچستان","Quetta • Khuzdar • Chaman"],
["ICT","اسلام آباد","Islamabad Capital Territory"],
["AJK","آزاد ڪشمير","Regional records — pending verification"],
["GB","گلگت بلتستان","Regional records — pending verification"],
["PAK","پاڪستان","National-level public records"]
];
document.getElementById("regionGrid").innerHTML=regions.map(r=>`<article class="card region"><span class="code">${r[0]}</span><h3>${r[1]}</h3><small>${r[2]}</small></article>`).join("");
