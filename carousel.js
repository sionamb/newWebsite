const cards = document.getElementsByClassName("card")

console.log(cards)
console.log(cards.length)

let currentIndex = 0
createLinkedList()

function createLinkedList(){
    class DoublyLinkedList {
        constructor() {
            this.nodes = [];
        }
      
        get size() {
            return this.nodes.length;
        }
      
        get head() {
            return this.size ? this.nodes[0] : null;
        }
      
        get tail() {
            return this.size ? this.nodes[this.size - 1] : null;
        }

        insertAt(index, value) {
            const previousNode = this.nodes[index - 1] || null;
            const nextNode = this.nodes[index] || null;
            const node = { value, next: nextNode, previous: previousNode };
        
            if (previousNode) previousNode.next = node;
            if (nextNode) nextNode.previous = node;
            this.nodes.splice(index, 0, node);
        }
        insertLast(value) {
            this.insertAt(this.size, value);
        }
    }

    const list = new DoublyLinkedList();
    for(let i = 0; i < cards.length; i++){
        list.insertLast(cards[i])
        console.log(cards[i])
    }
    //make the doubly linked list circular
    list.head.previous = list.tail
    list.tail.next = list.head
    console.log(list)

    displayFirst(list)

    const prevBtn = document.getElementById("previous")
    prevBtn.addEventListener("click", (e) =>{
        prev(list)
    })

    const nextBtn = document.getElementById("next")
    nextBtn.addEventListener("click", (e) =>{
        next(list)
    })

}

function displayFirst(list){
    // console.log(list.nodes[0].value)

    list.nodes[currentIndex].previous.value.style.display = "block"
    list.nodes[currentIndex].value.style.display = "block"
    list.nodes[currentIndex].next.value.style.display = "block"
}

function prev(list){
    //remove current cards
    removeCards()

    console.log(currentIndex)

    currentIndex--
    console.log(currentIndex)

    if(currentIndex < 0){
        currentIndex = 6
    }
    console.log(currentIndex)
    console.log(list.nodes[currentIndex].value)
    list.nodes[currentIndex].previous.value.style.display = "block"
    list.nodes[currentIndex].value.style.display = "block"
    list.nodes[currentIndex].next.value.style.display = "block"
}

function next(list){
    //remove current cards
    removeCards()

    console.log(currentIndex)

    currentIndex++
    console.log(currentIndex)

    if(currentIndex > 6){
        currentIndex = 0
    }
    console.log(currentIndex)
    console.log(list.nodes[currentIndex].value)
    list.nodes[currentIndex].previous.value.style.display = "block"
    list.nodes[currentIndex].value.style.display = "block"
    list.nodes[currentIndex].next.value.style.display = "block"
}

function removeCards(){
    for(i = 0; i < cards.length; i++){
        cards[i].style.display = "none"
    }
}