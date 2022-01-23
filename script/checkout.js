    var address = document.querySelector("#checkout_adress_div");
    var payment = document.querySelector("#checkout_payment_div");
    var order = document.querySelector("#checkout_order_status_div");



    var userdata = JSON.parse(localStorage.getItem("user_order"));

    var cart = JSON.parse(localStorage.getItem("cart"));

    var amount = 0;
    cart.forEach(({prodprice})=>{
        amount += (+prodprice);
    });

    var tax = Math.floor((amount*12)/100);

    var totalamount = amount+tax;

    document.querySelector("#show_amount_to_pay").textContent = "₹ "+amount;

    document.querySelector("#show_tax_to_pay").textContent = "₹ "+tax;
    document.querySelector("#show_total_amount_to_pay").textContent = "₹ "+(tax+amount);
    document.querySelector("#show_order_user_total_amount").textContent = "₹ "+(tax+amount);

    console.log("₹ "+amount);
    console.log("tax "+Math.floor((amount*12)/100));
    

    function addDetails(){

            var firstName = document.querySelector("#userfirstname").value;
            var lastName = document.querySelector("#userlastname").value;
            var userAddress = document.querySelector("#useraddress").value;
            var userEmail = document.querySelector("#useremail").value;
            var phoneNumber = document.querySelector("#userphnnum").value;

            if(firstName === "" || lastName === "" || userAddress === "" || userEmail === "" || phoneNumber === ""){
                alert("Error! Fill all slot");
            }
            else{
                var userName = firstName +" "+lastName
                var obj = {
                    name: userName,
                    address: userAddress,
                }

                localStorage.setItem("user_order", JSON.stringify(obj));

                address.style.display = "none";
                payment.style.display = "block";
            }
    }

    function makepayment(){
        var cardno = document.querySelector("#cardnumber").value;
        var date = document.querySelector("#cardexpirydate").value;
        var cvv = document.querySelector("#cardcvv").value;

        if(cardno == "" || date == "" || cvv == ""){
            alert("Error! Fill all slot");
        }
        else{
            alert("Payment Processing");

            document.querySelector("#show_order_user_name").textContent = userdata.name;
            document.querySelector("#show_order_user_address").textContent = userdata.address;

            setTimeout(()=>{
                payment.style.display = "none";
                alert("Payment Recived...Order Placed.")
                order.style.display = "block";
            },3000);
        }
    }

    function cancelorder(){
        setTimeout(()=>{
            alert("Our order is canceled. Countinue shoping");
        }, 2000)
    }