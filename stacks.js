class stacks {
    constructor(){
        this.stacks  = []
    }

    push(val){
        this.stacks.push(val)
    }

    pop(){
        if(this.stacks.length != 0){
            this.stacks.pop()
        }else{
            console.log('The stack is empty');
        }
    }
    peek(){
        if(this.stacks.length !=0){
            return console.log(this.stacks[this.stacks.length -1]);
        }
    }

    display(){
        console.log(this.stacks);
    }

    isEmpty(){
        if(this.stacks.length == 0){
            console.log('The stack is Empty');
        }else{
           console.log('Stack is not Empty'); 
        }
    }

    clear(){
        while(this.stacks.length !== 0){
            this.stacks.pop()
        }
    }
}

let stack =new stacks
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()

stack.display()
// stack.peek()
// stack.clear()
// stack.isEmpty()