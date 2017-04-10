import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('players?role=') >= 0 || request.url === 'players') {
            var role;
            if (request.url.indexOf('?') >= 0) {
              role = request.url.split('=')[1];
              if (role === 'undefined') role = '';
            }
            var players;
            if (role) {
              players = this._Players.filter(player => player.role === role);
            } else {
              players = this._Players;
            }
            responseOptions = new ResponseOptions({
              body: { players: JSON.parse(JSON.stringify(players)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            players = this._Players.filter(player => player.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(players[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var player = JSON.parse(request.text().toString());
          player.id = this._getNewId();
          this._Players.push(player);
          console.log(this._Players);
          responseOptions = new ResponseOptions({ status: 201 });
         
          break;
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _getNewId() {
    if (this._Players.length > 0) {
      return Math.max.apply(Math, this._Players.map(players=> players.id)) + 1;
    }
  }

  _Players=[{
    id: 1,
    photo: "../media/01.png",
    nick: "Arteezy",
    name: "Artour Babaev",
    team: "Evil Geniouses",
    role: "Position1",
    winTI: false,
    age: "21",
  },
  {
    id: 2,
    photo: "../media/01.png",
    nick: "Sumail",
    name: "Sumail Hasan",
    team: "Evil Geniouses",
    role: "Position2",
    winTI: true,
    age: "18",
  },
  {
    id: 3,
    photo: "../media/01.png",
    nick: "Universe",
    name: "Sahil Aurora",
    team: "Evil Geniouses",
    role: "Position3",
    winTI: true,
    age: "25",
  },
  {
    id: 4,
    photo: "../media/01.png",
    nick: "ppd",
    name: "Peter Pandam Dager",
    team: "Evil Geniouses",
    role: "Position5",
    winTI: true,
    age: "27",
  },
  {
    id: 5,
    photo: "../media/01.png",
    nick: "Zai",
    name: "Ludwig Wåhlberg",
    team: "Evil Geniouses",
    role: "Position4",
    winTI: false,
    age: "21",
  }
  ];

}
