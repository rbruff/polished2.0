const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/polishedDB",
  {
    useMongoClient: true
  }
);

const productSeed = [
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Was It All Just A Dream",
    "photo": "opiWasItAllJustADream.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Teal Me More Teal Me More",
    "photo": "opiTealMeMore.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Summer Lovin Having A Blast",
    "photo": "opiSummerLovinHavingABlast.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Hopelessly Devoted To OPI",
    "photo": "opiHopelesslyDevoted.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Frenchie Likes To Kiss",
    "photo": "opiFrenchieLikesToKiss.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Don't Cry Over Spilled Milkshakes",
    "photo": "opiDontCryOverSpilledMilkshakes.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "OPI",
    "product_name": "Null",
    "color": "Chills Are Multiplying",
    "photo": "opiChillsAreMultiplying.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Young Wild & Me",
    "photo": "essieYoungWildNMe.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "World Is Your Oyster",
    "photo": "essieWorldIsYourOyster.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "The Fuschia Is Bright",
    "photo": "essieTheFuchsiaIsBright.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Style in Excess",
    "photo": "essieStyleInExcess.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Stripes & Sails",
    "photo": "essieStripesNSails.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Perfect Posture",
    "photo": "essiePerfectPosture.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Peak Show",
    "photo": "essiePeakShow.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Pass Port To Sail",
    "photo": "essiePassportToSail.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Licorice",
    "photo": "essieLicorice.JPG",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Lace To The Alter",
    "photo": "essieLaceToTheAltar.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Handmade Of Honor",
    "photo": "essieHandmadeOfHonor.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Go Go Geisha",
    "photo": "essieGoGoGeisha.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Go Ginza",
    "photo": "essieGoGinza.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Getting Intricate",
    "photo": "essieGettingIntricate.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Geranium",
    "photo": "essieGeranium.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Find Me An Oasis",
    "photo": "essieFindMeAnOasis.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Coral Coast",
    "photo": "essieCoralCoast.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Chillato",
    "photo": "essieChillato.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Essie",
    "product_name": "Null",
    "color": "Bon Boy Age",
    "photo": "essieBonBoyage.jpg",
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "nails"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Fair",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Fair/Light",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Light",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Light/Neutral",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Light/Medium",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Medium",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Medium/Dark",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Smashbox",
    "product_name": "Camera Ready CC Cream",
    "color": "Dark",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "face"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Exposed",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Sensual",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Seduce",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Risque",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Dazzled",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Dollface",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Blissful",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Captivating",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "Tarte",
    "product_name": "Amazonian Clay 12-Hour Blush",
    "color": "Paaarty",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "cheeks"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "All That Glitters",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Amber Lights",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Antiqued",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Arena",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Atlantic Blue",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Beauty Marked",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Black Tied",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Blackberry",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Bronze",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Chrome Yellow",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Club",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Dazzlelight",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Expensive Pink",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "How Royal",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "I'm Into It",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "MAC",
    "product_name": "Null",
    "color": "Naked Lunch",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "eyes"
  },
  {
    "brand": "e.l.f.",
    "product_name": "3-in-1",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Waterproof Lengthening & Volumizing",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Sweat Resistany Mascara & Brow Duo",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Mineral Infused",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Volumizing & Defining",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Lengthening & Volumizing",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Lash Extending",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Volumizing",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Volume Plumping",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Eye Enhancing",
    "color": "Black",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "mascara"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Still Crazy",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Appy",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Dream Easy",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "What If",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Money Side Up",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Sitting Pretty",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Friends",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Boy",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "Cheetah",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "Colourpop",
    "product_name": "Creme Lux Lipstick",
    "color": "La Lady",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Lip"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Instant Lift Brow Pencil",
    "color": "Taupe",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Brow"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Instant Lift Brow Pencil",
    "color": "Neutral Brown",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Brow"
  },
  {
    "brand": "e.l.f.",
    "product_name": "Instant Lift Brow Pencil",
    "color": "Deep Brown",
    "photo": null,
    "favorite": 0,
    "almost_out": 0,
    "notes": null,
    "date_of_purchase": null,
    "product_category": "Brow"
  }
]

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + "products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });