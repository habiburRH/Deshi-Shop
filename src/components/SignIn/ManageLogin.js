import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeSignIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }
}
//Google Signin
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignIn: true,
                displayName,
                email,
                imgSrc: photoURL,
                success: true
            };
            return signedInUser;
        }).catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);
        });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserInfo(name);
            return newUserInfo;
            console.log(newUserInfo);
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const SignInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(() => {
        console.log('Update User Name Success');
    }).catch(error => {
        console.log(error);
    });
}