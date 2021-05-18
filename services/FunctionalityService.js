import firebase from 'firebase/app';
import "firebase/firestore";

import { db } from './config';

const FunctionalityService = {
    generateUID() {
        let firstPart = (Math.random() * 46656) | 'A';
        //let secondPart = (Math.random() * 46656) | 0;
        firstPart = ("0000" + firstPart.toString(36)).slice(-3);
        //secondPart = ("000" + secondPart.toString(36)).slice(-3);
        return firstPart + 'FQF';
    },
    createRoom() {
        let id = this.generateUID().toUpperCase();
        return db.collection('rooms').doc(id).set({
            inGame: false,
            players: 1
        }).then(() => id);
    },
    getRoom(id) {
        return db.collection('rooms').doc(id)
            .get()
            .then(snapshot => Object.assign(snapshot.data(), { id: snapshot.id }));
    },
    addPlayerToRoom(id) {
        db.collection('rooms').doc(id).update({
            players: firebase.firestore.FieldValue.increment(1)
        });
    },
    deletePlayerFromRoom(id) {
        db.collection('rooms').doc(id).update({
            players: firebase.firestore.FieldValue.increment(-1)
        });
    },
    startGame(id) {
        db.collection('rooms').doc(id).update({
            inGame: true
        });
    },
    makeTransfer(idSender, idDestiny, value) {
        let batch = db.batch();

        let senderRef = db.collection('players').doc(idSender);
        batch.update(senderRef, { coin: firebase.firestore.FieldValue.increment(-value) });

        let destinyRef = db.collection('players').doc(idDestiny);
        batch.update(destinyRef, { coin: firebase.firestore.FieldValue.increment(value) });

        batch.commit();
    },
    toPlant(player) {
        db.collection('players').doc(player.id).update(player);
    },
    getProduct(name) {
        const products = db
            .collection('products').where('name', '==', name)
            .get()
            .then(snapshot => {
                let _products = [];
                snapshot.forEach(function (doc) {
                    _products.push(Object.assign(doc.data(), { id: doc.id }));
                });
                return _products[0];
            });
        return products;
    },
    getProducts() {
        const products = db
            .collection('products').orderBy('type')
            .get()
            .then(snapshot => {
                let _products = [];
                snapshot.forEach(function (doc) {
                    _products.push(Object.assign(doc.data(), { id: doc.id }));
                });
                return _products;
            });
        return products;
    },
    getOffers(idBuyer, room) {
        const offers = db
            .collection('offers').where('idBuyer', '==', idBuyer).where("room", "==", room)
            .get()
            .then(snapshot => {
                let _offers = [];
                snapshot.forEach(function (doc) {
                    _offers.push(Object.assign(doc.data(), { id: doc.id }));
                });
                return _offers;
            });
        return offers;
    },
    addOffer(seller, idBuyer, price, amount, product, type) {
        db.collection('offers').add({
            idSeller: seller.id,
            room: seller.room,
            amount,
            product,
            price,
            idBuyer,
            type
        });
    },
    deleteOffer(item) {
        db.collection('offers').doc(item.id)
            .get()
            .then(function (snapshot) {
                snapshot.ref.delete();
            }
            );
    },
    addLog(transferReceived, transferSend,) {
        db.collection('logs').add({
            transferReceived,
            transferSend
        });
    },
    updateLog(transferReceived, transferSend,) {
        db.collection('logs').doc(id).update({
            transferReceived,
            transferSend
        });
    },
}

export default FunctionalityService;