import { useState, useEffect, memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom } from './store/atoms/atoms';
import { use } from 'react';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );  
}

function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom);

  return (
    <>
      <button>Home</button>

      <button>My network({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount < 100 ? jobsAtomCount : "99+"})</button>
      <button>Messaging({messagingAtomCount < 100 ? messagingAtomCount : "99+"})</button>
      <button>Notifications({notificationsAtomCount < 100 ? notificationsAtomCount : "99+"})</button>

      <button>Me</button>
    </>
  )
}


export default App;

