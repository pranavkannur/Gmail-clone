import { createSlice } from "@reduxjs/toolkit";

// Sample mail data
const initialMailData = [
  {
    id: "1",
    sender: "recruiter@google.com",
    subject: "Interview Invitation",
    message:
      "We would like to invite you for an interview for the position of Frontend Developer at Google.",
    date: "15 Mar",
    read: false,
    starred: false,
    folder: "inbox",
  },
  {
    id: "2",
    sender: "team@github.com",
    subject: "Your repository has been forked",
    message:
      'Your repository "gmail-clone" has been forked by 5 users in the last week.',
    date: "12 Mar",
    read: true,
    starred: true,
    folder: "inbox",
  },
  {
    id: "3",
    sender: "no-reply@linkedin.com",
    subject: "New connection request",
    message:
      "You have 3 new connection requests on LinkedIn. Click here to view them.",
    date: "10 Mar",
    read: true,
    starred: false,
    folder: "inbox",
  },
  {
    id: "4",
    sender: "billing@amazonprime.com",
    subject: "Your Amazon Prime subscription",
    message:
      "Your Amazon Prime subscription will renew on March 25, 2025. Please update your payment method if needed.",
    date: "8 Mar",
    read: false,
    starred: false,
    folder: "inbox",
  },
  {
    id: "5",
    sender: "you@gmail.com",
    subject: "Project Update",
    message:
      "Here are the latest updates for our current project. Please review and provide feedback.",
    date: "5 Mar",
    read: true,
    starred: false,
    folder: "sent",
  },
];

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mails: initialMailData,
    selectedMailId: null,
    composeOpen: false,
    activeTab: "Primary",
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMailId = action.payload;
      // Mark as read when selected
      const mailIndex = state.mails.findIndex(
        (mail) => mail.id === action.payload
      );
      if (mailIndex >= 0) {
        state.mails[mailIndex].read = true;
      }
    },
    toggleCompose: (state) => {
      state.composeOpen = !state.composeOpen;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleStarred: (state, action) => {
      const mailIndex = state.mails.findIndex(
        (mail) => mail.id === action.payload
      );
      if (mailIndex >= 0) {
        state.mails[mailIndex].starred = !state.mails[mailIndex].starred;
      }
    },
    sendMail: (state, action) => {
      const { subject, message } = action.payload;
      const newMail = {
        id: String(Date.now()),
        sender: "you@gmail.com",
        subject,
        message,
        date: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        }),
        read: true,
        starred: false,
        folder: "sent",
      };
      state.mails.unshift(newMail);
      state.composeOpen = false;
    },
    deleteMail: (state, action) => {
      state.mails = state.mails.filter((mail) => mail.id !== action.payload);
      if (state.selectedMailId === action.payload) {
        state.selectedMailId = null;
      }
    },
  },
});

export const {
  selectMail,
  toggleCompose,
  setActiveTab,
  toggleStarred,
  sendMail,
  deleteMail,
} = mailSlice.actions;

export default mailSlice.reducer;
