let btn = document.getElementById('btn');
let factOutput = document.getElementById('factOutput');
let facts = 
[
    "Neutron stars spin 600 times per second", "99.86% of the solar system’s mass is the sun", "Pluto’s diameter is half the US’ width", "Any liquid in the vacuum of space will form a sphere", "It takes 300,000 years for the energy in the sun’s core to become the sunlight that we see", "If two pieces of the same type of metal touch in space, they will be permanently bonded", "In the constellation Aquila, there is a cloud of alcohol 460 billion km wide", "Earth rotates once per day but its rotation is slowing by 1.4 milliseconds every century so when the dinosaurs lived, a day lasted 23 hours", "The largest mountain in the solar system is the peak of Rheasilvia on the asteroid Vesta with a height of 25 km; 3 times Mt. Everest’s height", "The milky way’s supermassive black hole, Sagittarius A, weighs 4 million solar masses condensed into a spherical volume the size of half Mercury’s orbit"
];

btn.addEventListener('click', function(){
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    factOutput.innerHTML = randomFact;
})
