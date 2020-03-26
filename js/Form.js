class Form {

  constructor() {    
    this.input = createInput();
    this.button = createButton('YES');
    this.button1 = createButton('NO');
    this.button2 = createButton('YES');
    this.button3 = createButton('NO');
    this.button4 = createButton('POLICE');
    this.button5 = createButton('SOLDIER');
    this.button6 = createButton('100');
    this.button7 = createButton('500');
    this.button8 = createButton('MORE');
    this.button9= createButton('YES');
    this.button10 = createButton('NO');
    this.button11= createButton('YES');
    this.button12 = createButton('NO');
    this.greeting = createElement('h1');
     this.title = createElement('h2')
  }
  hide()
  {
    this.button.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
    this.button11.hide();
    this.button12.hide();
  }

  display(){

    //set size for text
    textSize(19);
    //conduting survey questions using test
   text("Q1:. Do you think we need to have free lunch meals in our school canteen for the kids who are very very poor.",displayWidth/18,displayHeight/8);
   text("Q2.  Would you be willing to contribute a small amount every month for such a program?",displayWidth/18,displayHeight/5)
   text("Q4.  How much per month would you be willing to pay?",displayWidth/16-10,displayHeight/3+10)
   text("Q3.  What would chose if you are have a chance to become_ _ _ _ _ _ ",displayWidth/16-10,displayHeight/2-170);
   text("Q5.  Do you think we need to have a medical tests for poor people?",displayWidth/16-20+8,displayHeight/2-60)
   text("Q5.  Do you think we need to have an untalented teachers in school?",displayWidth/16-20+8,displayHeight/2)
  
   //text for name
   text("WRITE YOUR NAME HERE",70,20);

   //title of the survey                                                                         
    this.title.html(" A SURVEY TO BRING ABOUT CHANGE.");                                                        
    this.title.position(displayWidth/2 - 200, 0);
        
    //greeting after completing survey
    this.greeting.html("*(--;'THANK YOU FOR PARTICIPATED IN THIS SURVEY';--)*");
     this.greeting.position(displayWidth/5,displayHeight-250);
    
     //giving position to the input
    this.input.position(displayWidth/6 - 140 , displayHeight/6- 80);

    //giving position to the buttons
    this.button.position(displayWidth/16, displayHeight/5 - 40);                                                                
    this.button1.position(displayWidth/8, displayHeight/5 - 40);
    this.button2.position(displayWidth/16, displayHeight/4 - 10);                                                                
    this.button3.position(displayWidth/8, displayHeight/4 - 10);
    this.button4.position(displayWidth/16, displayHeight/3 - 20);                                                                
    this.button5.position(displayWidth/8, displayHeight/3 - 20);
    this.button6.position(displayWidth/8, displayHeight/3 + 30);
    this.button7.position(displayWidth/16, displayHeight/3 + 30);                                                                
    this.button8.position(displayWidth/4 - 80, displayHeight/3 + 30);
    this.button9.position(displayWidth/16, displayHeight/2 - 40);                                                                
    this.button10.position(displayWidth/8, displayHeight/2 - 40);
    this.button11.position(displayWidth/16, displayHeight/2 +20);                                                                
    this.button12.position(displayWidth/8, displayHeight/2  + 20);
    this.button.mousePressed(()=>{
    this.button1.hide();
    textSize(20);
    text("YES",1000,130);
   })
   this.button1.mousePressed(()=>{
    this.button.hide();
    textSize(20);
    text("NO",1000,130);
   })
   this.button2.mousePressed(()=>{
    this.button3.hide();
    textSize(20);
    text("YES",1000,190);
   })
   this.button3.mousePressed(()=>{
    this.button2.hide();
    textSize(20);
    text("NO",1000,190);
   })
   this.button4.mousePressed(()=>{
    this.button5.hide();
    textSize(20);
    text("POLICE",1000,250);
   })
   this.button5.mousePressed(()=>{
    this.button4.hide();
    textSize(20);
    text("SOLDIER",1000,250);
   })
   this.button9.mousePressed(()=>{
    this.button10.hide();
    textSize(20);
    text("YES",1000,370);
   })
   this.button10.mousePressed(()=>{
    this.button9.hide();
    textSize(20);
    text("NO",1000,370);
   })
   this.button6.mousePressed(()=>{
    this.button7.hide();
    this.button8.hide();
    textSize(20);
    text("100",1000,310);
   })
   this.button7.mousePressed(()=>{
    this.button8.hide();
    this.button6.hide();
    textSize(20);
    text("500",1000,310);
   })
   this.button8.mousePressed(()=>{
    this.button7.hide();
    this.button6.hide();
    textSize(20);
    text("MORE",1000,310);
   })
   this.button11.mousePressed(()=>{
    this.button12.hide();
    textSize(20);
    text("YES",1000,430);
   })
   this.button12.mousePressed(()=>{
    this.button11.hide();
    textSize(20);
    text("NO",1000,430);
   })
  }

}   
  
  
  

