class Queue {
  constructor() {
    this.elements = [];
    this.queueSize = 0;
  }

  size() {
    return this.queueSize;
  }

  add(item) {
    this.elements.push(item);
    this.queueSize++;
  }

  peek() {
    return this.elements[0];
  }

  dequeue() {
    this.queueSize--;
    return this.elements.shift();
  }
}

module.exports = Queue;
describe('Queue', () => {
  let queue;
},


  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: [] });
  }),

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toEqual(1);
  }),

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add(1);
    expect(queue.size()).toEqual(1);
  }),


  it('Deve escolher o primeiro item da fila', () => {
    queue.add(2);
    queue.add(3);
    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(3);
  }));
