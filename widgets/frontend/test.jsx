{
  session {
    id: "7",
    username: "Elvis",
    photo: "samplephoto.com/userid/"
  },

  groups {
    17: {
      id: "17",
      name: "Most Excellent",
      photo: "samplephoto.com/groupid/",
      groupMembers: [90,80,45],
      eventIds: [97,98,99]
    },
    37: {
      id: "37",
      name: "Flavors of Rice",
      photo: "samplephoto.com/groupid/",
      groupMembers: [14,62,101],
      eventIds: [77,78,87,88]
    },
    77: {
      id: "77",
      name: "Dealzone",
      photo: "samplephoto.com/groupid/",
      groupMembers: [4,54,104],
      eventIds: [107,456,789]
    }
  },

  events {
    97: {
      id: 97,
      name: "The adventure begins",
      photo: "samplephoto.com/eventid/",
      userId: 90,
      groupId: 17,
      attendees: [5,6,7,8]
    },
    87: {
      id: 87,
      name: "Wonders of Basmati",
      photo: "samplephoto.com/eventid/",
      userId: 14,
      groupId: 37,
      attendees: [1,1,3,5,8]
    },
    107: {
      id: 107
      name: "REI campout for 50% off any single item",
      photo: "samplephoto.com/eventid/",
      userId: 54,
      groupId: 77,
      attendees: [4,9,16,25]
    },
  },

  errors {
    login: ["Invalid credentials (username/password)"]
  }
}