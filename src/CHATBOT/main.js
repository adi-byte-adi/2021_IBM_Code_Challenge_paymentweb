let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Phoenix", "Hi, I am a Robo", "Hello, My name is Phoenix"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let payment=["Can you please say your Consumer ID","What is your Consumer ID?"]
let mobile = ["May I know your Registered Mobile Number?","Registered mobile number please!!"];
let OTP=["An OTP has been send to your mobile number","A OTP has been generated"];
let amt=["You have to Pay Rupees 500","You have to make a payment of Rupees 5000","You bill amount is Rupees 4100"];
let paymentmode=["Which mode of payment do you prefer?","Do you want Google pay, phonepe or net banking?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let Googlepay=['Ok I will take you there'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";

    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('I want to make a payment'||'Can you assist me for making a payment?')){
        let finalresult = payment[Math.floor(Math.random() * payment.length)];
        speech.text = finalresult;
    }

    if(message.includes('123')){
        let finalresult = mobile[Math.floor(Math.random() * mobile.length)];
        speech.text = finalresult;
    }
    if(message.includes('987')){
        let finalresult =OTP[Math.floor(Math.random() * OTP.length)];
        speech.text = finalresult;
    }
    if(message.includes('345')){
        let finalresult = amt[Math.floor(Math.random() * amt.length)];
        speech.text = finalresult;
    }
    if(message.includes('I want to pay')){
        let finalresult = paymentmode[Math.floor(Math.random() * paymentmode.length)];
        speech.text = finalresult;
    }
    if(message.includes('Google pay')){
        let finalresult = Googlepay[Math.floor(Math.random() * Googlepay.length)];
        speech.text = finalresult;
        window.parent.location.href='https://pay.google.com/gp/w/u/0/home/signup';
    }
    if(message.includes('phonepe')){
        let finalresult = Googlepay[Math.floor(Math.random() * Googlepay.length)];
        speech.text = finalresult;
        window.parent.location.href='https://www.phonepe.com/how-to-pay/pay-by-phonepe/android/';
    }
    if(message.includes('net banking')){
        let finalresult = Googlepay[Math.floor(Math.random() * Googlepay.length)];
        speech.text = finalresult;
        window.parent.location.href='https://netbanking.canarabank.in/entry/ENULogin.jsp';
    }
  /*  if(message.includes('credit or debit')){
       /* let finalresult = Googlepay[Math.floor(Math.random() * Googlepay.length)];
        speech.text = finalresult;
        window.location.replace('PAYMENT.HTML');
    }*/

    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
