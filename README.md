# WhatsappyApp

This is a WhatsApp clone progressive web application built with React, Node.js, and Firebase. It allows you to send messages, talk with people, search for them, and much more.

> **WARNING**: This app is just an open-source project and it doesn't have the feature of deleting your account. You will sign in with your Google account, so use a fake one. You are responsible for giving your data.

## Live Demo

Search for "alaa eddine" and talk with me.

[https://whatsappy-app.web.app/](https://whatsappy-app.web.app/)  
**ALLOW NOTIFICATIONS!!!**  
The app may not run because free limits of Firebase or hosting service have been exceeded!

## Features of the App

- Messaging users in real-time.
- You can text messages.
- You can send images.
- You can send an audio message.
- You can click on an image sent in a chat and it will smoothly animate to the center so you can see it.
- You can see if the user is typing or recording.
- You can record audio and send it.
- You can delete the conversation.
- You can search for users.
- You can see the online status of users.
- You can see unread messages.
- You will have a seen indicator at the bottom if the user saw your message.
- You have an arrow button that allows you to scroll down the chat; you also see unread messages in it.
- You can fetch 30 messages in a chat, and if you scroll up, you will fetch more messages.
- The audio slider is grey when you send an audio message, green when you receive one, and becomes blue if the receiver plays the audio.
- The audio player allows you to see the full time of the audio, and if you play it, you will see the current time.
- You can receive notifications if a user sends you a message.
- A sound is played when you send a message or receive one in a conversation.
- Another sound is played if you receive a message from another user.
- The app works offline; you can use it without the internet, and you can send text messages. Once you come back online, they will be automatically sent.
- You can click on the arrow down button on the homepage, and the web app is installed on your device.

## Development

To run the app, set up a Firebase project, then navigate to `src/firebase` and put your config object there. Afterward, go to your project settings in Firebase, get a service account file from there, and place it in the `backend` folder. Then set up an Algolia search project and put your keys in `backend/index.js` and `src/Sidebar.js`.

## Running the App

After setting up the project, in the root folder, run:

```bash
npm run start
