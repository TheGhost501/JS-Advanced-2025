function createSortedList() {

    const list = {
        numbers: [],
        add(element) {
            this.numbers.push(element);
            this.size++;
            if (this.numbers.length > 1) {
                this.numbers.sort((a, b) => a - b);
            }
        },
        remove(index) {
            if (index < this.size && index >= 0) {
                this.numbers.splice(index, 1)
                this.size--;
            }
        },
        get(index) {
            if (index < this.size && index >= 0) {
                return this.numbers[index]
            }
        },
        size: 0
    }

    return list;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
