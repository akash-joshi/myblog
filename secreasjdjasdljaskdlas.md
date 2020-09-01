1. Introduction

React Hooks have changed the developer landscape. They allow developers of all levels to make applications easily while adhering to a high level of development standards. 

In this article, we shall learn how hooks make our development process easier and faster by building a chatting application.

For an introduction to React Hooks, you can refer my introductory article below:

Link to Learn By Building: React Hooks

2. What are we building?

We are building a chat application using Create-React-App. While doing so, we will be using a selection of React Hooks to make our development process easier and to remove a lot of boiler-plate code from the code base.

There are several open-source hooks available online. These hooks can be directly consumed to build features which otherwise would have taken several lines of code. They also generally follow well recognized standards for any functionality. In effect, this increases your efficiency in writing code and provides functionalities to you in a secure manner.

Let's delve into building the actual app.

3. Chat app features

The chat application we are going to build will have the following features:

- Getting a list of past messages sent from the server
- Connecting to a room for group chatting
- Getting updates when people disconnect from or connect to a room
- Sending and receiving messages

Check out a glimpse of the completed app below:

![chat-movie-0977ad31-5053-43ba-b75e-dda0e4f661e7.m4v](/chat-movie-0977ad31-5053-43ba-b75e-dda0e4f661e7.m4v)

4. Building the chat application

Assumptions :

