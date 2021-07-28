alert("main");

function log(str){
  return function(event){
    console.log(str);
    console.log(event)
  }
}

let events = [
  "turbo:click",
  "turbo:before-visit",
  "turbo:visit",
  "turbo:submit-start",
  "turbo:before-fetch-request",
  "turbo:before-fetch-response",
  "turbo:submit-end",
  "turbo:before-cache",
  "turbo:before-render",
  "turbo:before-stream-render",
  "turbo:render",
  "turbo:load"
]

events.forEach(event => {
  addEventListener(event, log(event));
});


Turbo.setProgressBarDelay(0)