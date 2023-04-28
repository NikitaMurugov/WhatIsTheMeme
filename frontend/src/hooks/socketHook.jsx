import { useEffect } from 'react';
import { createSocketConnection } from '../services/socketService';

// function listen(callBack, channel, event) {
//     window.Echo.private(channel).listen(event, (payload) => {
//         callBack(payload);
//     });
//
//     return function cleanUp() {
//         window.Echo.leaveChannel(`private-${channel}`);
//     };
// }
function join(channel, callBack, joiningCallBack, leavingCallBack) {
    window.Echo.join(channel)
        .joining((e) => joiningCallBack(e))
        .leaving((e) => leavingCallBack(e));
    return function echo() {
        return window.Echo;
    };
}

export const enterLobby = (lobbyKey, callBack, joiningCallBack = () => {}, leavingCallBack = () => {}) => {
    useEffect(() => {
        createSocketConnection();
        return join(`lobby.${lobbyKey}`, callBack, joiningCallBack, leavingCallBack);
    });
};
