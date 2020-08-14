import { get_User } from "../R-Const/TypeofAction";
import db, { auth, provider, firebaseTimestamp } from "../firebase/config";

export const SignIn = () => dispatch => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      dispatch({ type: get_User, payload: result });
    })
    .catch(err => console.log("err", err));
};

export const sendMessage = (
  e,
  userName,
  avatar,
  inputValue,
  channelId
) => dispatch => {
  e.preventDefault();

  channelId &&
    db.collection("Rooms").doc(channelId).collection("messages").add({
      message: inputValue,
      timestamp: firebaseTimestamp,
      user: userName,
      userimages: avatar,
    });
};
