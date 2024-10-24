import Swal from 'sweetalert2'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.REACT_APP_stripe_sk);
const popup = () => {
    let payment_links = {
      one_time: {
        2500 : 'https://donate.stripe.com/dR65lL9ln1qbdTq5ks',
        1000 : 'https://donate.stripe.com/00g7tTbtv4Cn6qYfZ5',
        250 : 'https://donate.stripe.com/5kA29z8hj6Kv8z6fZ4',
        75 : 'https://donate.stripe.com/28o4hH2WZ5Gr16EaEJ',
        25 : 'https://donate.stripe.com/14kbK9cxzecXcPmeUY'
      },
      monthly: {
        2500 : "https://buy.stripe.com/3csdSh5574CncPm9AK",
        1000 : "https://buy.stripe.com/00geWlgNP5GrbLieV5",
        250 : "https://buy.stripe.com/4gwaG58hj2uf9DaaEQ",
        75 : "https://buy.stripe.com/fZeaG5btvgl502AcMZ",
        25 : "https://buy.stripe.com/3cs29zeFHecX16EfZc"
      }
    }
    Swal.fire({
        title: 'Giving To FEED Zimbabwe Kids',
        html:   "<div class=''>" +
                    "<div style='font-size:14px;'>" +
                      "<p>$40 – Per month to Sponsor a Child's meal</p>" +
                      "<p>$200 – Sponsors a day's meal for the School</p>" +
                    "</div>" +
                    "<div style='display:flex;justify-content:center;align-items:center; gap:24px;margin:6px 0'>" +
                      "<label for='package_amount' style='display: flex; align-items: center; gap: 4px;'>" +
                          "<input class='is-subscription' type='radio' id='package_amount' name='amount_tpe' checked/> Tuition donation" +
                      "</label>" +
                      "<label for='any_amount' style='display: flex; align-items: center; gap: 4px;'>" +
                          "<input class='' type='radio' id='any_amount' name='amount_tpe'/> Any donation" +
                      "</label>" +
                    "</div>" +
                    "<div id='amount_checkbox_div'>" +
                      "<input style='padding:16px;margin-bottom:16px;width:100%;' type='text' placeholder='Please enter amount' id='amount'/>" +
                      "<label style='display: block; text-align: left;'>" +
                        "<input class='is-subscription' type='checkbox' id='is-subscription' checked/> I want to Give this amount every month." +
                      "</label>" +
                    "</div>" +
                    "<div id='select_package'>" +
                      "<select style='padding:16px;margin-bottom:16px;width:100%;' id='select_package_field'>" +
                        "<option value='' selected disabled>Please select a donation</option>" +
                        "<option value='2500'>$2,500 - Sponsor tuition for 100 children a semester</option>" +
                        "<option value='1000'>$1,000 - Towards the building fund</option>" +
                        "<option value='250'>$250 - Sponsor tuition for 10 children a semester</option>" +
                        "<option value='75'>$75 - Sponsor a child tuition for a year</option>" +
                        "<option value='25'>$25 - Sponsor a child tuition for a semester</option>" +
                      "</select>" +
                      "<label style='display: block; text-align: left;'>" +
                        "<input class='tuition-is-subscription' type='checkbox' id='tuition-is-subscription' checked/> I want to Give this tuition amount every month." +
                      "</label>" +
                    "</div>" +
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
          amount_checkbox_div.style.display = 'none';  
          select_package.style.display = 'block';
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
          const selectedPackage = document.getElementById('select_package_field').value;
          let tuition_mode = 'one_time';
          if( document.getElementById('package_amount').checked ) {
            if( document.getElementById('tuition-is-subscription').checked ) {
              tuition_mode = 'monthly';
            }
          }
          console.log(tuition_mode, selectedPackage, payment_links[tuition_mode][selectedPackage])
          let output = {
            amount: document.getElementById('any_amount').checked ? amount : null,
            redirectUrl: document.getElementById('package_amount').checked ? payment_links[tuition_mode][selectedPackage] : null,
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