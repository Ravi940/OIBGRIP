function convert() {
	var input = document.getElementById("input").value;
	var select1 = document.getElementById("select1").value;
	var select2 = document.getElementById("select2").value;
	var output = document.getElementById("output");
	
	if (select1 == "celsius") {
		if (select2 == "fahrenheit") {
			output.value = ((input * 9/5) + 32).toFixed(2);
		} else if (select2 == "kelvin") {
			output.value = (parseFloat(input) + 273.15).toFixed(2);
		} else {
			output.value = input;
		}
	} 
    else if (select1 == "fahrenheit"){
        if (select2 == "celsius"){
            output.value = (((input-32)*5)/9).toFixed(2);
        } else if (select2 == "kelvin"){
            output.value = ((parseFloat(input-32)*5/9)+273.15).toFixed(3);
        }else {
            output.value = input;
        }
    }
    else if (select1 == "kelvin"){
        if (select2 == "celsius"){
            output.value = ((input-273.15));
        }else if (select2 == "fahrenheit"){
            output.value = ((input-273.15)*9/5+32).toFixed(3);
        }else{
            output.value = input;
        }
    }
}