class MyQueue {
    constructor(){
        this.queue =[]
    }

    enqueue(val){
        this.queue.push(val)
    }

    dequeue(){
        this.queue.shift()
    }

    peek(){
        if(this.queue.length !=0){
            return console.log(this.queue[this.queue.length -1]);
        }
    }

    display(){
        console.log(this.queue);
    }

    isEmpty(){
        // if(this.queue.length == 0){
        //     console.log('The Queue is Empty');
        // }else{
        //    console.log('Queue is not Empty'); 
        // }

        let x = this.queue.length == 0 ? true : false
        console.log(x);
    }

    clear(){
        while(this.queue.length !== 0){
            this.queue.pop()
        }
        console.log('The Queue is empty');
    }
}

let queue =new MyQueue

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(30)

queue.dequeue()

queue.display()
queue.peek()
queue.clear()
queue.isEmpty()