import Swal from 'sweetalert2'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.REACT_APP_stripe_sk);
const popup = () => {
    Swal.fire({
        title: 'Giving To FEED Zimbabwe Kids',
        html:   "<div class=''>" +
                    "<div style='font-size:14px;'>" +
                      "<p>$30 – Per month to sponsors a child</p>" +
                      "<p>$100 –Sponsors a day’s meal for the school</p>" +
                    "</div>" +
                    "<input style='padding:16px;margin-bottom:16px;width:100%;' type='text' placeholder='Giving To FEED Zimbabwe Kids amount' id='amount'/>" +
                    "<label>" +
                        "<input class='is-subscription' type='checkbox' id='is-subscription'/> I want to Giving To FEED Zimbabwe Kids this amount every month." +
                    "</label>" +
                "</div>",
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Close",
        confirmButtonColor: "rgb(248, 111, 45)",
        confirmButtonText:
          'Proceed the donation <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          console.log(result)
        },
        preConfirm: (value) => {
            console.log(value)
            let output = {
              amount: document.getElementById('amount').value,
              mode: document.getElementById('is-subscription').checked == true ? 'subscription' : 'payment'
            }
            if( !output.amount ) {
              Swal.showValidationMessage(
                'Please put a valid amount'
              )
              return false
            } else {
              return output
            }
        }
    }).then(result => {
        console.log(result)
        create_payment_url(result.value.amount, result.value.mode)
    })
}
const create_payment_url = ( amount, mode) => {
  // Create the Checkout Session
  console.log(mode)
  let session_data = {
    payment_method_types: ['card'],
    mode: mode,
    success_url: 'https://feedzim.org/thankyou',
    cancel_url: 'https://feedzim.org/',
    billing_address_collection: 'required'
  }
  session_data.line_items = [
    {
      quantity: 1,
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Giving To FEED Zimbabwe Kids',
        },
        unit_amount: parseInt(amount * 100),
      }
    }
  ]
  if( mode != 'payment' ) {
    session_data.line_items[0].price_data.recurring = {
      interval: 'month'
    }
  }
  stripe.checkout.sessions.create(session_data, function(err, session) {
    if (err) {
      console.log(err);
    } else {
      window.location.href = session.url;
    }
  });
}
export default popup