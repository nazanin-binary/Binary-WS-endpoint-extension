# endpoint-chrome-extension
Endpoint for staging.binary.com


This chrome extension will add 2 items to localStorage based on loginid, url and app id,
To be able to use this on binary.com projects you should set these 2 items with names config.app_id and config.server_url in localStorage.
With this plugin you can shift websocket connection between 'blue' and 'green' servers, and also you can change app id for quality assurance purposes.

<b>How to work with this project</b></br>
`git clone git@github.com:nazaninreihani/endpoint-chrome-extension.git` </br>
`cd endpoint-chrome-extension` </br>
`npm install` </br>

Go to google chrome's extension manager and enable developer mode, then open this project via <i>load unpacked extension</i>
the extension must be enabled for developing

