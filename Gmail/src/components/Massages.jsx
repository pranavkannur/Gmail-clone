import React from 'react';
import Massage from './Massage';
import { useSelector } from 'react-redux';

const Massages = () => {
  const { mails, activeTab } = useSelector(state => state.mail);
  
  // Filter mails based on active tab
  const filteredMails = mails.filter(mail => {
    if (activeTab === 'Primary') {
      return mail.folder === 'inbox';
    } else if (activeTab === 'Social') {
      return mail.sender.includes('linkedin') || mail.sender.includes('facebook');
    } else if (activeTab === 'Promotions') {
      return mail.sender.includes('amazon') || mail.subject.toLowerCase().includes('offer');
    }
    return true;
  });

  return (
    <div>
      {filteredMails.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No messages in this category</p>
        </div>
      ) : (
        filteredMails.map(mail => (
          <Massage
            key={mail.id}
            id={mail.id}
            sender={mail.sender}
            subject={mail.subject}
            message={mail.message}
            date={mail.date}
          />
        ))
      )}
    </div>
  );
};

export default Massages;