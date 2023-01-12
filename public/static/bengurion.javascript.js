


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
