//aos initialize
AOS.init();

//timer countdown
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

//connect wallet true false
let isConnected = true; // true or false
let connectHead = document.getElementById("connect-head");
console.log("connected head", connectHead);
connectHead.innerHTML = isConnected
  ? `<div class="connect-button-wrapper">
<a id="conects" class="connect-button">Connect Wallet</a>
</div>`
  : `<div class="connect-wallet-text">
   <span>Your address <a class="wallet-address">0x545...445</a> is Whitelisted!</span>
  <span class="mb-0">- Refresh the page when the Pre Sale begins - </span>
 </div>`;

 // shift from one page to second
$(".main-banner-content").hide();
$("#conects").click(function () {
  $(".main-banner-content").show();
  $(".main-page").hide();
});


// pre sale wallet section


function myFunction() {

  //  e.preventDefault();

  const x = document.getElementById('inputPassword2').value;

  if ( x > 0 && x < 8 ){

  let isChangeContent = x;

  let changeContent = document.getElementById("content_1");
changeContent.innerHTML =
  isChangeContent == 1
    ? `  <div class="h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="c-data">
              <span class="head">Pre Sale Is Live</span>
              <span class="para">Connect Whitelisted Wallet To Mint</span>
          </div>

          <span class="c-button"><a href="" class="connect-button">Connect Wallet</a></span>
        </div>`
    :
    isChangeContent == 2
      ? `
      <div class="h-100 d-flex flex-column justify-content-center align-items-center">
      <div class="second-div text-center">
                        <span class="second-span">You are <span class="red">NOT</span> Whitelisted.</span>
                        <span class="second-span">You can <span class="red">NOT</span> mint during the Presale.</span>
                        <span class="second-span">...Your address <span class="green">is valid</span> to mint during the Public Sale...</span>
                    </div>
                    </div>`
      :
      isChangeContent == 3
        ? `
        <div class="h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="second-div text-center">
                        <span class="second-span">Could <span class="red">NOT</span> connect wallet!</span>
                        <span class="second-span">- Please refresh, try again, or contact us in our Discord for help -</span>
                    </div>
                    </div>`
        :
        isChangeContent == 4
          ? `
          <div class="fourth-div text-center">
            <span class="div-head">Mint A Biker NFT</span>
            <div class="price-flex-wrapper d-flex align-items-center justify-content-between">
            <div class="price-flex">
              <span class="price-tag">Mint Price</span>
              <span class="price-circle">0.066E</span>
            </div>
            <div class="price-flex">
              <span class="price-tag">Contract Type</span>
              <span class="price-circle">ERC721a</span>
            </div>
            <div class="price-flex">
              <span class="price-tag">Max Mints</span>
              <span class="price-circle">6</span>
            </div> 
          </div>
          <div class="amount-box margin-bot">
            <span class="amount-tag">Amount</span>
            <div class="d-flex align-items-center">
              <span class="amount-icon">-</span>
              <span class="amount-input">3</span>
              <span class="amount-icon">+</span>
            </div>
            <span class="amount-tag-max">Max</span>
          </div>
          <div class="amount-box margin-bot">
            <span class="amount-tag">Total</span>
            <span class="amount-tag2">0.198 ETH <span class="amount-small-text">+Gas</span></span>
          </div>
          <div class="text-center">
          <button onClick="" class="mint-button">Mint</button>
          </div>
          </div>
          `
          :
          isChangeContent == 5
            ?
            `
            <div class="fourth-div text-center">
              <span class="div-head fifth-margin">Mint A Biker NFT</span>
              <div class="text-center">
                <span class="fifth-div-tag mb-4">...Minting Your Biker(s)...</span>
                <span class="loader-img"><img src="images/load-icon-png-8-1.png" class="img-fluid" alt="logo" ></span>
              </div>
            </div>
            
            `
            :
            isChangeContent == 6
              ?
              `
              <div class="fourth-div text-center">
              <span class="div-head">Mint A Biker NFT</span>
              <div class="sixth-div">
                  <span class="sixth-tag">Mint</span>
                  <span class="sixth-small-tag green">Successful!</span>
              </div>
              <div class="sixth-div">
                  <span class="sixth-tag">Welcome To</span>
                  <span class="sixth-small-tag green">Welcome To Big Skull Biker Gang</span>
              </div>
              <div class="sixth-div">
                  <span class="sixth-tag">View at:</span>
                  <span class="sixth-url">https://opensea.com/account</span>
              </div>
            </div>
              `
              :
              isChangeContent == 7
                ? 
                `
                <div class="fourth-div text-center">
              <span class="div-head">Mint A Biker NFT</span>
              <div class="sixth-div">
                  <span class="sixth-tag">Mint</span>
                  <span class="sixth-small-tag red">Failed</span>
              </div>
              <div class="sixth-div">
                  <span class="sixth-tag">Reason</span>
                  <span class="sixth-small-tag red">Not Enough ETH</span>
              </div>
              <div class="sixth-div text-center">
                  <button onClick="" class="back-mint-button">Back To Mint</button>
              </div>
            </div>
                `
                : ` `;

  }

  else if ( x > 7){

    let isChangeContent1 = x;

  let changeContent = document.getElementById("content_1");
changeContent.innerHTML =
  isChangeContent1 > 7
    ? `  <div class="h-100 d-flex flex-column justify-content-center align-items-center">
             <span class="amount-tag"> Data Not Found </span>
        </div>`
    :
    ``;

  }

}