- Consider [the server](https://github.com/akash-joshi/socket-server) we are going to use as a blackbox. Don't worry about its working as we're going to communicate with it using simple sockets.
- All the styles used within the app are linked in the repository [here](https://github.com/akash-joshi/socket-blog-client/blob/master/src/index.css). All the styles exist in one CSS file, which you can simply copy to your src directory.

Prerequisites:

- Node & npm are required to run React. You can [set them up here](https://nodejs.org/).

Setup:

a. Run the following commands in your preferred directory:

    ```bash
    npx create-react-app socket-client
    cd socket-client
    npm start
    ```

b. Now navigate to [http://localhost:3000](http://localhost:3000) in your browser. This will open the default webpage.

a. useState:

About the hook: 

The first hook we're going to use is useState. It allows us to maintain state within our component. Data that remains constant, such as username, room which the user is connected to, etc. is stored in useState variables. This ensures the data remains easily available.

Advantage:

The main advantage that the useState hook provides to us is that whenever we update the state of the app, it's automatically reflected in the rendered component. On the other hand, if we use regular variables, they aren't considered as the state of the component and will have to be passed as props to re-render our component.

Implementation:

The hook is included by default, so we can import it from react directly:

    ```import React, { useState } from 'react';```

The hook is used as follows:

 ```const [data, setData] = useState(default_value)```

We will create a simple component which returns **Hello** if the user is already logged in, or returns a login form if (S)he is not. We check the `id` variable for that.

We will handle the form submission via our function, `handleSubmit`. Name field is checked for input. If it exists, we will set the id & room values.

  ```javascript
    // App.js
    
    import React, { useState } from 'react';
    
    import './index.css';
    
    export default () => {
      const [room, setRoom] = useState('');
      const [id, setId] = useState('');
    
      const handleSubmit = e => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
    		const room_value = document.querySelector('#room').value.trim();
        if (!name) {
          return alert("Name can't be empty");
        }
        setId(name);
        setRoom(document.querySelector('#room').value.trim());
      };
    
      return id !== '' ? (
        <div>Hello</div>
      ) : (
        <div style={{ textAlign: 'center', margin: '30vh auto', width: '70%' }}>
          <form onSubmit={event => handleSubmit(event)}>
            <input id="name" required placeholder="What is your name .." /><br />
            <input id="room" placeholder="What is your room .." /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
  ```

![](/gif1-307a1084-968b-4a99-932c-b89a8d467ff0.gif)

b. use-socket.io-client :

About the hook:

We use [use-socket.io-client](https://github.com/iamgyz/use-socket.io-client) to maintain a connection to our server. This connection is maintained by using the React Hooks version of the [socket.io library](http://socket.io/docs). [Socket.io](http://socket.io) is an easier way of maintaining websocket connections with a server. We are using it for sending & receiving messages, and for also maintaining events like connecting to a room.

Advantage:

The default [socket.io](http://socket.io) client library has global declarations, i.e., the socket variable you define can be used by any component. However, your data can be manipulated from anywhere and you won't know where it's changing. Socket hooks counter this by allowing only component level hook definitions, so each component is responsible for its own data transfer.

Implementation:

Add the hook to your application by running:

    npm add use-socket.io-client

The hook is used as follows:

`const [socket] = useSocket('socket-url')`

All the socket APIs we will use can be found in the [socket.io documentation](https://socket.io/docs).

For now, simply **import** the hook, 

  ```
    ... // snippet
    import React, { useState } from 'react';
    import useSocket from 'use-socket.io-client';
    ...
  ```

**Initialize** it by connecting to our server and **log** the socket, to check whether it is connected.

  ```
    ... // snippet
    const [id, setId] = useState('');
    const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
    
    socket.connect();
    console.log(socket);
    ...
  ```

![](/Screenshot_2019-05-08_at_4-f6eaffb8-6550-4eba-a6f2-5cd3f1d06f0b.59.06_PM.png)

c. use-immer & useEffect hooks :

About the hooks:

We use the [use-immer](https://github.com/immerjs/use-immer) hook to manage state of arrays and objects without mutating the original state. It combines [useState](https://reactjs.org/docs/hooks-state.html) & [Immer](https://github.com/mweststrate/immer) to give immutable state management. We use it to manage lists of people who are online & the messages that need to be displayed.

Advantage:

Using Immer with useState allows us to change the array or object by creating a new state from the current state and not mutating the current state directly. This offers us more safety.

Implementation:

Add the hook by running :

    ```npm add use-immer```

The use-immer hook is used as follows:

    ```const [data, setData] = useImmer(default_value)```

The setData hook is used as follows:

  ```javascript
    setData(draftState => { 
    	draftState.operation(); 
    });
    \\ OR
    setData(draft => newState);
    \\ Here, draftState is a copy of the current data
  ```

We use the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook to run a piece of code only when the application loads. This also ensures that our code only runs once and not every time our component re-renders. We put our socket logic inside useEffect so that we don't get the same messages repeatedly when a component re-renders.

First, let's import our Hooks :

  ```js
    ...
    import React, { useState, useEffect } from 'react';
    import useSocket from 'use-socket.io-client';
    import { useImmer } from 'use-immer';
    ...
  ```

We will create a **Messages** component which renders a **message** or an **update** based on the presence or absence of a **sender id** in the array.

  ```js
    ...
    import './index.css';
    
    const Messages = props => props.data.map(m => m[0] !== '' ? 
    (<li key={m[0]}><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) 
    : (<li key={m[1]} className="update">{m[1]}</li>) );
    ...
  ```

We will define our message hook in the component. We will then connect to the socket, and set up listeners for updates and messages in the **Effect Hook**. We will also set up update functions inside the listeners.

  ```js
    ...
      const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
    	
    	socket.connect();
    
      const [messages, setMessages] = useImmer([]);
    
      useEffect(()=>{
    
        socket.on('update',message => setMessages(draft => {
          draft.push(['',message]);
        }));
    
    		socket.on('message que',(nick,message) => {
    	    setMessages(draft => {
    	      draft.push([nick,message])
    	    })
    	  });
      },0);
    ...
  ```

We will send a 'join' message if the username & room name are correct. This triggers the rest of the event listeners and we can receive past messages sent in that room along with any updates required.  

  ```js
    ...
        setRoom(document.querySelector('#room').value.trim());
    
        socket.emit("join", name,room);
      };
    
      return id ? (
        <section style={{display:'flex',flexDirection:'row'}} >
          <ul id="messages"><Messages data={messages}></Messages></ul>
          <ul id="online"> 🌐 :</ul>
          <div id="sendform">
            <form id="messageform" style={{display:  'flex'}}>
                <input id="m" /><button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      ) : (
    ...
  ```

![](Screenshot_2019-05-08_at_6-5db1a9a7-78b0-45f1-a5fa-afff018e40df.02.18_PM.png)

d. Finishing the app

To complete our chat app, we only require a few more additions.

- A component to display people who are online
- A useImmer hook for it and a socket listener
- A message submission handler with appropriate sockets

  ```js
    // App.js
    
    import React, { useState, useEffect } from 'react';
    import useSocket from 'use-socket.io-client';
    import { useImmer } from 'use-immer';
    
    import './index.css';
    
    const Messages = props => props.data.map(m => m[0] !== '' ? (<li><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) : (<li className="update">{m[1]}</li>) );
    
    const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);
    
    export default () => {
      const [room, setRoom] = useState('');
      const [id, setId] = useState('');
    
      const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
    	socket.connect();
    
      const [messages, setMessages] = useImmer([]);
    
      const [online, setOnline] = useImmer([]);
    
      useEffect(()=>{
        socket.on('message que',(nick,message) => {
          setMessages(draft => {
            draft.push([nick,message])
          })
        });
    
        socket.on('update',message => setMessages(draft => {
          draft.push(['',message]);
        }))
    
        socket.on('people-list',people => {
          let newState = [];
          for(let person in people){
            newState.push([people[person].id,people[person].nick]);
          }
          setOnline(draft=>{draft.push(...newState)});
          console.log(online)
        });
    
        socket.on('add-person',(nick,id)=>{
          setOnline(draft => {
            draft.push([id,nick])
          })
        })
    
        socket.on('remove-person',id=>{
          setOnline(draft => draft.filter(m => m[0] !== id))
        })
    
        socket.on('chat message',(nick,message)=>{
          setMessages(draft => {draft.push([nick,message])})
        })
      },0);
    
      const handleSubmit = e => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
    		const room_value = document.querySelector('#room').value.trim();
        if (!name) {
          return alert("Name can't be empty");
        }
        setId(name);
        setRoom(document.querySelector('#room').value.trim());
        console.log(room)
        socket.emit("join", name,room_value);
      };
    
      const handleSend = e => {
        e.preventDefault();
        const input = document.querySelector('#m');
        if(input.value.trim() !== ''){
          socket.emit('chat message',input.value,room);
          input.value = '';
        }
      }
    
      return id ? (
        <section style={{display:'flex',flexDirection:'row'}} >
          <ul id="messages"><Messages data={messages} /></ul>
          <ul id="online"> 🌐 : <Online data={online} /> </ul>
          <div id="sendform">
            <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
                <input id="m" /><button style={{width:'75px'}} type="submit">Send</button>
            </form>
          </div>
        </section>
      ) : (
        <div style={{ textAlign: 'center', margin: '30vh auto', width: '70%' }}>
          <form onSubmit={event => handleSubmit(event)}>
            <input id="name" required placeholder="What is your name .." /><br />
            <input id="room" placeholder="What is your room .." /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
  ```

That's it! You now have a fully functional group chat application!

The complete code for the project can be found here : [https://github.com/akash-joshi/fcc-socket-client](https://github.com/akash-joshi/fcc-socket-client).

5. What next?

This article is merely a glimpse of how React Hooks can boost your productivity and help you build powerful applications easily.

I have built a more rich chat application in the following comprehensive tutorial. Follow along to explore the power of React Hooks further.

Link to the detailed blog on Flexiple

Also, you can now use your newly gained knowledge to make a lot of apps. Here are a few ideas to get you started:

- Blogging Application
- Instagram Clone
- Reddit Clone
- Beautiful Single Page Website

Where you can find me :

[Twitter](https://twitter.com/akashtrikon) [LinkedIn](https://in.linkedin.com/in/akash-s-joshi) [GitHub](https://github.com/akash-joshi)

Short para on me

Akash is a Tech Writer at Flexiple & an Open Source Contributor who finds joy in making useful software.