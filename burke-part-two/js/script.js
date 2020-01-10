
// Lists to pull values from.
var vacation_types = ["Musical", "Tropical", "Adventurous "]
var locations = ["New Orleans", "a beach vacation in Mexico", "some whitewater rafting in the Grand Canyon"]
var travel_suggestion = ["first class flight", "helicopter", "charter flight"]

// Empty variables to determine later
var destination = ""
var travelSuggestion = ""

// Prompts to determine what the user wants.
var vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?")
var groupSize = parseInt(prompt("How many are in your group?"))

// Conditional statements to determine the destination based on the vacation type.
if (vacationType.toUpperCase() == "musical".toUpperCase()) {
    destination = locations[0]
} else if (vacationType.toUpperCase() == "tropical".toUpperCase()) {
    destination = locations[1]
} else if (vacationType.toUpperCase() == "adventurous".toUpperCase()) {
    destination = locations[2]
}


// Conditional statements to determine the travel suggestion based on the group size.
if (groupSize <= 2) {
    travelSuggestion = travel_suggestion[0]
} else if (groupSize > 2 && groupSize <= 5) {
    travelSuggestion = travel_suggestion[1]
} else if (groupSize >= 6) {
    travelSuggestion = travel_suggestion[2]
}

// Declaring the result.
var sentence_pt_1 = "Since you’re a group of "
var sentence_pt_2 = " going on a "
var sentence_pt_3 = " vacation, you should take a "
var sentence_pt_4 = " to "
var sentence_pt_5 = "."
var result = sentence_pt_1.concat(groupSize).concat(sentence_pt_2).concat(vacationType).concat(sentence_pt_3).concat(travelSuggestion).concat(sentence_pt_4).concat(destination).concat(sentence_pt_5)

// Writing the result to the page.
document.write(result)

// Writing the result to the console.
console.log(result)

