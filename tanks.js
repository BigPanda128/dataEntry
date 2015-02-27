//Ryan Postma
//CMP237
//DATA entry
//Tanks from Worl of Tanks
//sorted by name, nation, tank type, speed in km/h, calibur of gun in MM
//and damage

//all 33 prem tanks from world of tanks game
var TANKS_FILE = "[\n " +  [
'{ "name": "t2 light", "nation": "american", "type": "light", "speed": 72, "caliber": 20, "damage": 12 }',
'{ "name": "locust", "nation": "american", "type": "light", "speed": 64, "caliber": 37, "damage": 40 }',
'{ "name": "ram 2", "nation": "american", "type": "medium", "speed": 38, "caliber": 57, "damage": 75 }',
'{ "name": "t14", "nation": "american", "type": "heavy", "speed": 34, "caliber": 75, "damage": 110 }',
'{ "name": "t26e4", "nation": "american", "type": "medium", "speed": 40.2, "caliber": 90, "damage": 240 }',
'{ "name": "t34", "nation": "american", "type": "heavy", "speed": 35, "caliber": 120, "damage": 400 }',
'{ "name": "sexton 1", "nation": "british", "type": "spg", "speed": 40.2, "caliber": 87.6, "damage": 280 }',
'{ "name": "matilda bp", "nation": "british", "type": "medium", "speed": 22, "caliber": 57, "damage": 75 }',
'{ "name": "excelsior", "nation": "british", "type": "heavy", "speed": 38.6, "caliber": 75, "damage": 110 }',
'{ "name": "tog 2", "nation": "british", "type": "heavy", "speed": 14, "caliber": 76.2, "damage": 150 }',
'{ "name": "at 15a", "nation": "british", "type": "tdspg", "speed": 20, "caliber": 76.2, "damage": 150 }',
'{ "name": "pz.s35", "nation": "german", "type": "medium", "speed": 37, "caliber": 47, "damage": 52 }',
'{ "name": "t-15", "nation": "german", "type": "light", "speed": 60, "caliber": 37, "damage": 40 }',
'{ "name": "t-25", "nation": "german", "type": "medium", "speed": 60, "caliber": 75, "damage": 110 }',
'{ "name": "dicker max", "nation": "german", "type": "tdspg", "speed": 40, "caliber": 105, "damage": 300 }',
'{ "name": "pz. 4s.", "nation": "german", "type": "medium", "speed": 48, "caliber": 75, "damage": 135 }',
'{ "name": "panther/m10", "nation": "german", "type": "medium", "speed": 46, "caliber": 75, "damage": 135 }',
'{ "name": "jgtig. 8,8cm", "nation": "german", "type": "tdspg", "speed": 28, "caliber": 88, "damage": 240 }',
'{ "name": "lowe", "nation": "german", "type": "heavy", "speed": 35, "caliber": 105, "damage": 320 }',
'{ "name": "fcm36pak40", "nation": "french", "type": "tdspg", "speed": 24, "caliber": 75, "damage": 110 }',
'{ "name": "fcm 50t", "nation": "french", "type": "heavy", "speed": 51, "caliber": 90, "damage": 240 }',
'{ "name": "t-127", "nation": "russian", "type": "light", "speed": 38, "caliber": 45, "damage": 47 }',
'{ "name": "valentine 2", "nation": "russian", "type": "light", "speed": 32, "caliber": 45, "damage": 47 }',
'{ "name": "su-85i", "nation": "russian", "type": "tdspg", "speed": 50, "caliber": 85, "damage": 160 }',
'{ "name": "matilda 4", "nation": "russian", "type": "medium", "speed": 25, "caliber": 76, "damage": 110 }',
'{ "name": "churchill 3", "nation": "russian", "type": "heavy", "speed": 28, "caliber": 57, "damage": 75 }',
'{ "name": "su-100y", "nation": "russian", "type": "tdspg", "speed": 35, "caliber": 130, "damage": 440 }',
'{ "name": "su-122-44", "nation": "russian", "type": "tdspg", "speed": 47.5, "caliber": 122, "damage": 390 }',
'{ "name": "is-6", "nation": "russian", "type": "heavy", "speed": 35, "caliber": 122, "damage": 390 }',
'{ "name": "type 64", "nation": "chinese", "type": "light", "speed": 72.4, "caliber": 76, "damage": 115 }',
'{ "name": "112", "nation": "chinese", "type": "heavy", "speed": 45, "caliber": 122, "damage": 390 }',
'{ "name": "t-34-3", "nation": "chinese", "type": "medium", "speed": 50, "caliber": 122, "damage": 390 }',
'{ "name": "chi-nu kai", "nation": "japanese", "type": "medium", "speed": 38.8, "caliber": 75, "damage": 125 }'
].join(",\n ") + "\n]";;
