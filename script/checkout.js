var address = document.querySelector("#checkout_adress_div");
    var payment = document.querySelector("#checkout_payment_div");
    var order = document.querySelector("#checkout_order_status_div");

    var userdata = JSON.parse(localStorage.getItem("user"));

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

    console.log("₹ "+amount);
    console.log("tax "+Math.floor((amount*12)/100));
    

    function addDetails(){

        address.style.display = "none";
        payment.style.display = "block";
    }

    function makepayment(){
        setTimeout(()=>{
            payment.style.display = "none";
            alert("Payment Recived...Order Placed.")
            order.style.display = "block";
        },3000);
    }

    function cancelorder(){
        setTimeout(()=>{
            alert("Our order is canceled. Countinue shoping");
        }, 2000)
    }