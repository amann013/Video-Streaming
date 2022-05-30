function myFunction(m){

	var n3 = document.getElementById("n3");
	var n2 = document.getElementById("n2");
	var n1 = document.getElementById("n1");

	if(m===1){
		window.location="video1.html"
	}
	if(m===2){
		window.location="video2.html"
	}
	if(m===3){
		window.location="video3.html"
	}
	if(m===4){
		window.location="video4.html"
	}
	if(m===5){
		window.location="video5.html"
	}
	if(m===6){
		window.location="video6.html"
	}
	if(m===7){
		var input, filter, ul, li, a, i, n1;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        n1 = document.getElementById("n1");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                n1.getElementsByClassName("n1")[i].style.display = "block";
                n2.getElementsByClassName("n2")[0].style.display = "none";
                n3.getElementsByClassName("n3")[0].style.display = "none";
		        n3.getElementsByClassName("n3")[1].style.display = "none";
		        n3.getElementsByClassName("n3")[2].style.display = "none";
		        n3.getElementsByClassName("n3")[3].style.display = "none";
		        n3.getElementsByClassName("n3")[4].style.display = "none";
		        n3.getElementsByClassName("n3")[5].style.display = "none";
            } else {
        n1.getElementsByClassName("n1")[i].style.display = "none";
        n2.getElementsByClassName("n2")[0].style.display = "none";
        n3.getElementsByClassName("n3")[0].style.display = "none";
		n3.getElementsByClassName("n3")[1].style.display = "none";
		n3.getElementsByClassName("n3")[2].style.display = "none";
		n3.getElementsByClassName("n3")[3].style.display = "none";
		n3.getElementsByClassName("n3")[4].style.display = "none";
		n3.getElementsByClassName("n3")[5].style.display = "none";
    }
  }
	}
	}