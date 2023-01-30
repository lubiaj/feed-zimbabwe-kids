import Swal from 'sweetalert2'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.REACT_APP_stripe_sk);
const popup = () => {
    Swal.fire({
        title: 'Giving To FEED Zimbabwe Kids',
        html:   "<div class=''>" +
                    "<input style='padding:16px;margin-bottom:16px;width:100%;' type='text' placeholder='Donation amount' id='amount'/>" +
                    "<label>" +
                        "<input class='is-subscription' type='checkbox' id='is-subscription'/> I want to donate this amount every month." +
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
    cancel_url: 'https://feedzim.org/'
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
const Section2 = () => {
    return(
        <section class="ftco-counter ftco-intro" id="section-counter">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-1 align-items-stretch">
                  <div class="text">
                    <span style={{fontSize:"48px"}}>Served Over</span>
                    <strong style={{fontSize:"48px"}} class="number" data-number="1432805">1,500,000</strong> Meals
                    <span>3,600 meals served weekly</span>
                  </div>
                </div>
              </div>
              <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-2 align-items-stretch">
                  <div class="text text-center">
                    <h3 style={{fontSize:"48px"}} class="mb-4">Giving</h3>
                    <p style={{fontSize:"22px",fontWeight:"400",minHeight:"220px"}}>Empowering society starts with rebuilding children, families and hence communities.</p>
                    <p>
                      <button onClick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Give Now</button>
                      {/* <a href="#" onclick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Give Now</a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-3 align-items-stretch">
                  <div class="text text-center">
                    <h3 style={{fontSize:"48px"}} class="mb-4">Get Involved</h3>
                    <p style={{fontSize:"22px",fontWeight:"400"}}>Opportunities to be the hands and feet of Jesus</p>
                    <p>
                      {/* <a href="#" onclick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Get Involved</a> */}
                      <button onClick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Get Involved</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Section2