export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const LINES_PER_LEVEL = 10;
export const COLORS = [
  'none',
  'rgba(123, 221, 255)',
  'rgba(23, 163, 255)',
  'rgba(242, 175, 160)', 
  'rgba(25, 255, 232)', 
  'rgba(35, 19, 58)', 
  'rgba(21, 176, 176)', 
  'rgba(202, 133, 222)',
];

export const SHAPES = [
  [],
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
  [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
  [[4, 4], [4, 4]],
  [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
  [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
  [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];

export class KEY {
  static readonly ESC = 27;
  static readonly SPACE = 32;
  static readonly LEFT = 37;
  static readonly UP = 38;
  static readonly RIGHT = 39;
  static readonly DOWN = 40;
}

export class POINTS {
  static readonly SINGLE = 100;
  static readonly DOUBLE = 300;
  static readonly TRIPLE = 500;
  static readonly TETRIS = 800;
  static readonly SOFT_DROP = 1;
  static readonly HARD_DROP = 2;
}

export class LEVEL {
  static readonly 0 = 800;
  static readonly 1 = 720;
  static readonly 2 = 630;
  static readonly 3 = 550;
  static readonly 4 = 470;
  static readonly 5 = 380;
  static readonly 6 = 300;
  static readonly 7 = 220;
  static readonly 8 = 130;
  static readonly 9 = 100;
  static readonly 10 = 80;
  static readonly 11 = 80;
  static readonly 12 = 80;
  static readonly 13 = 70;
  static readonly 14 = 70;
  static readonly 15 = 70;
  static readonly 16 = 50;
  static readonly 17 = 50;
  static readonly 18 = 50;
  static readonly 19 = 30;
  static readonly 20 = 30;
  // 29+ is 20ms
}
