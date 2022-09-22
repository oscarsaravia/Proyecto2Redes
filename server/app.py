from aiohttp import web
import socketio
import uuid

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



rooms = []

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
  rooms.append({
    "room_id": room_id,
    "player": [{
      "username": username
    }]
  })
  print("Created room: " , room_id)
  await sio.emit({
    "response": "room_created",
    "code": 200,
    "body": {
      "room_id": room_id
    }
  })


## We bind our aiohttp endpoint to our app
## router
app.router.add_get('/', index)

## We kick off our server
if __name__ == '__main__':
    web.run_app(app)