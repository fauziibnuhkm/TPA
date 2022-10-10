var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_b").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_t").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi > 30) {
		keterangan = "Obesity.";
	}else if ((bmi >= 25) & (bmi <= 29.9)){
		keterangan = "Overwight.";
	}else if ((bmi >= 18.5) & (bmi <= 24.9)){
		keterangan = "Normal Weight.";
	} else if (bmi <= 18.4){
		keterangan = "Under Weight.";
	}else {
		keterangan = "";
	}
	document.getElementById('bmi').innerHTML = "Your BMI is: <b>"  + bmi.toFixed(1) + "</b> which means You are <b>" + keterangan + "</b>";
}