$(document).ready(function(){
	var timer=0;
	$("#zar-at").click(function(event){
		$("#zar-at").fadeOut(200);
		$("p").fadeOut(200);
		var zamanlama=setInterval(function(){
			if (timer<6) {
				
				var i=Math.floor(Math.random()*6+1);
				var k=Math.floor(Math.random()*6+1);
				$("#zar1").attr("src","img/sayi"+i+".png");
				$("#zar1").toggleClass("animated shake");
				$("#zar2").attr("src","img/sayi"+k+".png");
				$("#zar2").toggleClass("animated shake");
				timer++;
				if (i==1&&k==1||k==1&&i==1) {
				$("p").text("Hep Yek");
			}
			else if (i==1&&k==2||k==2&&i==1) {
				$("p").text("Yek-i dü");
			}
			else if (i==1&&k==3||k==3&&i==1) {
				$("p").text("Se Yek");
			}
			else if (i==1&&k==4||k==4&&i==1) {
				$("p").text("Cihar-ı Yek");
			}
			else if (i==1&&k==5||k==5&&i==1) {
				$("p").text("Penc-i Yek");
			}
			else if (i==1&&k==6||k==6&&i==1) {
				$("p").text("Şeş-i Yek");
			}
			else if (i==2&&k==2||k==2&&i==2) {
				$("p").text("Dubara");
			}
			else if (i==2&&k==3||k==3&&i==2) {
				$("p").text("Seba-i Dü");
			}
			else if (i==2&&k==4||k==4&&i==2) {
				$("p").text("Cihar-i Dü");
			}
			else if (i==2&&k==5||k==5&&i==2) {
				$("p").text("Penc-i Dü");
			}
			else if (i==2&&k==6||k==6&&i==2) {
				$("p").text("Şeş-i Dü");
			}
			else if (i==3&&k==3||k==3&&i==3) {
				$("p").text("Dü Se");
			}
			else if (i==3&&k==4||k==3&&i==4) {
				$("p").text("Cihar-ü Se");
			}
			else if (i==3&&k==5||k==5&&i==3) {
				$("p").text("Penc-ü Se");
			}
			else if (i==3&&k==6||k==6&&i==3) {
				$("p").text("Şeş-ü Se");
			}
			else if (i==4&&k==4||k==4&&i==4) {
				$("p").text("Dört Cihar");
			}
			else if (i==4&&k==5||k==5&&i==4) {
				$("p").text("Beş Dört");
			}
			else if (i==4&&k==6||k==6&&i==4) {
				$("p").text("Şeş Cihar");
			}
			else if (i==5&&k==5||k==5&&i==5) {
				$("p").text("Dü Beş");
			}
			else if (i==5&&k==6||k==6&&i==5) {
				$("p").text("Şeş Beş");
			}
			else if (i==6&&k==6||k==6&&i==6) {
				$("p").text("Dü Şeş");
			}

			}
			else{
			clearInterval(zamanlama);
			$("#zar-at").fadeIn(1000);
			$("p").fadeIn(1000);
			
			
			timer=0;

			}
		}, 1000);
		
	});

});