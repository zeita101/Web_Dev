let madLibs = function() {
    let storyOne = "one";
    let storyTwo = "two";
    const choice = prompt("Which story would you like to choose?");

    if (choice === storyOne) {
        let  adjective = prompt("type an adjective: ")
        let  generalPlace = prompt("type a general place: ")
        let  vehicleName = prompt("type a vehicle name (plural): ")
        let  nameGame = prompt("type the name of a game: ")
        let  pluralNoun = prompt("type a plural noun: ")
        let  ingVerb = prompt("type an 'ing' verb: ")
        let  ingVerbTwo = prompt("type another 'ing' verb: ")
        let  foodName = prompt("type a food name (plural): ")
        let  nameSport = prompt("type the name of a sport: ")
        let  ingVerbThree = prompt("type another 'ing' verb: ")
        let  emotion = prompt("type an emotion: ")
        let  number = prompt("type a number: ");
        
        let messageOne = "A vacation is when you take a trip to some " + adjective +
            " place near an amazing " + generalPlace + ". A good vacation place is one where you can ride " 
            + vehicleName + " or play " + nameGame + " or go hunting for" + pluralNoun + ". I like to spend my time " + ingVerb +
            " or " + ingVerbTwo + ". When parents go on a vacation, they spend their time eating three "
            + foodName + " a day. Usually, fathers play " + nameSport + ", and mothers spend their time " + 
            ingVerbThree + ". Adults need vacations more than kids because adults are always very " + emotion +
            "because they have to work " + number + " hours every day all year just to afford their vacations!"
            
            alert(messageOne);


    } else if (choice === storyTwo) {
        let  oneAdjective = prompt("type an adjective: ")
        let  famousPlace = prompt("type a famous place: ")
        let  onepluralNoun = prompt("type a plural noun: ")
        let  twoAdjective = prompt("type an adjective: ")
        let  foodPlural = prompt("type a food (plural): ")
        let  oneEmotion = prompt("type an emotion: ")
        let  oneIngVerb = prompt("type 'ing' verb: ")
        let  commonPlace = prompt("type a common place: ")
        let  threeAdjective = prompt("type an adjectivee: ")
        let  oneNoun = prompt("type a noun: ")
        let  fourAdjective = prompt("type an adjective: ")
        let  twoNoun = prompt("type a noun: ");
        let  familyMember = prompt("type a family member: ")
        let  fiveAdjective = prompt("type another adjective: ")

        
        let messageOne = "Today we took a " + oneAdjective + " fieldtrip to " + famousPlace + 
        ". They're famous for making " + onepluralNoun +  " and for cooking " + twoAdjective + 
        " " + foodPlural + ". Eating all that food made me feel " + oneEmotion + 
        ". Next we enjoyed the local tradition of " + oneIngVerb + " in the middle of the " 
        + commonPlace + "! Finally, we went shopping for souvenirs. I bought a " 
        + threeAdjective + oneNoun + " for myself, and a " + fourAdjective + twoNoun + " for my favorite " 
        + familyMember + ". I'll definitely never forget this " + fiveAdjective + " trip!"
            
        alert(messageOne);
    }
        

    
}
madLibs();
