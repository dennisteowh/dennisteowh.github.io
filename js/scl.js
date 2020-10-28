function delay(t) {
  setTimeout('initFadeIn()', t);
}

function initFadeIn() {
  $("body").css("visibility", "visible");
  $("body").fadeIn(300);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructionsIntentionH = slide({
    name : "instructionsIntentionH",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructionsIntentionR = slide({
    name : "instructionsIntentionR",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.conditionOne = slide({
    name : "conditionOne",
    start: function() {

      document.getElementById('myVideo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('myVideo').play()


     // exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionTwo = slide({
    name : "conditionTwo",
    start: function() {

      document.getElementById('myVideo2').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
    
      document.getElementById('myVideo2').play()
      //  exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionThree = slide({
    name : "conditionThree",
    start: function() {

      document.getElementById('myVideo3').addEventListener('ended',myHandler,false);
      function myHandler(e) {

        exp.go();// What you want to do after the event
    }
  },
  button : function() {
    document.getElementById('myVideo3').play()
    //exp.go(); //use exp.go() if and only if there is no "present" data.
  } // remove for actual

  });

  slides.conditionFour = slide({
    name : "conditionFour",
    start: function() {

      document.getElementById('myVideo4').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('myVideo4').play()
      
      //exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });



slides.intentionH = slide({
  name : "intentionH",
  trial_num: 1, // counter to record trial number within block

  /* trial information for this block
   (the variable 'stim' will change between each of these values,
    and for each of these, present_handle will be run.) */
  present : [
    {sentence: "What is the likelihood that moving towards the door caused it to open?"}, //cause
    {sentence: "Did pushing the button cause the door to open?"}, // cause
    {sentence: "How likely is it that Brock intentionally opened the door?"}, //intention
    {sentence: "How likely is it that Brock knew how to open the door?"}, //knowledge
    {sentence: "Did the beeping sound cause the door to close?"}, //cause
    {sentence: "Was Brock aiming to open the door?"}, //goal
    {sentence: "Was Brock aiming to hear beeping sound?"} //goal
  ],

  //this gets run only at the beginning of the block
  present_handle : function(stim) {
    $(".err").hide();
    this.stim = stim; //I like to store this information in the slide so I can record it later.
    this.startTime = Date.now();

    $(".prompt").html(stim.sentence);
    //erase current value
    document.getElementById('opt1H').checked = false;
    document.getElementById('opt2H').checked = false;
    document.getElementById('opt3H').checked = false;
    document.getElementById('opt4H').checked = false;
    document.getElementById('opt5H').checked = false;
    document.getElementById('opt6H').checked = false;
    document.getElementById('opt7H').checked = false;

  },

  button : function() {

    if($('input[name=assess]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      /* use _stream.apply(this); if and only if there is
      "present" data. (and only *after* responses are logged) */
      _stream.apply(this);
    }

  },

  log_responses : function() {
    exp.data_trials.push({
      "trial_type" : "intention",
      "trial_num": this.trial_num,
      "RT": this.RT,
      "sentence": this.stim.sentence,
      "response" : $('input[name="assess"]:checked').val()
    });
    this.trial_num++
  }
});



slides.intentionR = slide({
  name : "intentionR",
  trial_num: 1, // counter to record trial number within block

  /* trial information for this block
   (the variable 'stim' will change between each of these values,
    and for each of these, present_handle will be run.) */
  present : [
    {sentence: "What is the likelihood that moving towards the door caused it to open?"}, //cause
    {sentence: "Did pushing the button cause the door to open?"}, // cause
    {sentence: "How likely is it that Brock-bot intentionally opened the door?"}, //intention
    {sentence: "How likely is it that Brock-bot knew how to open the door?"}, //knowledge
    {sentence: "Did the beeping sound cause the door to close?"}, //cause
    {sentence: "Was Brock-bot aiming to open the door?"}, //goal
    {sentence: "Was Brock-bot aiming to hear beeping sound?"} //goal
  ],

  //this gets run only at the beginning of the block
  present_handle : function(stim) {
    $(".err").hide();
    this.stim = stim; //I like to store this information in the slide so I can record it later.
    this.startTime = Date.now();

    $(".prompt").html(stim.sentence);
    //erase current value
    document.getElementById('opt1R').checked = false;
    document.getElementById('opt2R').checked = false;
    document.getElementById('opt3R').checked = false;
    document.getElementById('opt4R').checked = false;
    document.getElementById('opt5R').checked = false;
    document.getElementById('opt6R').checked = false;
    document.getElementById('opt7R').checked = false;

  },

  button : function() {

    if($('input[name=assess]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      /* use _stream.apply(this); if and only if there is
      "present" data. (and only *after* responses are logged) */
      _stream.apply(this);
    }

  },

  log_responses : function() {
    exp.data_trials.push({
      "trial_type" : "intention",
      "trial_num": this.trial_num,
      "RT": this.RT,
      "sentence": this.stim.sentence,
      "response" : $('input[name="assess"]:checked').val()
    });
    this.trial_num++
  }
});



slides.subj_info =  slide({
  name : "subj_info",
  submit : function(e){
    //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
    exp.subj_data = {
      language : $("#language").val(),
      enjoyment : $("#enjoyment").val(),
      hit : $('input[name="hit"]:checked').val(),
      attention : $('input[name="attention"]:checked').val(),
      age : $("#age").val(),
      gender : $("#gender").val(),
      education : $("#education").val(),
      comments : $("#comments").val(),
      problems: $("#problems").val(),
      fairprice: $("#fairprice").val()
    };

    if(!Number.isNaN(parseInt($("#age").val())) || $("#age").val() == "") {

      exp.go(); //use exp.go() if and only if there is no "present" data.
    } else {

      $(".err").show();
    }
    
  }
});




  //////////////////////////////

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  // simple language comprehension check to include at beginning of experiment
  slides.botcaptcha = slide({
     name : "botcaptcha",
     bot_trials : 0,
     start: function() {
       $("#error").hide();
       $("#error_incorrect").hide();
       $("#error_2more").hide();
       $("#error_1more").hide();
       // list of speaker names to be sampled from
       speaker = _.sample(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]);
       // list of listener names to be sampled from
       listener = _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]);
       // create the utterance
       this.bot_utterance = speaker + " says to " + listener + ": It's a beautiful day, isn't it?"
       // creat ethe question
       this.bot_question = "Who is " + speaker + " talking to?"
       // append the utterance and the question to the view
       var bot_sentence = document.createElement("p");
       var bot_question = document.createElement("p");
       var content = document.createTextNode(this.bot_utterance);
       var q_content = document.createTextNode(this.bot_question);
       bot_sentence.name = "bot_sentence";
       bot_question.name = "bot_question";
       bot_sentence.appendChild(content);
       bot_question.appendChild(q_content);
       document.getElementById('bot_context').appendChild(bot_sentence);
       document.getElementById('bot_context').appendChild(document.createElement("br"));
       document.getElementById('bot_context').appendChild(bot_question);
       document.getElementById('bot_context').appendChild(document.createElement("br"));

     },
     button: function() {
       // get the participants' input
       bot_response = $("#botresponse").val();
       // append data if response correct
       if (bot_response.toLowerCase() == listener.toLowerCase()) {
         exp.catch_trials.push({
           condition: "botcaptcha",
           n_fails: this.bot_trials,
           response: bot_response,
           bot_sentence: this.bot_utterance,
           bot_question: this.bot_question
         });
         exp.go();
         // gives participant two more trials if the response was incorrect
       } else {
         this.bot_trials++;
         $("#error_incorrect").show();
         if (this.bot_trials == 1) {
             $("#error_2more").show();
         } else if (this.bot_trials == 2) {
             $("#error_2more").hide();
             $("#error_1more").show();
         } else {
           // if participant fails, they cannot proceed
             $("#error_incorrect").hide();
             $("#error_1more").hide();
             $("#bot_button").hide();
             $('#botresponse').prop("disabled", true);
             $("#error").show();
         };
       }
     }
  });


  return slides;
}

/// init ///
function init() {

  //; support for uniqueturker
  // https://uniqueturker.myleott.com
  /*
  repeatWorker = false;
  (function(){
      var ut_id = "[INSERT uniqueTurkerID]";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  */

  exp.trials = [];
  exp.catch_trials = [];
  exp.condition = _.sample(["condition 1", "condition 2", "condition 3", "condition 4"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  if (exp.condition == "condition 1"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "conditionOne",
      "instructionsIntentionH",
      "intentionH",
      "subj_info",
      "thanks"
    ];

  }  else if (exp.condition == "condition 2"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "conditionTwo",
      "instructionsIntentionH",
      "intentionH",
      "subj_info",
      "thanks"
    ];

  } else if (exp.condition == "condition 3"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "conditionThree",
      "instructionsIntentionR",
      "intentionR",
      "subj_info",
      "thanks"
    ];

  } else {

    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "conditionFour",
      "instructionsIntentionR",
      "intentionR",
      "subj_info",
      "thanks"
    ];

  }
  

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });


  // Extra check for US IP addresses
  // TO DO: add support for Canadian IP addresses
  /*
  function USOnly() {
    var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';
     $.ajax({
       url: 'https://geo.ipify.org/api/v1?apiKey=at_nuIzsEIQJAft6sr1WH67UTfFDeMIO',
       dataType: 'jsonp',
       success: function(json) {
       if (json.location.country != 'US') {
         var slides = document.getElementsByClassName('slide');
         for (i=0; i<slides.length; i++) {
          slides[i].style.display = 'none';
         }
          document.getElementsByClassName('progress')[0].style.display = 'none';
          document.getElementById('unique').innerText = "This HIT is only available to workers in the United States. Please click 'Return' to avoid any impact on your approval rating.";
        }
      }
     });
  }
  */

  exp.go(); //show first slide
  //USOnly(); // check US IP address

}


