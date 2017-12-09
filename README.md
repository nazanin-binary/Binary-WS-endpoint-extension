# Binary-WS-endpoint-extension

<b>Note:</b>
This extension only works on Binary.com platforms.

This extension helps you change <i>App id</i> and switch Websocket connection between frontend, blue, green and any available servers in Binary platforms for quality assurance purposes. The default server will be `frontend.binaryws.com` and default_app_id can either be the predefined <i>default app id</i> (especific for any of binary's projects) or the <i>app id</i> you've got after registering your application <a href="https://developers.binary.com/applications/">here</a>. You can reset endpoint to default values anytime via <i>reset</i> button in extension.

This chrome extension will add items to localStorage based on Login id, Url and App id, these items are `default_app_id`, `app_id` and `server_url`.

By using this extension on binary.com projects you set these items with names `config.default_app_id`, `config.app_id` and `config.server_url` in localStorage.

<b>How to work with this project</b></br>
`git clone git@github.com:binary-com/Binary-WS-endpoint-extension.git` </br>
`cd Binary-WS-endpoint-extension` </br>
`npm install` </br>

Go to google chrome's extension manager and enable developer mode, then open this project via <i>load unpacked extension</i>
the extension must be enabled for developing.
