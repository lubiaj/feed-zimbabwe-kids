import Swal from 'sweetalert2'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.REACT_APP_stripe_sk);
const popup = () => {
    Swal.fire({
        title: 'Giving To FEED Zimbabwe Kids',
        html:   "<div class=''>" +
                    "<div style='font-size:14px;'>" +
                      "<p>$30 – Per month to Sponsor a Child</p>" +
                      "<p>$100 – Sponsors a day's meal for the School</p>" +
                    "</div>" +
                    "<div style='display:flex;justify-content:center;align-items:center; gap:24px;margin:6px 0'>" +
                      "<label for='any_amount' style='display: flex; align-items: center; gap: 4px;'>" +
                          "<input class='' type='radio' id='any_amount' name='amount_tpe' checked/> Any amount" +
                      "</label>" +
                      "<label for='package_amount' style='display: flex; align-items: center; gap: 4px;'>" +
                          "<input class='is-subscription' type='radio' id='package_amount' name='amount_tpe'/> Package amount" +
                      "</label>" +
                    "</div>" +
                    "<div id='amount_checkbox_div'>" +
                      "<input style='padding:16px;margin-bottom:16px;width:100%;' type='text' placeholder='Please enter amount' id='amount'/>" +
                      "<label style='display: block; text-align: left;'>" +
                        "<input class='is-subscription' type='checkbox' id='is-subscription'/> I want to Give this amount every month." +
                      "</label>" +
                    "</div>" +
                    "<select style='padding:16px;margin-bottom:16px;width:100%;' id='select_package'>" +
                      "<option value='' selected disabled>Please select package</option>" +
                      "<option value='https://donate.stripe.com/dR65lL9ln1qbdTq5ks'>Sponsor 100 students</option>" +
                      "<option value='https://donate.stripe.com/00g7tTbtv4Cn6qYfZ5'>Towards the building fund</option>" +
                      "<option value='https://donate.stripe.com/5kA29z8hj6Kv8z6fZ4'>Sponsor 10 children to school a semester</option>" +
                      "<option value='https://donate.stripe.com/28o4hH2WZ5Gr16EaEJ'>Tuition for a year</option>" +
                      "<option value='https://donate.stripe.com/14kbK9cxzecXcPmeUY'>Tuition for a child a semester</option>" +
                    "</select>" +
                "</div>",
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Close",
        confirmButtonColor: "rgb(248, 111, 45)",
        confirmButtonText:
          'Proceed with Giving <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          console.log(result)
        },
        didOpen: () => {
          const amount_checkbox_div = document.getElementById('amount_checkbox_div');
          const amount_input = document.getElementById('amount');
          const select_package = document.getElementById('select_package');
          const any_amount_radio = document.getElementById('any_amount');
          const package_amount_radio = document.getElementById('package_amount');
          amount_checkbox_div.style.display = 'block';  
          select_package.style.display = 'none';
          any_amount_radio.addEventListener('change', () => {
            Swal.resetValidationMessage();
            amount_checkbox_div.style.display = 'block';
            select_package.style.display = 'none';
            amount_input.value = '';
          });
          package_amount_radio.addEventListener('change', () => {
            Swal.resetValidationMessage();
            amount_checkbox_div.style.display = 'none';
            select_package.style.display = 'block';
            // select_package.value = '';
          });
      },
      
      preConfirm: (value) => {
          console.log(value)
          const amount = document.getElementById('amount').value;
          const selectedPackage = document.getElementById('select_package').value;
          let output = {
            amount: document.getElementById('any_amount').checked ? amount : null,
            redirectUrl: document.getElementById('package_amount').checked ? selectedPackage : null,
            mode: document.getElementById('is-subscription').checked == true ? 'subscription' : 'payment'
          }
          if (document.getElementById('any_amount').checked && !amount) {
            Swal.showValidationMessage('Please put a valid amount');
            return false;
          } else if (document.getElementById('package_amount').checked && selectedPackage == "") {
            Swal.showValidationMessage('Please select a package');
            return false;
          }
          return output;
      }
      }).then(result => {
          console.log(result)
          if (result.isConfirmed) {
            if (result.value.redirectUrl) {
              window.location.href = result.value.redirectUrl;
            } else {
              create_payment_url(result.value.amount, result.value.mode);
            }
        }
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