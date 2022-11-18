function switchDisplay(): void {
  const contentCard = document.getElementById('resume-card');
  if (contentCard === null) {
    console.log("未找到content");
    return;
  }

  // 交换flex和none状态
  const displayStyle = contentCard.style.display;
  contentCard.style.display = displayStyle === 'flex' ? 'none' : 'flex';

  console.log("switched display style");
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
      target: {tabId: tab.id ? tab.id : -1},
      func: switchDisplay
  }).then();
});

// // popup ---> content
// function sendSwitchDisplay() {
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, (tabs) => {
//     let message = {
//       info: '来自popup的情书💌'
//     }
//     chrome.tabs.sendMessage(<number>tabs[0].id, message, res => {
//       console.log('popup=>content')
//       console.log(res)
//     })
//   })
// };
// window.sendSwitchDisplay = sendSwitchDisplay;


// // get popup2content info
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request.info)
//   sendResponse('我收到了你的情书，popup~')
// })