export function changeColor(color: string) {
  switch (color) {
    case 'gray':
      return 'rgba(155,154,151,0.4)';
    case 'brown':
      return 'rgba(147,114,100,0.5)';
    case 'orange':
      return 'rgba(255,163,68,0.5)';
    case 'yellow':
      return 'rgba(255,220,73,0.5)';
    case 'green':
      return 'rgba(77,171,154,0.5)';
    case 'blue':
      return 'rgba(82,156,202,0.5)';
    case 'purple':
      return 'rgba(154,109,215,0.5)';
    case 'pink':
      return 'rgba(226,85,161,0.5)';
    case 'red':
      return 'rgba(255,115,105,0.5)';
    default:
      return '#FFFFFF';
  }
}
