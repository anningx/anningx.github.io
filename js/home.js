// JavaScript Document

$(document).ready(function(){

$("#jMenu").jMenu({
	  openClick : false,
	  ulWidth : 'auto',
	  effects : {
		effectSpeedOpen : 150,
		effectSpeedClose : 150,
		effectTypeOpen : 'slide',
		effectTypeClose : 'slide',
		effectOpen : 'linear',
		effectClose : 'linear'
	  },
	  TimeBeforeOpening : 100,
	  TimeBeforeClosing : 11,
	  animatedText : false,
	  paddingLeft: 1,
	   ulWidth : 'auto',
      effects : {
        effectSpeedOpen : 300,
        effectTypeClose : 'slide'
      },
      animatedText : false
	});
        }); 