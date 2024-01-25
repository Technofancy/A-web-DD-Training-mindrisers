let blogs = [
    {
      title: "Exploring Tomorrow",
      created_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      title: "Career in Web ",
      created_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      title: "Degrees Dying",
      created_at: "2024-01-17T14:06:24.457394+05:45",
    },
    {
      title: "Career in Digital Marketing",
      created_at: "2024-01-17T11:02:40.936608+05:45",
    },
  ];

//   "full name".substring(0,5);

  let date = blogs[0].created_at.substring(0,10)
  console.log("Date : ", date );

  console.log(`${blogs[1].title}: ${blogs[1].created_at.substring(0,10)}`)
  
  function blogInfo(index) {
    console.log(`${blogs[index].title}: ${blogs[index].created_at.substring(0,10)}`)
  }

  blogInfo(0)
  blogInfo(1)
  blogInfo(2)

  let members = [
    {
      name: "Ram",
      joined_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      name: "Hari",
      joined_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      name: "Sita",
      joined_at: "2024-01-17T14:06:24.457394+05:45",
    },
    {
        name: "Gita",
        joined_at: "2024-01-15T14:06:24.457394+05:45",
    }
  ];

  function memberJoinedAt(index) {
    console.log(`${members[index].name} joined at ${members[index].joined_at.substring(0,10)}`)
  }

  memberJoinedAt(0)
  memberJoinedAt(1)
  memberJoinedAt(2)

  // object destructuring
  function membersJoined(index) {
    let {name, joined_at} = members[index];
    console.log(`${name} joined at ${joined_at.substring(0,10)}`)
  };
  membersJoined(3);
