
function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	//Create an instance of Notyf 
var notyf = new Notyf();
 
//Display an alert notification 
notyf.confirm('Witaj W aplikacji TwojaForma!');
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {
var notyf1 = new Notyf();
 
//Display an alert notification 
notyf1.confirm('Witaj W aplikacji TwojaForma!');
}

$('#calendar').fullCalendar({
	schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
});

$('#calendar').fullCalendar({
    defaultView: 'timelineMonth',
    events: [
        // events go here
    ],
    resources: [
        // resources go here
    ]
    // other options go here...
});