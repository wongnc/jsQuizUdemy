function submitAnswers(){
	var total = 6;
	var score = 0;
	
	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	
	//Validate question loop	
	for(i = 1; i <=total; i++){
		if (eval('q'+i) == null || eval('q'+i) == ''){
			alert ('You missed question ' + i);
			return false;
		};
	};
	
	//Set answer array
	var answers = ["c","a","c","a","c","a"];
	
	//Check answers
	for (i = 1; i <=total; i++){
		if (eval('q'+i) == answers[i-1]){
			score++;
		};	
	};
	
	//Display result
	var result = document.getElementById('results')
	results.innerHTML = '<h3>You scored <span> '+score+' </span>/ <span>'+total+'</span></h3>';
	
	//not submit form to server but still allow enter
	return false;
};