
const cosmicTopics = [
  {
    id: "mercury",
    title: "Mercury",
    category: "Planets",
    icon: "☿️",
    summary: "The smallest planet and the closest to the Sun.",
    content: "Mercury is the smallest planet in our Solar System. It has a heavily cratered surface, almost no atmosphere, and extreme temperature differences between day and night.",
    fact: "Mercury completes one orbit around the Sun in about 88 Earth days."
  },
  {
    id: "venus",
    title: "Venus",
    category: "Planets",
    icon: "♀️",
    summary: "A scorching world with a thick atmosphere.",
    content: "Venus is the second planet from the Sun. Its dense atmosphere, composed mostly of carbon dioxide, traps heat through an intense greenhouse effect.",
    fact: "Venus is the hottest planet in the Solar System."
  },
  {
    id: "earth",
    title: "Earth",
    category: "Planets",
    icon: "🌍",
    summary: "Our home planet, with liquid water and known life.",
    content: "Earth is the third planet from the Sun. Its atmosphere, magnetic field, liquid water, and suitable temperatures support a remarkable diversity of life.",
    fact: "Earth is the only world currently known to support life."
  },
  {
    id: "mars",
    title: "Mars",
    category: "Planets",
    icon: "🔴",
    summary: "The Red Planet, home to enormous volcanoes and ancient river valleys.",
    content: "Mars is the fourth planet from the Sun. Its reddish colour comes from iron-rich minerals in its soil. Robotic missions investigate whether ancient Mars could have supported microbial life.",
    fact: "Mars is home to Olympus Mons, one of the largest volcanoes known in the Solar System."
  },
  {
    id: "jupiter",
    title: "Jupiter",
    category: "Planets",
    icon: "🪐",
    summary: "The largest planet, famous for its giant storms.",
    content: "Jupiter is a gas giant with an atmosphere of mostly hydrogen and helium. It has a powerful magnetic field and many moons, including Europa and Ganymede.",
    fact: "Jupiter is the largest planet in our Solar System."
  },
  {
    id: "saturn",
    title: "Saturn",
    category: "Planets",
    icon: "🪐",
    summary: "A gas giant surrounded by spectacular rings.",
    content: "Saturn is the sixth planet from the Sun. Its rings contain countless pieces of ice and rocky material, ranging from tiny grains to much larger chunks.",
    fact: "Saturn's average density is lower than that of water."
  },
  {
    id: "uranus",
    title: "Uranus",
    category: "Planets",
    icon: "🔵",
    summary: "An ice giant that rotates almost on its side.",
    content: "Uranus is the seventh planet from the Sun. Its blue-green appearance comes largely from methane in its atmosphere, and its extreme axial tilt produces unusual seasons.",
    fact: "Uranus takes about 84 Earth years to orbit the Sun."
  },
  {
    id: "neptune",
    title: "Neptune",
    category: "Planets",
    icon: "🔷",
    summary: "A distant ice giant with powerful winds.",
    content: "Neptune is the eighth planet from the Sun. It is a cold, distant world with an atmosphere of hydrogen, helium, and methane, along with dynamic weather systems.",
    fact: "Neptune takes about 165 Earth years to orbit the Sun."
  },
  {
    id: "pluto",
    title: "Pluto",
    category: "Dwarf Planets",
    icon: "❄️",
    summary: "A fascinating dwarf planet in the Kuiper Belt.",
    content: "Pluto is a dwarf planet beyond Neptune. It has mountains, glaciers made of nitrogen ice, and several moons, including Charon.",
    fact: "Pluto was reclassified as a dwarf planet in 2006."
  },
  {
    id: "andromeda",
    title: "Andromeda Galaxy",
    category: "Galaxies",
    icon: "🌌",
    summary: "A large spiral galaxy near the Milky Way.",
    content: "The Andromeda Galaxy is the nearest major galaxy to the Milky Way. It contains enormous numbers of stars, gas, and dust, and is approaching our galaxy.",
    fact: "Andromeda is approximately 2.5 million light-years away."
   },
  {
    id: "triangulum",
    title: "Triangulum Galaxy",
    category: "Galaxies",
    icon: "🌌",
    summary: "A nearby spiral galaxy also known as Messier 33.",
    content: "The Triangulum Galaxy is a spiral galaxy in the Local Group. It contains many stars and star-forming regions and is smaller than the Milky Way and Andromeda.",
    fact: "The Triangulum Galaxy is commonly abbreviated as M33."
  },
  {
    id: "large-magellanic-cloud",
    title: "Large Magellanic Cloud",
    category: "Galaxies",
    icon: "✨",
    summary: "A nearby satellite galaxy rich in star formation.",
    content: "The Large Magellanic Cloud is a satellite galaxy of the Milky Way. It contains gas clouds and active star-forming regions, including the Tarantula Nebula.",
    fact: "The Large Magellanic Cloud is visible to the unaided eye from the Southern Hemisphere."
  },
  {
    id: "small-magellanic-cloud",
    title: "Small Magellanic Cloud",
    category: "Galaxies",
    icon: "✨",
    summary: "A small galaxy that orbits the Milky Way.",
    content: "The Small Magellanic Cloud is a nearby dwarf galaxy that interacts gravitationally with the Large Magellanic Cloud and the Milky Way.",
    fact: "It is best seen from the Southern Hemisphere."
  },
  {
    id: "sagittarius-dwarf",
    title: "Sagittarius Dwarf Galaxy",
    category: "Galaxies",
    icon: "🌠",
    summary: "A dwarf galaxy being disrupted by the Milky Way.",
    content: "The Sagittarius Dwarf Spheroidal Galaxy is a small satellite galaxy whose stars are being pulled into streams by the Milky Way's gravity.",
    fact: "Its interaction with the Milky Way helps astronomers study how galaxies evolve."
  },
  {
    id: "sculptor-dwarf",
    title: "Sculptor Dwarf Galaxy",
    category: "Galaxies",
    icon: "🌌",
    summary: "A nearby dwarf spheroidal galaxy.",
    content: "The Sculptor Dwarf Galaxy is a satellite of the Milky Way. Its old stars help astronomers investigate the early history of small galaxies.",
    fact: "It is located in the direction of the constellation Sculptor."
  },
  {
    id: "milky-way",
    title: "Milky Way Galaxy",
    category: "Galaxies",
    icon: "🌌",
    summary: "The barred spiral galaxy that contains our Solar System.",
    content: "The Milky Way is a barred spiral galaxy containing our Sun, planets, and billions of other stars. Its central region contains a supermassive black hole called Sagittarius A*.",
    fact: "Our Solar System lies in a spiral feature called the Orion Arm."
  },
  {
    id: "local-group",
    title: "Local Group",
    category: "Galaxies",
    icon: "🌌",
    summary: "The collection of galaxies that includes the Milky Way.",
    content: "The Local Group is a gravitationally associated collection of galaxies. Its largest members include the Milky Way, Andromeda, and the Triangulum Galaxy, alongside many dwarf galaxies.",
    fact: "The Local Group contains dozens of known galaxies."
  },
  {
    id: "sun",
    title: "The Sun",
    category: "Stars",
    icon: "☀️",
    summary: "The star at the centre of our Solar System.",
    content: "The Sun is a star powered by nuclear fusion in its core. It supplies most of the energy that drives Earth's climate and supports life.",
    fact: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth."
  },
  {
    id: "red-giants",
    title: "Red Giants",
    category: "Stars",
    icon: "🔴",
    summary: "Stars that expand as they evolve.",
    content: "A red giant forms when a star exhausts the hydrogen fuel in its core and expands. The Sun is expected to become a red giant in the distant future.",
    fact: "Red giants can become hundreds of times wider than the Sun."
  },
  {
    id: "white-dwarfs",
    title: "White Dwarfs",
    category: "Stars",
    icon: "⚪",
    summary: "Dense stellar remnants left by many Sun-like stars.",
    content: "A white dwarf is the compact remnant left when a low- or intermediate-mass star sheds its outer layers. It gradually cools over time.",
    fact: "A white dwarf can contain a mass comparable to the Sun in a volume similar to Earth."
  },

  {
    id: "neutron-stars",
    title: "Neutron Stars",
    category: "Stars",
    icon: "⭐",
    summary: "Extremely dense remnants of some exploded stars.",
    content: "Neutron stars can form when massive stars explode as supernovae. Their matter is compressed into an incredibly dense object, and some rotate rapidly while emitting beams of radiation.",
    fact: "A teaspoon of neutron-star material would have an enormous mass under Earth gravity."
  },
  {
    id: "supernovae",
    title: "Supernovae",
    category: "Stars",
    icon: "💥",
    summary: "Powerful stellar explosions that reshape galaxies.",
    content: "A supernova is a powerful stellar explosion. It can occur when a massive star reaches the end of its life or when certain white dwarfs undergo runaway thermonuclear reactions.",
    fact: "Supernovae distribute many elements into space."
  },
  {
    id: "star-formation",
    title: "Star Formation",
    category: "Stars",
    icon: "✨",
    summary: "How clouds of gas and dust become stars.",
    content: "Stars form inside cold, dense regions of molecular clouds. Gravity pulls material together until the developing core becomes hot and dense enough for nuclear fusion to begin.",
    fact: "New stars often form in groups within giant molecular clouds."
  },
  {
    id: "earths-moon",
    title: "Earth's Moon",
    category: "Solar System Objects",
    icon: "🌕",
    summary: "Our natural satellite and a record of Solar System history.",
    content: "Earth's Moon influences ocean tides and stabilizes Earth's axial tilt. Its surface preserves craters and geological features that help scientists investigate the Moon's history.",
    fact: "The Moon is gradually moving away from Earth by about 3.8 centimetres per year."
  },
  {
    id: "europa",
    title: "Europa",
    category: "Solar System Objects",
    icon: "🧊",
    summary: "An icy moon of Jupiter that may hide a global ocean.",
    content: "Europa has a fractured icy surface. Evidence suggests that a salty ocean may exist beneath its ice, making it a major target in the search for potentially habitable environments.",
    fact: "Europa is one of Jupiter's four large Galilean moons."
  },
  {
    id: "titan",
    title: "Titan",
    category: "Solar System Objects",
    icon: "🌫️",
    summary: "Saturn's largest moon, with lakes of liquid hydrocarbons.",
    content: "Titan has a thick nitrogen-rich atmosphere and surface lakes and seas of liquid methane and ethane. Its complex chemistry makes it interesting for planetary science.",
    fact: "Titan is the only moon known to have stable liquid lakes on its surface."
  },
  {
    id: "asteroids",
    title: "Asteroids",
    category: "Solar System Objects",
    icon: "☄️",
    summary: "Rocky remnants from the early Solar System.",
    content: "Asteroids are rocky or metallic objects orbiting the Sun. Many are found in the main asteroid belt between Mars and Jupiter, although others travel on different orbits.",
    fact: "Ceres, the largest object in the main asteroid belt, is classified as a dwarf planet."
  },
  {
    id: "comets",
    title: "Comets",
    category: "Solar System Objects",
    icon: "☄️",
    summary: "Icy objects that can grow glowing tails near the Sun.",
    content: "Comets contain ice, dust, and rocky material. As a comet approaches the Sun, heating releases gas and dust that form a surrounding cloud and sometimes spectacular tails.",
    fact: "A comet's tail generally points away from the Sun because of solar radiation and the solar wind."
  },
  {
    id: "meteors-meteorites",
    title: "Meteors and Meteorites",
    category: "Solar System Objects",
    icon: "🌠",
    summary: "From streaks of light in the sky to space rocks on the ground.",
    content: "A meteoroid is a small object travelling through space. A meteor is the streak of light produced as it enters an atmosphere, while a meteorite is material that survives and reaches the ground.",
    fact: "A meteor is the phenomenon you see, not the name of the rock itself."
  },
  {
    id: "kuiper-belt",
    title: "Kuiper Belt",
    category: "Solar System Objects",
    icon: "❄️",
    summary: "A distant region containing icy bodies beyond Neptune.",
    content: "The Kuiper Belt lies beyond Neptune's orbit and contains many icy objects, including Pluto. It provides clues about how the outer Solar System formed and evolved.",
    fact: "The Kuiper Belt is one source region for short-period comets."
  },
  
,
  {
    id: "black-holes",
    title: "Black Holes",
    category: "Cosmic Phenomena",
    icon: "🕳️",
    summary: "Regions of space where gravity is so strong that light cannot escape.",
    content: "A black hole forms when matter is compressed into a region from which nothing can escape once it crosses the event horizon. Astronomers study black holes by observing their effects on nearby matter and light.",
    fact: "The Milky Way contains a supermassive black hole called Sagittarius A*."
  },
  {
    id: "nebulae",
    title: "Nebulae",
    category: "Cosmic Phenomena",
    icon: "🌈",
    summary: "Vast clouds of gas and dust where stars can form or die.",
    content: "Nebulae are interstellar clouds of gas and dust. Some are regions where new stars form, while others are created when dying stars release material into space.",
    fact: "The Orion Nebula is a prominent star-forming region."
  },
  {
    id: "exoplanets",
    title: "Exoplanets",
    category: "Cosmic Phenomena",
    icon: "🪐",
    summary: "Planets that orbit stars beyond our Solar System.",
    content: "Exoplanets orbit stars other than the Sun. Scientists discover them using techniques such as transit observations and measuring the gravitational wobble of their host stars.",
    fact: "Some exoplanets orbit two stars."
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    category: "Cosmic Phenomena",
    icon: "🌑",
    summary: "Invisible matter inferred from its gravitational effects.",
    content: "Dark matter does not emit or absorb light in the way ordinary matter does. Its gravitational influence helps explain the motions of stars and galaxies, although its underlying nature remains unknown.",
    fact: "Evidence for dark matter comes from several independent astronomical observations."
  },
  {
    id: "dark-energy",
    title: "Dark Energy",
    category: "Cosmic Phenomena",
    icon: "✨",
    summary: "The name given to whatever drives the universe's accelerating expansion.",
    content: "Observations indicate that the expansion of the universe is accelerating. Dark energy is the name given to the unknown cause, or a possible description, of this acceleration.",
    fact: "Dark energy's physical nature remains one of cosmology's major unanswered questions."
  },
  {
    id: "big-bang",
    title: "The Big Bang",
    category: "Cosmic Phenomena",
    icon: "💥",
    summary: "The early hot, dense state from which the universe expanded.",
    content: "The Big Bang model describes how the observable universe evolved from an early hot, dense state about 13.8 billion years ago. Space itself has expanded over time.",
    fact: "The cosmic microwave background is important evidence supporting the Big Bang model."
  },
  {
    id: "gravitational-waves",
    title: "Gravitational Waves",
    category: "Cosmic Phenomena",
    icon: "〰️",
    summary: "Ripples in spacetime produced by accelerating massive objects.",
    content: "Gravitational waves are disturbances in spacetime. Detectors can measure waves produced by events such as collisions between black holes or neutron stars.",
    fact: "LIGO announced the first direct detection of gravitational waves in 2016."
  },
  {
    id: "search-for-life",
    title: "The Search for Life",
    category: "Cosmic Phenomena",
    icon: "🧬",
    summary: "How scientists investigate whether life exists beyond Earth.",
    content: "Astrobiology explores the origin and possibility of life beyond Earth. Researchers investigate Mars, icy moons, exoplanet atmospheres, and environments where liquid water might exist.",
    fact: "No life beyond Earth has been confirmed so far."
  },
  
,
  {
    id: "james-webb",
    title: "James Webb Space Telescope",
    category: "Space Missions",
    icon: "🔭",
    summary: "A powerful space telescope that observes the universe in infrared light.",
    content: "The James Webb Space Telescope observes infrared light to investigate early galaxies, star formation, planetary systems, and exoplanet atmospheres. It operates far from Earth to maintain a stable observing environment.",
    fact: "Webb launched on 25 December 2021."
  },
  {
    id: "hubble",
    title: "Hubble Space Telescope",
    category: "Space Missions",
    icon: "🔭",
    summary: "A space telescope famous for detailed images of the cosmos.",
    content: "The Hubble Space Telescope observes the universe primarily in visible, ultraviolet, and near-infrared light. Its observations have contributed to research on galaxies, nebulae, and the expansion of the universe.",
    fact: "Hubble launched in 1990."
  },
  {
    id: "mars-rovers",
    title: "Mars Rovers",
    category: "Space Missions",
    icon: "🤖",
    summary: "Robotic explorers investigating the surface of Mars.",
    content: "Mars rovers travel across the Martian surface to study rocks, soil, climate, and past environmental conditions. Missions such as Curiosity and Perseverance help scientists investigate whether Mars once had habitable environments.",
    fact: "Perseverance collected rock samples intended for possible future return to Earth."
  },
  {
    id: "chandrayaan",
    title: "Chandrayaan Missions",
    category: "Space Missions",
    icon: "🇮🇳",
    summary: "India's lunar exploration programme.",
    content: "India's Chandrayaan programme studies the Moon through orbiters, landers, and rovers. Chandrayaan-3 achieved a successful soft landing near the lunar south polar region in August 2023.",
    fact: "Chandrayaan-3 made India the fourth country to achieve a soft landing on the Moon."
  },
  {
    id: "aditya-l1",
    title: "Aditya-L1",
    category: "Space Missions",
    icon: "☀️",
    summary: "India's mission to study the Sun.",
    content: "Aditya-L1 is India's solar observatory mission. It studies the Sun's atmosphere, solar wind, and related processes from a halo orbit around the Sun–Earth L1 point.",
    fact: "Aditya-L1 entered its target halo orbit in January 2024."
  },
  {
    id: "international-space-station",
    title: "International Space Station",
    category: "Space Missions",
    icon: "🛰️",
    summary: "An orbiting laboratory for scientific research.",
    content: "The International Space Station is a crewed research laboratory in low Earth orbit. Scientists use it to study how microgravity affects humans, materials, biology, and physical processes.",
    fact: "The ISS orbits Earth roughly every 90 minutes."
  },
  {
    id: "voyager",
    title: "Voyager Missions",
    category: "Space Missions",
    icon: "🚀",
    summary: "Twin spacecraft exploring the outer Solar System and beyond.",
    content: "Voyager 1 and Voyager 2 launched in 1977. They studied the giant planets and later travelled into interstellar space, carrying messages and information about Earth.",
    fact: "Voyager 1 is the most distant human-made spacecraft."
  },
  {
    id: "rocket-science",
    title: "Rocket Science",
    category: "Space Missions",
    icon: "🚀",
    summary: "The physics that allows rockets to travel through space.",
    content: "Rockets generate thrust by expelling mass at high speed. Their motion follows Newton's laws, and multistage designs help spacecraft reach the speeds needed for orbit and interplanetary travel.",
    fact: "Rockets work in space because they carry propellant and do not need air to push against."
  }
];


