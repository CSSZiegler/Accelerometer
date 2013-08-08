	
/*****************************************************************
*	Name    : regAccEvent
*	Author  : Kony
*	Purpose : To register acceleration events.
******************************************************************/

	function regAccEvent()
	{
		shakeCount = 0;
		var events = { shake : onshake } ;
		kony.accelerometer.registerAccelerationEvents(events);
		frmRegisterAccelerometer.lblEvent2.text = "Registration is successful, Please shake the device to obtain the shake count.";
	}
	
/*****************************************************************
*	Name    : onshake
*	Author  : Kony
*	Purpose : This is the function registred with 'shake' event and invoked automatically
			  when shake (moving the device) happens.
******************************************************************/

	function onshake()
	{
		shakeCount++;
		frmRegisterAccelerometer.lblEvent3.text = shakeCount.toString();
	}
/*****************************************************************
*	Name    : unRegisterAccEvent
*	Author  : Kony
*	Purpose : To Unregister acceleration events(shake event) that is registered by accelerometer.registeraccelerationevents API.
*******************************************************************/

	function unRegisterAccEvent()
	{		
		var basicProperties = {message:"Unregistered successfully.",alertType : constants.ALERT_TYPE_CONFIRMATION, yesLabel : "OK", noLabel : "Cancel",
			alertHandler : function(){
							if(arguments[0]){
								kony.accelerometer.unregisterAccelerationEvents(["shake"]);
								delete shakeCount;
								frmRegisterAccelerometer.lblEvent3.text = "0";
								frmAclmeter.show();
							}else {
								frmRegisterAccelerometer.show();
							}
							}
						};
		kony.ui.Alert(basicProperties, {});
		//frmRegisterAccelerometer.lblEvent2.text = "Unregistered successfully, Please go back to register again."
	}
	
/******************************************************************
*	Name    : retrieveCurrentAcc
*	Author  : Kony
*	Purpose : To call accelerometer.retrievecurrentacceleration API to retrieve current device acceleration.
*******************************************************************/

	function retrieveCurrentAcc()
	{
		try
		{
			kony.accelerometer.retrieveCurrentAcceleration(onsuccesscallbackretCurrentAcc, onfailurecallbackstartmonitoringAcc);
			frmAclMeter1.btnStopAcc.setVisibility(false);
		}
		catch(e) 
		{
			alert("Accelerometer not supporting");
	    }
	}
	
	
/******************************************************************
*	Name    : onsuccesscallbackretCurrentAcc
*	Author  : Kony
*	Purpose : To display the accelerometerdata in form frmAclMeter1.
			  This is callback function which is invoked automatically by accelerometer.retrievecurrentacceleration API
			  when the retrieval of the current device acceleration is successful.
*******************************************************************/
	
	function onsuccesscallbackretCurrentAcc( accelerometerdata )
	{
		frmAclMeter1.lblX.text = accelerometerdata.x;
		frmAclMeter1.lblY.text = accelerometerdata.y;
		frmAclMeter1.lblZ.text = accelerometerdata.z;
		frmAclMeter1.lblT.text = accelerometerdata.timestamp;
	}
	
/*****************************************************************
*	Name    : onfailurecallbackretCurrentAcc
*	Author  : Kony
*	Purpose : To display an error alert if retrievecurrentacceleration fails.
			  This is callback function which is invoked automatically by accelerometer.retrievecurrentacceleration API
			  when the retrieval of the current device acceleration is unsuccessful/failed.
*******************************************************************/

	function onfailurecallbackretCurrentAcc(error)
	{
		alert("Accelerometer is not supported in the device.");
	}
	
	
	
/******************************************************************
*	Name    : startmonitoringAcc
*	Author  : Kony
*	Purpose : To call accelerometer.startmonitoringacceleration API to 
			  start monitoring the device acceleration or motion.
*******************************************************************/

	function startmonitoringAcc()
	{
		try
		{
			kony.accelerometer.startMonitoringAcceleration(onsuccesscallbackstartmonitoringAcc, onfailurecallbackstartmonitoringAcc, 
		                                                { frequency : 200, onChange : true } );
		    frmAclMeter1.btnStopAcc.setVisibility(true);                                                                                     
		}
		catch (e) 
		{
		// todo: handle exception
			alert("Accelerometer not supporting");
	    }
	}
	
/******************************************************************
*	Name    : onsuccesscallbackstartmonitoringAcc
*	Author  : Kony
*	Purpose : To display the accelerometerdata in form frmAclMeter1.
			  This is the callback function which is invoked by accelerometer.startmonitoringacceleration API
			  When the API call is successful and there is a change in the device acceleration values when the device moves.
*******************************************************************/
	
	function onsuccesscallbackstartmonitoringAcc( startmonitoringdata )
	{
		frmAclMeter1.lblX.text = startmonitoringdata.x;
		frmAclMeter1.lblY.text = startmonitoringdata.y;
		frmAclMeter1.lblZ.text = startmonitoringdata.z;
		frmAclMeter1.lblT.text = startmonitoringdata.timestamp;
	}
	
/******************************************************************
*	Name    : onfailurecallbackstartmonitoringAcc
*	Author  : Kony
*	Purpose : To display an error alert if startmonitoringacceleration fails.
              This is the callback function which is invoked by accelerometer.startmonitoringacceleration API
			  When the API call is unsuccessful
*******************************************************************/

	function onfailurecallbackstartmonitoringAcc( error )
	{
		alert("Accelerometer is not supported in the device.");
		              
	}

/******************************************************************
*	Name    : stopMonitering
*	Author  : Kony
*	Purpose : To call accelerometer.stopmonitoringacceleration API which 
				allows to stop the device monitoring activity if it is active.
*******************************************************************/
	
	function stopMonitering()
	{
		kony.accelerometer.stopMonitoringAcceleration();
		kony.print("onHide event is triggered")
	}

/*****************************************************************
*	Name    : unRegisterAccEvent
*	Author  : Kony
*	Purpose : To Unregister acceleration events(shake event) that is registered by accelerometer.registeraccelerationevents API.
*******************************************************************/

	function onHideDeregister()
	{
		try
		{
			kony.accelerometer.unregisterAccelerationEvents(["shake"]);
			delete shakeCount;
			frmRegisterAccelerometer.lblEvent3.text = "0";
			frmRegisterAccelerometer.lblEvent2.text = "Unregistered successful, Please go back to register again."
		}
		catch (e) 
		{
		// todo: handle exception
			alert("Can not unRegister");
	    }
	}
	