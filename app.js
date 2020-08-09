function check(){
    var score = 0;
    var right_answer_q1= document.getElementById('q1-a2');
    var q1_answer_2 = document.getElementById('q1-a1');
    var q1_answer_3 = document.getElementById('q1-a3');
    var q1_answer_4 = document.getElementById('q1-a4');

    if(right_answer_q1.checked==true){
        score++;
        alert("Q1: Right Answer");
    }
    else{
        alert("Q1: Wrong Answer");
    }

    var right_answer_q2= document.getElementById('q2-b1');
    var q2_answer_2 = document.getElementById('q2-b2');
    var q2_answer_3 = document.getElementById('q2-b3');
    var q2_answer_4 = document.getElementById('q2-b4');

    if(right_answer_q2.checked==true){
        score++;
        alert("Q2: Right Answer");
    }
    else{
        alert("Q2: Wrong Answer");
    }

    var right_answer_q3= document.getElementById('q3-c2');
    var q3_answer_2 = document.getElementById('q3-c1');
    var q3_answer_3 = document.getElementById('q3-c3');
    var q3_answer_4 = document.getElementById('q3-c4');

    if(right_answer_q3.checked==true){
        score++;
        alert("Q3: Right Answer");
    }
    else{
        alert("Q3: Wrong Answer");
    }

    var right_answer_q4= document.getElementById('q4-d1');
    var q4_answer_2 = document.getElementById('q4-d2');
    var q4_answer_3 = document.getElementById('q4-d3');
    var q4_answer_4 = document.getElementById('q4-d4');

    if(right_answer_q4.checked==true){
        score++;
        alert("Q4: Right Answer");
    }
    else{
        alert("Q4: Wrong Answer");
    }

    var right_answer_q5= document.getElementById('q5-e2');
    var q5_answer_2 = document.getElementById('q5-e1');
    var q5_answer_3 = document.getElementById('q5-e3');
    var q5_answer_4 = document.getElementById('q5-e4');

    if(right_answer_q5.checked==true){
        score++;
        alert("Q5:Right Answer");
    }
    else{
        alert("Q5:Wrong Answer");
    }

    var right_answer_q6= document.getElementById('q6-f1');
    var q6_answer_2 = document.getElementById('q6-f2');
    var q6_answer_3 = document.getElementById('q6-f3');
    var q6_answer_4 = document.getElementById('q6-f4');

    if(right_answer_q6.checked==true){
        score++;
        alert("Q6: Right Answer");
    }
    else{
        alert("Q6: Wrong Answer");
    }

    var right_answer_q7= document.getElementById('q7-g3');
    var q7_answer_2 = document.getElementById('q7-g1');
    var q7_answer_3 = document.getElementById('q7-g2');
    var q7_answer_4 = document.getElementById('q7-g4');

    if(right_answer_q7.checked==true){
        score++;
        alert("Q7: Right Answer");
    }
    else{
        alert("Q7: Wrong Answer");
    }

    var right_answer_q8= document.getElementById('q8-h1');
    var q8_answer_2 = document.getElementById('q8-h2');
    var q8_answer_3 = document.getElementById('q8-h3');
    var q8_answer_4 = document.getElementById('q8-h4');

    if(right_answer_q8.checked==true){
        score++;
        alert("Q8: Right Answer");
    }
    else{
        alert("Q8: Wrong Answer");
    }

    var right_answer_q9= document.getElementById('q9-i3');
    var q9_answer_2 = document.getElementById('q9-i1');
    var q9_answer_3 = document.getElementById('q9-i2');
    var q9_answer_4 = document.getElementById('q9-i4');

    if(right_answer_q9.checked==true){
        score++;
        alert("Q9: Right Answer");
    }
    else{
        alert("Q9: Wrong Answer");
    }


    var right_answer_q10= document.getElementById('q10-j2');
    var q10_answer_2 = document.getElementById('q10-j1');
    var q10_answer_3 = document.getElementById('q10-j3');
    var q10_answer_4 = document.getElementById('q10-j4');

    if(right_answer_q10.checked==true){
        score++;
        alert("Q10: Right Answer");
    }
    else{
        alert("Q10: Wrong Answer");
    }
   alert("Your Score is " + score++);
}