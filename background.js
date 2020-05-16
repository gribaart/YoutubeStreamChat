// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({number: 1}, function() {
    console.log('The number is set to 1.');
  });
});

function updateIcon() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log("1 " + tabs[0].url);
    // use `url` here inside the callback because it's asynchronous!
  });
  
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("CLICK ME");
  btn.appendChild(t);
  //Appending to DOM 
  document.body.appendChild(btn);
  var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('foo');
const log = chrome.extension.getBackgroundPage().console.log;
log('something')

  var screen = document.getElementById('player-theater-container');
    var chat = document.getElementById('chat');
    console.log(screen);
    console.log(chat);

  chrome.storage.sync.get('number', function(data) {
    
    var current = data.number;
    chrome.browserAction.setIcon({path: 'icon' + current + '.png'});
    current++;
    if (current > 5)
      current = 1;
    chrome.storage.sync.set({number: current}, function() {
      console.log('The number is set to ' + current);
    });
  });
};

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();


