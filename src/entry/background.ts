// popup ---> content
function sendSwitchDisplay() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    let message = {
      info: '来自popup的情书💌'
    }
    chrome.tabs.sendMessage(<number>tabs[0].id, message, res => {
      console.log('popup=>content')
      console.log(res)
    })
  })
};


// get popup2content info
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.info)
  sendResponse('我收到了你的情书，popup~')
})