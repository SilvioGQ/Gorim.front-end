import firebase from 'firebase/app';
import "firebase/firestore";

import { db } from '../firebase';

const FunctionalityService = {
    makeTransfer(idSender, idDestiny, value) {
        let batch = db.batch();

        let senderRef = db.collection('players').doc(idSender);
        batch.update(senderRef, { coin: firebase.firestore.FieldValue.increment(-value) });

        let destinyRef = db.collection('players').doc(idDestiny);
        batch.update(destinyRef, { coin: firebase.firestore.FieldValue.increment(value) });

        batch.commit();
    }
}

export default FunctionalityService;