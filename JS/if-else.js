function checkAge(age){
    if(age>=18){
        console.log("you are old enough to vote");
    }else{
        console.log("you should be more than 18 years old to do vote")
    }
}
checkAge(10);
checkAge(30);

// nested if-else
function checkGrade(score){
    let grade;
    if(score>=90){
        grade ="A";
    }else{
        if(score>=80){
            grade="B";
        }else{
            if(score>=60){
                grade="C";
            }else{
                if(score>=50){
                    grade="D"
                }
            }
        }
    }
    console.log(grade);
}
checkGrade(80);
checkGrade(52);