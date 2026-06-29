export function drawBug(ctx, x, y, s, frame, color, hover) {
  const c = hover ? '#ffffff' : (color || '#1cdb66')
  const body = [
    [0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],
  ]
  body.forEach((row, ry) => row.forEach((cell, rx) => {
    if (cell) { ctx.fillStyle = c; ctx.fillRect(x + rx * s, y + ry * s, s, s) }
  }))
  ctx.fillStyle = '#000'
  ctx.fillRect(x + 2 * s, y + 2 * s, s, s)
  ctx.fillRect(x + 5 * s, y + 2 * s, s, s)
  const ant = frame === 0
    ? [[0,-2],[1,-1],[6,-1],[7,-2]]
    : [[-1,-2],[1,-1],[6,-1],[8,-2]]
  ctx.fillStyle = c
  ant.forEach(([ax, ay]) => ctx.fillRect(x + ax * s, y + ay * s, s, s))
  const legs = frame === 0
    ? [[-2,2],[9,2],[-2,4],[9,4],[-2,6],[9,6]]
    : [[-3,2],[10,2],[-2,4],[9,4],[-3,6],[10,6]]
  legs.forEach(([lx, ly]) => { ctx.fillStyle = c; ctx.fillRect(x + lx * s, y + ly * s, s, s) })
}
