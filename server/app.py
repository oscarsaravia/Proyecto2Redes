from aiohttp import web
import socketio
import uuid
import random

## creates a new Async Socket IO Server
# sio = socketio.AsyncServer()
sio = socketio.AsyncServer(cors_allowed_origins='*')
## Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
## instance
sio.attach(app)

## we can define aiohttp endpoints just as we normally
## would with no change
async def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')


cards = ['CLUB_A', 'CLUB_2', 'CLUB_3', 'CLUB_4', 'CLUB_5', 'CLUB_6', 'CLUB_7', 'CLUB_8', 'CLUB_9', 'CLUB_10', 'CLUB_J', 'CLUB_Q', 'CLUB_K', 'DIAMOND_A', 'DIAMOND_2', 'DIAMOND_3', 'DIAMOND_4', 'DIAMOND_5', 'DIAMOND_6', 'DIAMOND_7', 'DIAMOND_8', 'DIAMOND_9', 'DIAMOND_10', 'DIAMOND_J', 'DIAMOND_Q', 'DIAMOND_K', 'HEART_A', 'HEART_2', 'HEART_3', 'HEART_4', 'HEART_5', 'HEART_6', 'HEART_7', 'HEART_8', 'HEART_9', 'HEART_10', 'HEART_J', 'HEART_Q', 'HEART_K', 'SPADE_A', 'SPADE_2', 'SPADE_3', 'SPADE_4', 'SPADE_5', 'SPADE_6', 'SPADE_7', 'SPADE_8', 'SPADE_9', 'SPADE_10', 'SPADE_J', 'SPADE_Q', 'SPADE_K', 'JOKER_1', 'JOKER_2', 'JOKER_3']
rooms = {}

'''
  @param username
  @return {
    response,
    code,
    body: {
      room_id
    }
  }
'''
@sio.on('create_room')
async def join_room(_, username):
  room_id = str(uuid.uuid1())
  rooms[room_id] = {
    "id": room_id,
    "players": {
        "owner": {
            "username": username,
            "cards": [],
        }
    }
  }
  print("Created room: " , room_id)
  await sio.emit('room_created', {
    "response": "room_created",
    "code": 200,
    "body": {
      "room_id": room_id
    }
  })

'''
  @param room_id string
  @param username string
  @return {
    response,
    code,
    body: {
      owner: string,
      room_id: string,
      players: []
    }
  }
'''
@sio.on('join_room')
async def join_room(_, room_id, username):

  rooms[room_id]['players'][username] = {
    "username": username,
    "cards": [],
  }

  print(username, " Joined room: " , room_id)
  await sio.emit('joined_room', {
    "response": "joined_room",
    "code": 200,
    "body": {
      "room_id": room_id,
      "owner": rooms[room_id]['players']['owner']['username'],
      "players": rooms[room_id]['players'],
    }
  })

'''
  @param room_id string
  @return {
    response,
    code,
    body: {
      players: [{
        username: string,
        position: number,
        cards: strings[]
      }]
    }
  }
'''
@sio.on('start_game')
async def start_game(_, room_id):
    player_count = len(rooms[room_id]['players'])
    new_cards = cards.copy()
    random.shuffle(new_cards)
    players = list(rooms[room_id]['players'].keys())
    random.shuffle(players)
    
    for i in range(len(new_cards)):
        player_pos = i%player_count
        rooms[room_id]['players'][players[player_pos]]['cards'].append(new_cards[i])
    
    for i in range(len(players)):
        rooms[room_id]['players'][players[i]]['position'] = i

  
    print("Game started in room: " , room_id, rooms[room_id]['players'])
    await sio.emit('game_started', {
        "response": "game_started",
        "code": 200,
        "body": {
            "players": rooms[room_id]['players'],
        }
    })

## We bind our aiohttp endpoint to our app
## router
app.router.add_get('/', index)

## We kick off our server
if __name__ == '__main__':
    web.run_app(app)