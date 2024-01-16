const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

  //Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".
  guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };
  
  //Update CICERO's past gifts to include a "Golden Lyre".
  guests.CICERO.pastGifts.push("Golden Lyre");

  //Retrieve the region of "ANTONY".
  const antonyRegion = guests.ANTONY.region;

  //Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.
  delete guests.CICERO;

  //Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".
  const generalProfile = guests.ANTONY;
  generalProfile.region = "Egypt";


//After executing Step 5, what will be the region of ANTONY in the original guests object?
//ANTONY's region in the guests object is 'Egypt' due to JavaScript objects being reference types. When assigned to a new variable, both variables point to the same object, so changes in one variable reflect in the other.