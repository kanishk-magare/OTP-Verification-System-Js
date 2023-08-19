document.getElementById("generate").onclick = () => {



    var num1 = Math.floor(Math.random() * 9) + 1
    console.log(num1);
    var num2 = Math.floor(Math.random() * 9) + 1
    console.log(num2);
    var num3 = Math.floor(Math.random() * 9) + 1
    console.log(num3);
    var num4 = Math.floor(Math.random() * 9) + 1
    console.log(num4);


    var num = `${num1}${num2}${num3}${num4}`;
    console.log(typeof (num));

    var msg = alert(`Yout OTP is: ${num}`)
    var otpp;


    var l = document.getElementById("submit")
    l.textContent = "Verify oTP";


    //to jump on next inpfield
    var inputs = document.getElementsByClassName("inputf");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', (event) => {
            if (inputs[i].value.length === inputs[i].maxLength) {
                focusNext(i);
            }
        });
    }
    
    function focusNext(currentIndex) {
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
    


    document.getElementById("submit").onclick = () => {


        var otp1 = document.getElementById("otp1").value
        // console.log(otp1);
        var otp2 = document.getElementById("otp2").value
        // console.log(otp2);
        var otp3 = document.getElementById("otp3").value
        // console.log(otp3);
        var otp4 = document.getElementById("otp4").value
        otpp = `${otp1}${otp2}${otp3}${otp4}`;
        console.log(typeof (otpp));
        // console.log(otpp);


        var reg = document.getElementById("submit").value

        if (num === otpp) {
            var g = document.getElementById("enter")
            g.textContent = "Verified✔️"
            var h = document.getElementById("submit")
            h.textContent = "Submitted";
            h.style.backgroundColor = '#4071F4';
            h.style.color = "white";



        }
        else {
            var k = document.getElementById("enter")
            k.textContent = "Invalid❌"
            var q = document.getElementById("submit")
            q.textContent = "Regenerate";
        }
        if (num !== otpp) {
            document.getElementById("submit").onclick = () => {
                var resendotp = alert(`Yout OTP is: ${num}`)


            }

        }

    }

    console.log(otpp);


}



