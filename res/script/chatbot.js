var response = {

    "hi" : "Hello, how are you today?",
    "good" : "Great! How may I assist you?",
    "bad" : "I'm sorry. How may I help?",
    "how do i take a quiz" : "Click on a quiz below",
    "how are quizes scored" : "Based on accuracy",
    "" : "You did not type anthing, please try again...",
    "this is a bad webpage" : "Good thing it is free!",
    "how do i study" : "Use our website every night before you go to sleep",
    "i am too good for this website" : "Then make a harder quiz!",
    "i love quizify" : "I am glad, feel free to write a review!",
    "how do i change my profile" : "Navigate to the profile page using the headings at the top of the page!",
    "when are new quizes coming" : "Soon... Stay tuned!",
    "who made this":"VMI Cadets for a school project!",
    "why are you so stupid" : "I am not a real person, but you should not be rude to me!",
    "how do i create an account" : "You don't! Only certian users are alble to save their progress.",
    "how much does an account cost": "Accounts are free, if you qualify.",
    "what are the qualifications" : "You must be enrolled in an academic institution.",
    "where is quizify hosted" : "GitHub Pages.",
    "why does this exist" : "It is a bad alternative to Quizlet.",
    "you dont know me" : "Yes I do, you are my favorite user.",
    "are you real" : "Who knows?"   
  }

  window.addEventListener("DOMContentLoaded", domLoaded);

  function domLoaded() {
    var chatButton = document.getElementById("chat");
    var chatUI = document.getElementById("chat1");

    chatButton.addEventListener("click", ()=> {

      chatButton.style.display = 'none';
      chatUI.style.display = 'block';


    });

    document.getElementById('x').addEventListener("click", ()=>{
        chatButton.style.display = 'block';
        chatUI.style.display = 'none';
    })
  }

  function chatBot() {

    var query = document.getElementById("question").value.toLowerCase();


    document.getElementById("chatlog").innerHTML += "<b style='color:blue;'>User: </b>" + query + "<br>";

    if(query in response) {
        var answer = response[query];
        document.getElementById("chatlog").innerHTML += "<b style='color:red;'>Bot: </b>" + answer + "<br>";
    }else {
        document.getElementById("chatlog").innerHTML += "<b style='color:red;'>Bot: </b>" + "Sorry, I do not know the answer to that yet." + "<br>";
    }
    document.getElementById("chat1").scrollTo(0, document.getElementById("chat1").scrollHeight);
    document.getElementById('question').value = '';


    }