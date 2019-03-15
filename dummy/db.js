const mails = {
    messages : [{
        id: 1,
        createdOn: 2009,
        subject: "Learning",
        message: "Learn to re-learn",
        senderId: 1,
        receiverId: 2,
        parentMessageId: 2,
        status: "unread"
    },

    {
        id: 2,
        createdOn: 2009,
        subject: "Learning",
        message: "Learn to re-learn",
        senderId: 1,
        receiverId: 2,
        parentMessageId: 2,
        status: "draft"
    }
],

    draftMessages : [{
        id: 1,
        createdOn: 2009,
        subject: "Learning",
        message: "Learn to re-learn",
        senderId: 1,
        receiverId: 2,
        parentMessageId: 2,
        status: "draft"
    }
],

   sentMessages : [{
    id: 1,
    createdOn: 2009,
    subject: "Learning",
    message: "Learn to re-learn",
    senderId: 1,
    receiverId: 2,
    parentMessageId: 2,
    status: "sent"
}

   ],

   unreadMessages : [{
        id: 1,
        createdOn: 2009,
        subject: "Learning",
        message: "Learn to re-learn",
        senderId: 1,
        receiverId: 2,
        parentMessageId: 2,
        status: "unread"
}
   ],

    users: [{
        id: 1,
		email: "admin@yahoo.com",
		firstName: "ayobami",
		lastName: "Dangote",
		password: "thisisandela"
	
    }]
}

export default mails;