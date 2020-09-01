---
title: My FireBase Learnings
status: draft
---

# My FireBase Learnings

[[toc]]

![Header Image](/fire.png)

## 1. Get FireStore data from a Cloud Function

First, initialize admin and db. 

> This should only be done once. Preferably in the root function file.

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();
```

Exported code,

```javascript
exports.getData = functions.https.onRequest((req, res) => {
	const docRef = db.collection('collection name').doc('document name');
	const getDoc = docRef.get()
	  .then(doc => {
	    if (!doc.exists) {
	      console.log('No such document!');
	      return res.send('Not Found')
	    } 
	      console.log(doc.data());
	      return res.send(doc.data());
	  })
	  .catch(err => {
	    console.log('Error getting document', err);
	  });
});
```

That's it 😄 !

## 2. Get a random element from a FireStore collection

Firstly, get the collection data in a variable :

```javascript
const unassigned = db
      .collection('Gigs')
      .doc(gigid)
      .collection('Unassigned');

const data = await unassigned.get();
```

Then loop over the data, while storing current document id in a temporary variable : 

```js
let temp;
data.forEach(doc => {
	temp = doc.id;
});
console.log(temp);
```

That's it ! You get a random Document in your variable. This is not the way you should do it, however Firebase has no way to select random documents from a collection, so this has to do 😕. 

<a href="https://www.buymeacoffee.com/akashjoshi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Get in touch !!

[Github](https://www.github.com/akash-joshi) [LinkedIn](https://www.linkedin.com/in/akash-s-joshi) [Twitter](https://twitter.com/iamkrusty)