/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================


{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?

  - Line 47: JSON objects cannot be stored in variables. Removed the const invalidBookingJSON reference. 
  - Line 47: JSON cannot be formatted as a template literal, so removed reference to the template literal on both line 47 and 70. 
  - Line 50: Added comma on line 50 after "checkInDate": "2024-05-15". 
  - Line 54: Put quotes for the key name. 
  - Line 60: Replaced invalid data type of "undefined" w/ null. 
  - Line 67: removed the trailing comma after the "Parking" element in the array. 
  - Line 70: Removed semicolon at line 70. 

  • Why is it a problem in JSON?

    JSON follows strict syntax rules, which were broken by the above errors. 

  • What did you change to fix it?

    See above comments. 
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

  - Code editor extension. 

2️⃣ How did you confirm that your corrected JSON file was valid?

  - Online Validator - Code Beautify. 

3️⃣ Which errors were the most difficult to spot? Why?

  - The invalid data type. Also, I had issues initially spotting that the JSON object was declared as a variable w/ a template 
  literal because I am so used to this syntax being valid for JavaScript objects and arrays. 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   - Following strict JSON syntax rules. 
   - Using online JSON validators. 
   - Reviewing error messages. 
*/
