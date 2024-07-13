const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  it('Deve criar uma fila', () => {
    queue = new Queue();
    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toEqual(0);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add(1);
    expect(queue.size()).toEqual(1);
  });

  it('Deve escolher o primeiro item da fila', () => {
    queue.add(2);
    queue.add(3);
    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(3);
  });

  it('Deve remover o primeiro item da fila', () => {
    expect(queue.dequeue()).toEqual(1);
    expect(queue.size()).toEqual(2);
  });
});
