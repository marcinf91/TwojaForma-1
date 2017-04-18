function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	
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