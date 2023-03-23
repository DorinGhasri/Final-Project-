// Hide button until box is checked in consent page
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('myButton');
if (checkbox !== null){
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
    });
}

//check if review has already been given for this course
const input = document.getElementById('CourseNameInput');
const CourseButton = document.getElementById('submitCourseName');
if(input !== null){
input.addEventListener('input', function() {
    if (this.value !== '') {
        CourseButton.style.display = 'block';
    } else {
        CourseButton.style.display = 'none';
    }
  });
}



//make sure one of the two is chosen: star rating1 or checkbox1
const starRating1 = document.getElementById("starRating1");
const checkbox1 = document.getElementById("StarCheckbox1");

if(starRating1 !== null || checkbox1!== null ){
    starRating1.addEventListener("click", () => {
    checkbox1.checked = false;
    });

    checkbox1.addEventListener("click", () => {
    const stars1 = starRating1.querySelectorAll("i");
    stars1.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output1').value = null;
    });

        // add this code if you want to require the user to select at least one option
        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
        if (!checkbox1.checked && !starRating1.querySelector(".is-active")) {
            event.preventDefault();
            
        }
    });
}




//make sure one of the two is chosen: star rating2 or checkbox2
const starRating2 = document.getElementById("starRating2");
const checkbox2 = document.getElementById("StarCheckbox2");

if(starRating2 !== null || checkbox2!== null ){
    starRating2.addEventListener("click", () => {
    checkbox2.checked = false;
    });

    checkbox2.addEventListener("click", () => {
    const stars2 = starRating2.querySelectorAll("i");
    stars2.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output2').value = null;
    });

    // add this code if you want to require the user to select at least one option
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
    if (!checkbox2.checked && !starRating2.querySelector(".is-active")) {
        event.preventDefault();
        
    }
});
}



//make sure one of the two is chosen: star rating3 or checkbox3
const starRating3 = document.getElementById("starRating3");
const checkbox3 = document.getElementById("StarCheckbox3");

if(starRating3 !== null || checkbox3!== null ){
    starRating3.addEventListener("click", () => {
    checkbox3.checked = false;
    });

    checkbox3.addEventListener("click", () => {
    const stars3 = starRating3.querySelectorAll("i");
    stars3.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output3').value = null;
    });

    // add this code if you want to require the user to select at least one option
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
    if (!checkbox3.checked && !starRating3.querySelector(".is-active")) {
        event.preventDefault();
        
    }
});
}


//make sure one of the two is chosen: star rating4 or checkbox4
const starRating4 = document.getElementById("starRating4");
const checkbox4 = document.getElementById("StarCheckbox4");

if(starRating4 !== null || checkbox4!== null ){
    starRating4.addEventListener("click", () => {
    checkbox4.checked = false;
    });

    checkbox4.addEventListener("click", () => {
    const stars4 = starRating4.querySelectorAll("i");
    stars4.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output4').value = null;
    });

    // add this code if you want to require the user to select at least one option
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
    if (!checkbox4.checked && !starRating4.querySelector(".is-active")) {
        event.preventDefault();
       
    }
});
}


//make sure one of the two is chosen: star rating5 or checkbox5
const starRating5 = document.getElementById("starRating5");
const checkbox5 = document.getElementById("StarCheckbox5");

if(starRating5 !== null || checkbox5!== null ){
    starRating5.addEventListener("click", () => {
    checkbox5.checked = false;
    });

    checkbox5.addEventListener("click", () => {
    const stars5 = starRating5.querySelectorAll("i");
    stars5.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output5').value = null;
    });

    // add this code if you want to require the user to select at least one option
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
    if (!checkbox5.checked && !starRating5.querySelector(".is-active")) {
        event.preventDefault();
        
    }
});
}




//make sure one of the two is chosen: star rating6 or checkbox6
const starRating6 = document.getElementById("starRating6");
const checkbox6 = document.getElementById("StarCheckbox6");

if(starRating6 !== null || checkbox6!== null ){
    starRating6.addEventListener("click", () => {
    checkbox6.checked = false;
    });

    checkbox6.addEventListener("click", () => {
    const stars6 = starRating6.querySelectorAll("i");
    stars6.forEach((star) => (star.classList.remove("is-active")));
    document.querySelector('#output6').value = null;
    });

    // add this code if you want to require the user to select at least one option
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
    if (!checkbox6.checked && !starRating6.querySelector(".is-active")) {
        event.preventDefault();
        
    }
});
}


 // add this code if you want to require the user to select at least one option
 const form = document.querySelector("form");
 form.addEventListener("submit", (event) => {
 if ((!checkbox1.checked && !starRating1.querySelector(".is-active")) || (!checkbox2.checked && !starRating2.querySelector(".is-active"))
 || (!checkbox3.checked && !starRating3.querySelector(".is-active")) || (!checkbox4.checked && !starRating4.querySelector(".is-active"))
 ||(!checkbox5.checked && !starRating5.querySelector(".is-active")) || (!checkbox6.checked && !starRating6.querySelector(".is-active"))) {
     alert("אנא מלא את כלל הסעיפים");
 }
});







