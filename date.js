let d = new Date();
let ChoseDay = d.getDay() + 1;
let Day;

switch(ChoseDay) {
	case 1:
		Day = "Mon";
		break;
	case 2:
		Day = "Tues";
		break;
	case 3:
		Day = "Wed";
		break;
	case 4:
		Day = "Thur";
		break;
	case 5:
		Day = "Fri";
		break;
	case 6:
		Day = "Sat";
		break;
	case 7:
		Day = "Sun";
		break;
	default:
		console.log("Unable to display date");
}
