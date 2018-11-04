var quiz = document.getElementById('quiz') 
var qAndA =[
{
	question:'What is Lord Voldemort’s real name?',
	names: 'q1',
	valueA: 'Tom Marvolo Riddle',
	valueB: 'Tom Marvilo Riddle',
	valueC: 'Tom Marvin Riddle',
	valueD: 'Tom Ravolo Riddle',
	numbers: '1/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-1-harry-potter2-movie-screencaps.com-16963.jpg'
},{	
	question:'What is the symbol for the Ravenclaw house?',
	names: 'q2',
	valueA: 'Raven',
	valueB: 'Crow',
	valueC: 'Eagle',
	valueD: 'Hawk',
	numbers: '2/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-6-evannalynchplayslunalovegood1.jpg'
},{	
	question:'According to the Dursleys, how did Harry’s parents die?',
	names: 'q3',
	valueA: 'In a plane crash',
	valueB: 'In a train crash',
	valueC: 'In a bus crash',
	valueD: 'In a car crash',
	numbers: '3/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-3-harry-potter1-disneyscreencaps.com-623.jpg'
},{	
	question:'A person born into a wizarding family who cannot do magic is called…',
	names: 'q4',
	valueA: 'A muggle',
	valueB: 'A half-blood',
	valueC: 'A mudblood',
	valueD: 'A squib',
	numbers: '4/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-9-Screen-Shot-2017-04-21-at-12.04.09-PM.jpg'
},{	
	question:'How many points is the snitch worth in Quidditch?',
	names: 'q5',
	valueA: '100',
	valueB: '150',
	valueC: '200',
	valueD: '250',
	numbers: '5/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-11-Screen-Shot-2017-04-21-at-12.07.47-PM.jpg'
},{	
	question:'What are the three cores Garrick Ollivander uses in his wand-making?',
	names: 'q6',
	valueA: 'Phoenix feathers, dragon heartstring, and unicorn hair',
	valueB: 'Phoenix feathers, dragon tooth, and centaur mane',
	valueC: 'Dragon heartstring, unicorn horn, and centaur mane',
	valueD: 'Phoenix beak, dragon heartstring, unicorn hair',
	numbers: '6/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-8-636211765279648274193615585_harry-potter1-disneyscreencaps.com-3284.jpg'
},{	
	question:'Which brothers are supposedly the original possessors the Deathly Hallows?',
	names: 'q7',
	valueA: 'The Percival brothers',
	valueB: 'The Principe brothers',
	valueC: 'The Possimo brothers',
	valueD: 'The Peverell brothers',
	numbers: '7/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-13-Screen-Shot-2017-04-21-at-12.11.13-PM.jpg'
},{	
	question:'What is Hermione middle name?',
	names: 'q8',
	valueA: 'Jean',
	valueB: 'Melanie',
	valueC: 'Roberta',
	valueD: 'Sarah',
	numbers: '8/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-20-hermione-granger-played-emma-watson.jpg'
},{	
	question:'What are Albus Dumbledore’s siblings’ names?',
	names: 'q9',
	valueA: 'Alastair and Aubrey',
	valueB: 'Antioch and Avrielle',
	valueC: 'Aberforth and Ariana',
	valueD: 'Abel and Ariel',
	numbers: '9/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-15-maxresdefault.jpg'
},{	
	question:'What is the LAST line of Harry Potter and the Deathly Hallows?',
	names: 'q10',
	valueA: '“Harry nodded.”',
	valueB: '“The scar had not pained Harry for 19 years. All was well.”',
	valueC: '“Off to school with you, Albus.”',
	valueD: '“Life was good.”',
	numbers: '10/10',
	img: 'https://static.magiquiz.com/wp-content/uploads/2017/04/resized-14-Harry-Potter-Deathly-Hallows-End.jpg'
},
]
for(var i = 0; i < qAndA.length; i++){
	quiz.innerHTML +=`
	<div class="question-card">
		<p>${qAndA[i].numbers}</p>
		<h1>${qAndA[i].question}</h1>
		<img src="${qAndA[i].img}">
		<div class="input">
			<input type="radio" name="${qAndA[i].names}" value="a">${qAndA[i].valueA}<br>
			<input type="radio" name="${qAndA[i].names}" value="b">${qAndA[i].valueB}<br>
			<input type="radio" name="${qAndA[i].names}" value="c">${qAndA[i].valueC}<br>
			<input type="radio" name="${qAndA[i].names}" value="d">${qAndA[i].valueD}<br>
		</div>
	</div> 
	`
	}
// Onclick function
var button = document.getElementById('button');
button.onclick = function(){
	var score=0;
	var numOfQuestions = 10;
	var ansArr = ['a','c','d','d','b','a','d','a','c','b'];

var q1 = document.forms['quiz']['q1'].value;
var q2 = document.forms['quiz']['q2'].value;
var q3 = document.forms['quiz']['q3'].value;
var q4 = document.forms['quiz']['q4'].value;
var q5 = document.forms['quiz']['q5'].value;
var q6 = document.forms['quiz']['q6'].value;
var q7 = document.forms['quiz']['q7'].value;
var q8 = document.forms['quiz']['q8'].value;
var q9 = document.forms['quiz']['q9'].value;
var q10 = document.forms['quiz']['q10'].value;

// Lykkja sem lætur vita ef gleymist að svara spurningu
for(var i = 1; i <= numOfQuestions; i++){
	if(eval('q' + i) == ''){
		alert('You missed question number '+ i);
	}
}
//Lykkja sem telur stig
	for(var i = 1; i <= numOfQuestions; i++){
		if(eval('q' + i) == ansArr[i - 1]){
			score++;
		}
	}
//Function sem tekur stig og gefur einkunn	
	var something = function(){
	var result = document.getElementById('result');
	var finalWords = document.getElementById('final-words');
	result.innerHTML="<h2>You scored "+ score + " points out of " + numOfQuestions + "</h2>";
	if(score >= 8){
	finalWords.innerHTML="<p>WOW! You are the real deal, Congratulations!</p><img src='http://static2.uk.businessinsider.com/image/596dcbd8efcab976068b4a67-480/harry-potter.png'>";	
	}
	else if(score < 8 && score > 4){
	finalWords.innerHTML="<p>You are almost there!</p><img src='https://i.pinimg.com/736x/dc/10/bc/dc10bcbd525f3eceb5f1caab28b539f2--so-funny-funny-stuff.jpg'>";
	}
	else{
	finalWords.innerHTML="<p>You are a total muggle! Good luck with that!</p><img src='https://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2017021736716/harry-potter-dudley-actor-harry-melling-weight-loss/0-198-94/dudley-dursley-t.jpg'>";
	}
}
	something();
}
