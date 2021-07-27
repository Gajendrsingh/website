var messages = {};

messages['no_free_minutes'] = 'Currently, there is no free minutes available for direction: {1}. Come back later';
messages['free_personal_call_limit_exceed'] = 'You reached the limit of free calls for now. Come back later'
messages['free_direction_notsupported'] = 'There are no free minutes for direction. Come back later';
messages['free_call_limit_exceed'] = 'The limit of free calls is temporarily exhausted. Come back later';

messages['operation_status_unsupported_call_direction'] = 'Call direction is not supported';
messages['invalid_phone_number'] = 'Invalid phone number. Enter the phone number in the international format';
messages['unsupported_direction'] = 'Invalid phone number. Enter the phone number in the international format';

messages['acess_to_mic'] = 'We need to access your microphone in order to place calls.<br />Just select <strong>Allow</strong>.';
messages['check_remember'] = 'Check <strong>Remember</strong> and we will not bother you with this dialog ever again.<br />Click <strong>Close</strong> to finish the process.';
messages['enter_phone_free_call'] = 'Enter a phone number in international format to make the free call.';
messages['enter_phone_paid_call'] = 'Enter a phone number in international format to make the paid call.';
messages['time_left'] = 'Time left: ';
messages['need_flash_player'] = 'Get latest version of <a href="https://support.google.com/chrome/answer/95346?hl=en" rel="nofollow" style="color: white;text-decoration:underline">Google Chrome</a> to proceed';

messages['price_per_minute'] = "Price per minute call to {1} is $ {2}. You can talk for {3} minutes.";
messages['direction_name'] = "Direction name: {1}. You can talk for {2} seconds.";
messages['microphone_not_found'] = 'Microphone is not found';
messages['needs_access_to_microphone'] = 'Allow access to the microphone';

messages['connection_impossible'] = 'Connection is impossible. Check phone number';
messages['connection_failed'] = 'Connection failed';
messages['not_enought_funds'] = 'Insufficient funds to make paid call';
messages['call_my_phone_check_number'] = 'You entered an invalid phone number. Enter your phone number in international format. Example for USA +1(201)3832112';

messages['busy'] = 'Phone is busy, call back later'
messages['bad_responce'] = 'Unable to establish a connection, most likely you entered invalid number. If the number is correct, please contact us at support@call2friends.com'
messages['phone_number_is_blocked'] = 'Phone number is blocked, please contact support';
messages['phone_number_is_restricted'] = 'Your account is restricted from calling this direction. To open it up please contact our technical support.'


function localize() {
	var msg = arguments[0];
	
	for(var i=1; i<arguments.length; i++) {
		msg = msg.replace('{' + i + '}', arguments[i]);
	}
	return msg;
}