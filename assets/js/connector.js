	var client = new Colyseus.Client('ws://localhost:5000');
    var room;

    client.onOpen.add(function() {
        console.log("onOpen")
    });

    function addListeners (room) {
        room.onJoin.add(function() {
            console.log(room.id);
            console.log('joined!');
        })

        room.onLeave.add(function() {
            console.log("LEFT ROOM", arguments);
        });

        room.onStateChange.add(function(data) {
            console.log("chat update: ", data)
        });
    }

    function join () {
      console.log('Joined from inside');
        room = client.join('create_or_join');
        addListeners(room);
    }

    function create () {
        room = client.join('create_or_join', { create: true });
        addListeners(room);
    }

    function joinByLastId () {
        room = client.join(room.id);
        addListeners(room);
    }

    function getAvailableRooms() {
        client.getAvailableRooms('create_or_join', function(rooms, err) {
              console.log(rooms);
              });
    }

    function test(){
        alert('calling ...');
    }

    