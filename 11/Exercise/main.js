const Queue = require('./Queue')

const q1 = new Queue()

q1.addOrder("pizza")
q1.addOrder("pasta")
q1.addOrder("macaroni")
q1.addOrder("burger")

console.log(q1.queueList)

q1.run()