// star function
(function() {
    if (typeof document !== 'undefined') {

        //RATING 1
        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star1');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star1"));
                        //output current clicked star value
                        document.querySelector('#output1').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star1');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star1"));
                        //output current clicked star value
                        document.querySelector('#output1').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star1-'+pre).classList.contains('is-active')){
                                document.querySelector('.star1-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star1');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star1"));
                        //output current clicked star value
                        document.querySelector('#output1').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star1-'+pre).classList.contains('is-active')){
                                document.querySelector('.star1-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star1-'+succ).classList.contains('is-active')){
                                document.querySelector('.star1-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })



        //RATING 2

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star2');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star2"));
                        //output current clicked star value
                        document.querySelector('#output2').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star2');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star2"));
                        //output current clicked star value
                        document.querySelector('#output2').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star2-'+pre).classList.contains('is-active')){
                                document.querySelector('.star2-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star2');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star2"));
                        //output current clicked star value
                        document.querySelector('#output2').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star2-'+pre).classList.contains('is-active')){
                                document.querySelector('.star2-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star2-'+succ).classList.contains('is-active')){
                                document.querySelector('.star2-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })




        //RATING 3

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star3');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star3"));
                        //output current clicked star value
                        document.querySelector('#output3').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star3');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star3"));
                        //output current clicked star value
                        document.querySelector('#output3').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star3-'+pre).classList.contains('is-active')){
                                document.querySelector('.star3-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star3');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star3"));
                        //output current clicked star value
                        document.querySelector('#output3').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star3-'+pre).classList.contains('is-active')){
                                document.querySelector('.star3-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star3-'+succ).classList.contains('is-active')){
                                document.querySelector('.star3-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })




        //RATING 4

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star4');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star4"));
                        //output current clicked star value
                        document.querySelector('#output4').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star4');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star4"));
                        //output current clicked star value
                        document.querySelector('#output4').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star4-'+pre).classList.contains('is-active')){
                                document.querySelector('.star4-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star4');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star4"));
                        //output current clicked star value
                        document.querySelector('#output4').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star4-'+pre).classList.contains('is-active')){
                                document.querySelector('.star4-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star4-'+succ).classList.contains('is-active')){
                                document.querySelector('.star4-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })





        //RATING 5

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star5');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star5"));
                        //output current clicked star value
                        document.querySelector('#output5').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star5');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star5"));
                        //output current clicked star value
                        document.querySelector('#output5').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star5-'+pre).classList.contains('is-active')){
                                document.querySelector('.star5-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star5');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star5"));
                        //output current clicked star value
                        document.querySelector('#output5').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star5-'+pre).classList.contains('is-active')){
                                document.querySelector('.star5-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star5-'+succ).classList.contains('is-active')){
                                document.querySelector('.star5-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })





        //RATING 6

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star6');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star6"));
                        //output current clicked star value
                        document.querySelector('#output6').value = cs;
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star6');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star6"));
                        //output current clicked star value
                        document.querySelector('#output6').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star6-'+pre).classList.contains('is-active')){
                                document.querySelector('.star6-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop
                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })

        document.addEventListener('DOMContentLoaded', function(){
            (function(){
                let sr = document.querySelectorAll('.my-star6');
                let i = 0;
                //loop through stars
                while (i < sr.length){
                    //attach click event
                    sr[i].addEventListener('click', function(){
                        //current star
                        let cs = parseInt(this.getAttribute("data-star6"));
                        //output current clicked star value
                        document.querySelector('#output6').value = cs;
                        /*our first loop to set the class on preceding star elements*/
                        let pre = cs; //set the current star value
                        //loop through and set the active class on preceding stars
                        while(1 <= pre){
                            //check if the classlist contains the active class, if not, add the class
                            if(!document.querySelector('.star6-'+pre).classList.contains('is-active')){
                                document.querySelector('.star6-'+pre).classList.add('is-active');
                            }
                            //decrement our current index
                            --pre;
                        }//end of first loop

                        /*our second loop to unset the class on succeeding star elements*/ 
                        //loop through and unset the active class, skipping the current star
                        let succ = cs+1;
                        while(5 >= succ){
                            //check if the classlist contains the active class, if yes, remove the class
                            if(document.querySelector('.star6-'+succ).classList.contains('is-active')){
                                document.querySelector('.star6-'+succ).classList.remove('is-active');
                            }
                            //increment current index
                            ++succ;
                        }

                    })//end of click event
                    i++;
                }//end of while loop
            })();//end of function
        })


    }
})();

