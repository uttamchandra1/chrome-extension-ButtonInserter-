chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: insertButton
    });
  });
  
  function insertButton() {
    if (!document.getElementById('myCustomButton')) {
      const button = document.createElement("button");
      button.id = 'myCustomButton'; 
      button.innerText = "Click Me";
      button.style.position = "fixed";
      button.style.top = "10%";
      button.style.right = "45%";
      button.style.fontSize = "14px";
      button.style.padding = "6px 10px";
      button.style.borderRadius = "4px";
      button.style.backgroundColor = "#0092CC";
      document.body.appendChild(button);
      console.log("Button inserted successfully");
    } else {
      console.log("Button already exists");
    }
  }
  
  